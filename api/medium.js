const MEDIUM_RSS_URL = "https://medium.com/feed/@ghostoflucifer";

function decodeXmlEntities(input = "") {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function normalizeMediumUrl(rawUrl = "") {
  try {
    const url = new URL(rawUrl.trim());
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return rawUrl;
  }
}

function stripCdata(input = "") {
  return input.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "");
}

function pickTag(itemXml, tagName) {
  const re = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = itemXml.match(re);
  if (!match) return "";
  return decodeXmlEntities(stripCdata(match[1].trim()));
}

function firstImageUrl(html = "") {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch?.[1] || "";
}

function toIdFromLink(link = "") {
  try {
    const url = new URL(link);
    const parts = url.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1] || link;
    return last.replace(/[^a-z0-9-_]/gi, "-").toLowerCase();
  } catch {
    return link.replace(/[^a-z0-9-_]/gi, "-").toLowerCase();
  }
}

function parseRssItems(xmlText = "") {
  const items = [];
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRe.exec(xmlText)) !== null) {
    const itemXml = match[1];
    const title = pickTag(itemXml, "title");
    const link = normalizeMediumUrl(pickTag(itemXml, "link"));
    const pubDate = pickTag(itemXml, "pubDate");
    const contentEncoded = pickTag(itemXml, "content:encoded");
    const description = pickTag(itemXml, "description");
    const html = contentEncoded || description;
    const coverImage = firstImageUrl(html);

    if (!title || !link) continue;

    items.push({
      id: toIdFromLink(link),
      title,
      subtitle: "",
      date: pubDate ? new Date(pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }) : "",
      coverImage,
      url: link,
    });
  }

  return items;
}

export default async function handler(req, res) {
  try {
    const rssRes = await fetch(MEDIUM_RSS_URL, {
      headers: {
        "user-agent": "parasym-syndicate/1.0 (+vercel)",
        accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.1",
      },
    });

    if (!rssRes.ok) {
      return res.status(502).json({ ok: false, error: `Failed to fetch Medium RSS (${rssRes.status})` });
    }

    const xml = await rssRes.text();
    const items = parseRssItems(xml);

    return res.status(200).json({ ok: true, items });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err?.message || "Unknown error" });
  }
}

