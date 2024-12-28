import { NextResponse } from "next/server";
import Parser from "rss-parser";
import dayjs from "dayjs";
import type { NoteData } from "../../../lib/types";

const getNoteEmbedLink = async (): Promise<NoteData> => {
  const rssFeed = await new Parser().parseURL(
    "https://note.com/imas_uec/m/m2df6a0fbb1eb/rss"
  );
  return {
    pageEmbedLinks: rssFeed.items.map((item) => ({
      title: item.title ?? "",
      date: item.pubDate ? dayjs(item.pubDate).format("YYYY/MM/DD") : "",
      link: item.link ?? "https://note.com/imas_uec/m/m2df6a0fbb1eb",
      contentSnippet: item.contentSnippet?.replace("\n続きをみる", "") ?? "",
    })),
    totalCount: rssFeed.items.length ?? 0,
  };
};

export async function GET() {
  try {
    const data = await getNoteEmbedLink();
    return NextResponse.json(data);
  } catch (error) {
    throw error;
  }
}
