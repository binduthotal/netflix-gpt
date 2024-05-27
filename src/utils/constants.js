export const BACKGROUND_IMG_URL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const LOGO_URL =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
    "https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOWPLAYING_API = "https://api.themoviedb.org/3/movie/now_playing";

export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIES_API =
    "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIES_API =
    "https://api.themoviedb.org/3/movie/upcoming";

export const TV_ARRIVING_TODAY = "https://api.themoviedb.org/3/tv/airing_today";

export const TV_ON_THE_AIR = "https://api.themoviedb.org/3/tv/on_the_air";

export const TV_POPULAR = "https://api.themoviedb.org/3/tv/popular";

export const TV_TOP_RATED = "https://api.themoviedb.org/3/tv/top_rated";

export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "telugu", name: "Telugu" },
    { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_KEY;

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINIAI_KEY;