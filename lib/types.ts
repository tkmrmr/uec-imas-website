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
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  publishedYear: number;
  color: string;
};
