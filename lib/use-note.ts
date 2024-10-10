import useSWR from "swr";
import type { NoteData } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNote() {
  const { data, error, isLoading } = useSWR<NoteData>(
    "/api/get-note-rss",
    fetcher
  );
  return {
    noteData: data,
    isLoading,
    isError: error,
  };
}
