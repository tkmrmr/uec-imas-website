export type Post = {
  title: string;
  date: string;
  link: string;
  contentSnippet: string;
};

export type NoteData = {
  pageEmbedLinks?: Post[];
  totalCount: number;
};

export type Link = {
  href: string;
  text: string;
};
