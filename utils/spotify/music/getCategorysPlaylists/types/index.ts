export type CategorysPlaylists = {
  playlists: {
    href: string;
    items: CategorysPlaylistsItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
};

export type CategorysPlaylistsItem = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ImagesObject[];
  name: string;
  owner: OwnerObject;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: TracksObject;
  type: string;
  uri: string;
};

export type ImagesObject = {
  height: number | null;
  url: string;
  width: number | null;
};

export type OwnerObject = {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type TracksObject = {
  href: string;
  total: number;
};

export type GetPlaylist = {
  name: string;
  description: string;
  category: CategorysPlaylists;
};
