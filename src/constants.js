export const POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const SEARCH_QUERY_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;

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
  { selected: false, value: "Watched" },
];

export const YOUTUBE_SEARCH_SUGGESTIONS_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_COMMENTS_THREAD_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";
