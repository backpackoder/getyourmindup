export type PodcastEpisodes = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null | string;
  total: number;
  items: Item[];
};

export type Item = {
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
  resume_point: ResumePoint;
  type: string;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};

export type ResumePoint = {
  fully_played: boolean;
  resume_position_ms: number;
};
