export const POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const WATCH_VIDEO_ID_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const BUTTON_CONTAINER_LIST = [
  { selected: true, value: "All" },
  { selected: false, value: "Javascript" },
  { selected: false, value: "Computers" },
  { selected: false, value: "AI" },
  { selected: false, value: "Live" },
  { selected: false, value: "Sales" },
  { selected: false, value: "Thoughts" },
  { selected: false, value: "Gadgets" },
  { selected: false, value: "Recently uploaded" },
  { selected: false, value: "Watched" },
  { selected: false, value: "New to you" },
];
