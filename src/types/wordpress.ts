export interface WordPressRenderedField {
  rendered: string;
  protected?: boolean;
}

export interface WordPressEmbeddedAuthor {
  id: number;
  name: string;
  url?: string;
  description?: string;
  link?: string;
  slug?: string;
  avatar_urls?: Record<string, string>;
}

export interface WordPressEmbeddedMediaSize {
  file?: string;
  width?: number;
  height?: number;
  mime_type?: string;
  source_url: string;
}

export interface WordPressEmbeddedMedia {
  id: number;
  date?: string;
  slug?: string;
  type?: string;
  link?: string;
  title?: WordPressRenderedField;
  author?: number;
  caption?: WordPressRenderedField;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
  source_url: string;
  media_details?: {
    width?: number;
    height?: number;
    file?: string;
    sizes?: Record<string, WordPressEmbeddedMediaSize>;
  };
}

export interface WordPressEmbeddedTerm {
  id: number;
  link?: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WordPressEmbedded {
  author?: WordPressEmbeddedAuthor[];
  'wp:featuredmedia'?: WordPressEmbeddedMedia[];
  'wp:term'?: WordPressEmbeddedTerm[][];
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt?: string;
  guid?: WordPressRenderedField;
  modified?: string;
  modified_gmt?: string;
  slug: string;
  status?: string;
  type?: string;
  link: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  author?: number;
  featured_media: number;
  comment_status?: string;
  ping_status?: string;
  sticky?: boolean;
  template?: string;
  format?: string;
  meta?: Record<string, unknown> | unknown[];
  categories: number[];
  tags: number[];
  _embedded?: WordPressEmbedded;
}
