// npm install @mendable/firecrawl-js
import Firecrawl from "@mendable/firecrawl-js";


export const webScrap = async (url) => {
  const app = new Firecrawl({ apiKey: process.env.FIRECRWL_API_KEY });

  // Scrape a website:
  const result = await app.scrape(url);

  if (!result?.success) throw new Error("Scraping failed");

  // Step 2 — Clean karo
  const cleanContent = result
    .replace(/\[.*?\]\(.*?\)/g, "") // markdown links remove
    .replace(/#{1,6}\s/g, "") // headings ke # remove
    .replace(/\n{3,}/g, "\n\n") // extra newlines remove
    .trim();

  return cleanContent;
};

export const summarizeData = async (content) => {
  try {
    
  } catch (error) {
    throw new error(error.message)
  }
};

export const createChunks = (text, chunkSize = 500, overlap = 50) => {
  const words = text.split(" ");
  const chunks = [];
  let index = 0;

  while (index < words.length) {
    const chunk = words.slice(index, index + chunkSize).join(" ");
    chunks.push(chunk);
    index += chunkSize - overlap; // har baar same step
  }

  return chunks;
  // Har chunk:
  // slice(0, 500)    → 500 words ✅
  // slice(450, 950)  → 500 words ✅
  // slice(900, 1400) → 500 words ✅
  // Overlap: 50 words repeat hote hain ✅
};
