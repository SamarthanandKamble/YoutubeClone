export const POPULAR_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const WATCH_VIDEO_ID_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
