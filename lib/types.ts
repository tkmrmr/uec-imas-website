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

export type Bulletin = {
  id: number;
  title: string;
  image: string;
  publishedYear: string;
  color: string;
};

export type Notice = {
  date: string;
  title: string;
  content: string;
};
