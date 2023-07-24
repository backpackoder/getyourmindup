// Assets
import PicOfThibaut from "@/assets/imgs/owners/Thibaut - Profile picture.jpg";
import PicOfMiguel from "@/assets/imgs/owners/Miguel - Profile picture.jpg";
import LOGO from "@/assets/imgs/logo/logo.png";
import DEFAULT_PROFILE_IMAGE from "@/assets/imgs/default-profile-image.png";

export const ROUTES = {
  HOME: "/",

  GOOD_ACTION_OF_THE_DAY: "/action",
  THANK_FOR_SOMETHING: "/thank",
  RELAX_YOUR_MIND: "/relax",

  // MUSIC
  RELAX_YOUR_MIND_MUSIC: "/relax/music",
  RELAX_YOUR_MIND_MUSIC_PLAYLISTS: "/relax/music/playlists",
  RELAX_YOUR_MIND_MUSIC_PLAYLISTS_PLAYLIST: (playlist: string) =>
    `/relax/music/playlists/${playlist}`,
  RELAX_YOUR_MIND_MUSIC_PLAYLISTS_PLAYLIST_TRACKS: (playlist: string) =>
    `/relax/music/playlists/${playlist}/tracks`,
  RELAX_YOUR_MIND_MUSIC_PLAYLISTS_CATEGORY: (category: string) =>
    `/relax/music/playlists/category/${category}`,
  // PODCASTS
  RELAX_YOUR_MIND_PODCASTS: "/relax/podcasts",
  RELAX_YOUR_MIND_PODCASTS_CHANNELS: "/relax/podcasts/channels",
  RELAX_YOUR_MIND_PODCASTS_CHANNELS_CHANNEL: (channel: string) =>
    `/relax/podcasts/channels/${channel}`,
  RELAX_YOUR_MIND_PODCASTS_CHANNELS_CHANNEL_EPISODES: (channel: string) =>
    `/relax/podcasts/channels/${channel}/episodes`,
  RELAX_YOUR_MIND_PODCASTS_CHANNELS_THEME: (theme: string) =>
    `/relax/podcasts/channels/theme/${theme}`,

  // Psychologists
  PSYCHOLOGISTS: {
    HOME: "/psychologists",
    PSYCHOLOGIST: (name: string) => `/psychologists/${name}`,
  },

  // Blog
  BLOG: {
    HOME: "/blog",
    ARTICLE: (title: string) => `/blog/${title}`,
  },

  // About
  ABOUT: "/about",

  // Users
  USERS: "/users",

  // Auth
  AUTH: {
    SIGN_UP: (asPath: string) => `/auth/register?p=${asPath}`,
    LOG_IN: (asPath: string) => `/auth/login?p=${asPath}`,
    LOG_OUT: "/api/auth/login",
    SIGN_IN: "/api/auth/login",
  },

  // Dashboard
  DASHBOARD: {
    HOME: "/dashboard",
    MY_ACTIONS: "/dashboard/my-actions",
    MY_THANKS: "/dashboard/my-thanks",
    MY_FAVORITES: "/dashboard/favorites",
    SETTINGS: "/dashboard/settings",
  },

  // API
  API: {
    // Users
    USERS: "/api/users",
    USER: (id: string) => `/api/users/${id}`,
    // Good action of the day
    ACTIONS: "/api/actions",
    ACTION: (id: string) => `/api/actions/${id}`,
    // Thank for something
    THANKS: "/api/thanks",
    THANK: (id: string) => `/api/thanks/${id}`,
    // Relax your mind
    RELAX: "/api/relax",
  },
};

export const OWNERS = {
  MIGUEL: {
    NAME: "Miguel",
    SURNAME: "Herrera",
    PICTURE: PicOfMiguel,
    JOB: "Fullstack web developer",
    BIO: "I am a fullstack web developer, I like to learn new things and I am passionate about technology.",
    CONTACT: {
      PHONE: null,
      LINKEDIN: "https://www.linkedin.com/in/miguel-herrera-86a8a71a4/",
      GITHUB: "https://github.com/pac008",
      TWITTER: null,
    },
  },
  THIBAUT: {
    NAME: "Thibaut",
    SURNAME: "Barbiera",
    PICTURE: PicOfThibaut,
    JOB: "Frontend web developer",
    BIO: "I am a frontend web developer, I like to learn new things and I am passionate about technology.",
    CONTACT: {
      PHONE: "+33674020502",
      LINKEDIN: "https://www.linkedin.com/in/backpackoder",
      GITHUB: "https://github.com/backpackoder",
      TWITTER: null,
    },
  },
};

export const IMAGES = {
  LOGO,
  DEFAULT_PROFILE_IMAGE,
};

export const CLIENT_SIDE_URLS = {
  BASE: "http://localhost:3000",
  // BASE: "https://getyourmindup.vercel.app/",
  SPOTIFY_API: {
    TRACKS: (playlist: string) => `/api/spotify/playlists/tracks/${playlist}`,
  },
};

export const SPOTIFY_API = {
  AUTH: {
    CLIENT_ID: process.env.spotify_client_id,
    CLIENT_SECRET: process.env.spotify_client_secret,
  },

  URLS: {
    BASE: "https://api.spotify.com/v1",
    AUTH: "https://accounts.spotify.com/api/token",
  },

  ENDPOINTS: {
    MUSIC: {
      CATEGORYS: "/browse/categories",
      CATEGORYS_PLAYLISTS: (playlist_id: string) => `/browse/categories/${playlist_id}/playlists`,
      PLAYLIST_COVER_IMAGE: (playlist_id: string) => `/playlists/${playlist_id}/images`,
      PLAYLIST: (playlist_id: string) => `/playlists/${playlist_id}`,
      PLAYLIST_ITEMS: (playlist_id: string) => `/playlists/${playlist_id}/tracks`,
    },
    PODCASTS: {
      SHOW: (show_id: string) => `/shows/${show_id}`,
      SHOW_EPISODES: (show_id: string) => `/shows/${show_id}/episodes`,
    },
    SEARCH: { SEARCH_FOR_ITEM: "/search" },
  },

  GENRE_SEEDS: {
    MUSIC: {
      CHILL: {
        title: "chill",
        description: "Music that is calm and soothing. Great for relaxing or working.",
      },
      CLASSICAL: {
        title: "classical",
        description:
          "Music that is rooted in the traditions of Western liturgical and secular music.",
      },
      SLEEP: {
        title: "sleep",
        description:
          "Sleeping is important, so here's some music to help you sleep or just have a great nap.",
      },
      AMBIENT: {
        title: "ambient",
        description:
          "Music that emphasizes tone and atmosphere over traditional musical structure or rhythm.",
      },
      SOUL: {
        title: "soul",
        description: "Music that is soulful, usually featuring vocals and a strong rhythm.",
      },
    },

    PODCASTS: {
      PERSONNAL_DEVELOPMENT: {
        title: "personnal development",
        description: "Improve your life and develop your skills.",
      },
      MOTIVATION: {
        title: "motivation",
        description: "Motivate yourself to achieve your goals.",
      },
      THERAPY: {
        title: "therapy",
        description: "Listen therapy podcasts to feel better.",
      },
      SLEEP: {
        title: "sleep",
        description: "Don't have trouble sleeping anymore.",
      },
      MEDITATION: {
        title: "meditation",
        description: "Learn how to meditate and relax your mind.",
      },
      ASMR: {
        title: "ASMR",
        description: "Listen ASMR podcasts to relax your mind.",
      },
    },
  },
};
