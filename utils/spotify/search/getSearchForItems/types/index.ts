export type SearchForItems = {
  shows: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: null | string;
    total: number;
    items: Show[];
  };
};

export type Show = {
  available_markets: string[];
  copyrights: string[];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: string;
  uri: string;
  total_episodes: number;
};
