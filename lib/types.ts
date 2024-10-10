type Post = {
  title: string;
  date: string;
  link: string;
};

export type NoteData = {
  pageEmbedLinks?: Post[];
  totalCount: number;
};

export type Link = {
  href: string;
  text: string;
};
