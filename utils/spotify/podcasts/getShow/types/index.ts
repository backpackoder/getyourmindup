export type Show = {
  available_markets: string[];
  copyrights: string[];
  description: string;
  html_description: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: "mixed";
  name: string;
  publisher: string;
  type: "show";
  uri: string;
  total_episodes: number;
  episodes: {
    href: string;
    limit: number;
    next: null | string;
    offset: number;
    previous: null | string;
    total: number;
    items: Episode[];
  };
};

export type ExternalUrls = {
  spotify: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};

export type Episode = {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: "episode";
  uri: string;
};
