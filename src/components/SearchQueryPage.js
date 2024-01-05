import React, { useEffect } from "react";
import { SEARCH_QUERY_VIDEO_URL } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { addSearchQueryVideos } from "../Redux/searchQueryVideosSlice";
import { Link } from "react-router-dom";
const SearchQueryPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search?.searchQuery);

  const searchQueryVideos = useSelector(
    (state) => state.searchQueryVideos?.videos
  );

  // const searchQueryVideos = [
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "Uj41k9kIou6sn0GvejOz3BOCVu4",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "qlx4TnAr-vI",
  //     },
  //     snippet: {
  //       publishedAt: "2024-01-04T12:23:21Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/qlx4TnAr-vI/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/qlx4TnAr-vI/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/qlx4TnAr-vI/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2024-01-04T12:23:21Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "fIyBE-AhtST58AZsqwGjTt-txPs",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "AETFvQonfV8",
  //     },
  //     snippet: {
  //       publishedAt: "2011-05-10T01:35:09Z",
  //       channelId: "UCaayLD9i5x4MmIoVZxXSv_g",
  //       title:
  //         "श्री हनुमान चालीसा 🌺🙏| Shree Hanuman Chalisa Original Video |🙏🌺| GULSHAN KUMAR | HARIHARAN |Full HD",
  //       description:
  //         "परमभक्त हनुमान जी की अत्यंत मंगलकारी हनुमान चालीसा के ३०० करोड़ ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/AETFvQonfV8/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/AETFvQonfV8/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/AETFvQonfV8/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "T-Series Bhakti Sagar",
  //       liveBroadcastContent: "none",
  //       publishTime: "2011-05-10T01:35:09Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "1ZfU3Hj4gsfGMREHsWzui5tqZuw",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "4wZ9zfWyTAM",
  //     },
  //     snippet: {
  //       publishedAt: "2023-10-10T00:29:34Z",
  //       channelId: "UCZhpaDfMfjg1c1-WsAZa6Jw",
  //       title:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन कुमार हनुमान चालीसा",
  //       description:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/4wZ9zfWyTAM/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/4wZ9zfWyTAM/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/4wZ9zfWyTAM/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Shree Hanuman Chalisa",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-10-10T00:29:34Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "8q0izVbPCcK4NY8raB5jWJHhsow",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "DTlmuPNXGW0",
  //     },
  //     snippet: {
  //       publishedAt: "2023-05-24T16:00:08Z",
  //       channelId: "UCFdW92OZDoa7lDBxJXSq6Yw",
  //       title:
  //         "श्री हनुमान चालीसा 🚩🙏Shree Hanuman Chalisa | Shankar Mahadevan | #hanumanbhajan #hanumanchalisa",
  //       description:
  //         'Copyright Disclaimer: Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" Copyright Disclaimer: Under ...',
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/DTlmuPNXGW0/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/DTlmuPNXGW0/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/DTlmuPNXGW0/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Arya",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-05-24T16:00:08Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "2_EuTFJ30W6jVZgl7Kiq3f5ZPeA",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "89pQN033GIA",
  //     },
  //     snippet: {
  //       publishedAt: "2024-01-03T22:59:47Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/89pQN033GIA/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/89pQN033GIA/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/89pQN033GIA/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2024-01-03T22:59:47Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "aIRhgaIV7yD6_US8LZww0kXMMP4",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "xJ3vatsNQDU",
  //     },
  //     snippet: {
  //       publishedAt: "2020-01-06T23:02:22Z",
  //       channelId: "UCQvDS0AW6PNlHZ32jSFOcPg",
  //       title:
  //         "Hanuman Chalisa Super Fast | Hanuman Chalisa | श्री हनुमान चालीसा",
  //       description:
  //         '"Hanuman Chalisa Super Fast | Hanuman Chalisa | श्री हनुमान चालीसा" Embark on a spiritual journey of ...',
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/xJ3vatsNQDU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/xJ3vatsNQDU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/xJ3vatsNQDU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Bhakti Bhajan Mantra",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-01-06T23:02:22Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "A336_f9bqeNQ8_Rn3jiT6LasDHg",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "qwNS5KwwGeI",
  //     },
  //     snippet: {
  //       publishedAt: "2023-04-06T01:30:16Z",
  //       channelId: "UCoR-FnBQvk0fd74QIye5rfg",
  //       title:
  //         "हनुमान चालीसा | Hanuman Chalisa | Full Audio | Shankar Mahadevan | Ajay-Atul Song | 2023",
  //       description:
  //         "Hanuman Chalisa by Shankar Mahadevan | हनुमान चालीसा | Ajay Atul | Hanuman Songs | Powerful Chalisa Sing ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/qwNS5KwwGeI/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/qwNS5KwwGeI/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/qwNS5KwwGeI/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Jai Hanuman",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-04-06T01:30:16Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "2cMBqewsixDc4IvuI98O308wp4o",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "LUx8wlA_dk8",
  //     },
  //     snippet: {
  //       publishedAt: "2018-03-27T01:30:38Z",
  //       channelId: "UCaayLD9i5x4MmIoVZxXSv_g",
  //       title:
  //         "श्री हनुमान चालीसा I Shree Hanuman Chalisa I GULSHAN KUMAR, HARIHARAN I Hanuman Chalisa Ashtak",
  //       description:
  //         "Subscribe: https://www.youtube.com/user/tseries Best collection of Navratri Special bhajans ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/LUx8wlA_dk8/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/LUx8wlA_dk8/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/LUx8wlA_dk8/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "T-Series Bhakti Sagar",
  //       liveBroadcastContent: "none",
  //       publishTime: "2018-03-27T01:30:38Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "0_YnCjzZRitBsZJWEquYfaxidoo",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "T6adwpV-2Fk",
  //     },
  //     snippet: {
  //       publishedAt: "2024-01-01T16:51:31Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/T6adwpV-2Fk/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/T6adwpV-2Fk/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/T6adwpV-2Fk/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2024-01-01T16:51:31Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "xF7IYPZeDCJwkV6ShVf06kDIHDc",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "6XcSQL9lbjo",
  //     },
  //     snippet: {
  //       publishedAt: "2017-07-22T02:30:01Z",
  //       channelId: "UCy83QmbvZ3t0Dst0l73wFrA",
  //       title: "Hanuman Chalisa Telugu Lyrics - Raghava Reddy",
  //       description:
  //         "Hanuman Chalisa Telugu Lyrics - Raghava Reddy #BhakthiSongs #BhaktiSongs #the-divine-devotionallyrics.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/6XcSQL9lbjo/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/6XcSQL9lbjo/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/6XcSQL9lbjo/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "THE DIVINE - DEVOTIONAL LYRICS",
  //       liveBroadcastContent: "none",
  //       publishTime: "2017-07-22T02:30:01Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "TNJES8qXBebJTOUtFy7Vv6Piwyo",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "9q8kkmCa9GY",
  //     },
  //     snippet: {
  //       publishedAt: "2022-07-11T23:30:03Z",
  //       channelId: "UC7ZivIYRB0fMSGh-THcTYbw",
  //       title:
  //         "सबसे सुपर फास्ट हनुमान चालीसा (2.45 मिनट) | Super Fast Hanuman Chalisa Video | 3D Version",
  //       description:
  //         "सबसे सुपर फास्ट हनुमान चालीसा (2.45 मिनट) | Super Fast Hanuman Chalisa Video | 3D Version ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/9q8kkmCa9GY/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/9q8kkmCa9GY/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/9q8kkmCa9GY/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Shemaroo Bhakti",
  //       liveBroadcastContent: "none",
  //       publishTime: "2022-07-11T23:30:03Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "rWM0j2f-7RCRUjgK7yQvFSSAjfU",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "mSqe-Kr_xsQ",
  //     },
  //     snippet: {
  //       publishedAt: "2023-06-23T22:30:11Z",
  //       channelId: "UCKOmko99OIs99X9ME4jNLtQ",
  //       title:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन कुमार हनुमान चालीसा",
  //       description:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/mSqe-Kr_xsQ/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/mSqe-Kr_xsQ/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/mSqe-Kr_xsQ/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Hanuman Nonstop Bhajan",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-06-23T22:30:11Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "1C_6G156DU7z8YjvAMQqOi8P6Ds",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "PlgIlN5gmQw",
  //     },
  //     snippet: {
  //       publishedAt: "2014-04-14T12:04:04Z",
  //       channelId: "UCaayLD9i5x4MmIoVZxXSv_g",
  //       title:
  //         "Shree Hanuman Chalisa Bhajans I HARIHARAN I GULSHAN KUMAR I Full Audio Song I हनुमान जी के भजन",
  //       description:
  //         "Best collection of Navratri Special bhajans https://www.youtube.com/watch?v=s5NEusVMeEQ Hanuman Chalisa, Bhajans Click ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/PlgIlN5gmQw/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/PlgIlN5gmQw/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/PlgIlN5gmQw/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "T-Series Bhakti Sagar",
  //       liveBroadcastContent: "none",
  //       publishTime: "2014-04-14T12:04:04Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "oYU1I_Fa-LPKf62Ld8UK61w-p0c",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "sX2bYV6nSy4",
  //     },
  //     snippet: {
  //       publishedAt: "2014-07-29T15:48:30Z",
  //       channelId: "UCFFbwnve3yF62-tVXkTyHqg",
  //       title:
  //         "हनुमान चालीसा | Hanuman Chalisa Full | Shekhar Ravjiani | Video Song &amp; Lyrics | Zee Music Devotional",
  //       description:
  //         "SUBSCRIBE to Zee Music Company - https://bit.ly/2yPcBkS शेखर रवजियानी की हनुमान चालीसा फुल ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/sX2bYV6nSy4/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/sX2bYV6nSy4/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/sX2bYV6nSy4/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Zee Music Company",
  //       liveBroadcastContent: "none",
  //       publishTime: "2014-07-29T15:48:30Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "gidWExzp0u1lm3zfd2e6iF9YM44",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "HYQGzyotZ8E",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-30T12:28:14Z",
  //       channelId: "UCkoyqCndvey5N0BbQfgU1PA",
  //       title:
  //         "LIVE : श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa bhajan new",
  //       description:
  //         "hanumanchalisabhajans #hanumanchalisa #hanumangatha2022 #BalajiBhajanNew2022 #NewHanumanBhaktiSongs2022 ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/HYQGzyotZ8E/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/HYQGzyotZ8E/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/HYQGzyotZ8E/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sangram Bhakti Sagar",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-30T12:28:14Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "QtXslKHMUv3nlhn35weQebTTEBU",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "36beUiwPnxM",
  //     },
  //     snippet: {
  //       publishedAt: "2023-08-30T23:30:02Z",
  //       channelId: "UC-y0xORFFIfqYw92B64EN7A",
  //       title:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन कुमार हनुमान चालीसा",
  //       description:
  //         "Hanuman Chalisa Bhajans ! श्री हनुमान चालीसा ! संकटमोचन हनुमान अष्टक ! गुलशन ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/36beUiwPnxM/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/36beUiwPnxM/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/36beUiwPnxM/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Dhanawat Brother's",
  //       liveBroadcastContent: "none",
  //       publishTime: "2023-08-30T23:30:02Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "oOWwCwog3qd2nNw6TqJDG3GrdwE",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "hN8RhbSakR0",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-25T12:25:05Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/hN8RhbSakR0/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/hN8RhbSakR0/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/hN8RhbSakR0/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-25T12:25:05Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "Mw9EpgWVdeWTvrvxxLb7Ef0CzBY",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "lXk91eqYFG4",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-27T23:56:53Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/lXk91eqYFG4/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/lXk91eqYFG4/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/lXk91eqYFG4/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-27T23:56:53Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "NWBHwE06V8NrcB2s1Ka0CEFJLlk",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "CjpbbRTB5dU",
  //     },
  //     snippet: {
  //       publishedAt: "2024-01-03T12:26:05Z",
  //       channelId: "UCkoyqCndvey5N0BbQfgU1PA",
  //       title:
  //         "LIVE : श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa bhajan new",
  //       description:
  //         "hanumanchalisabhajans #hanumanchalisa #hanumangatha2022 #BalajiBhajanNew2022 #NewHanumanBhaktiSongs2022 ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/CjpbbRTB5dU/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/CjpbbRTB5dU/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/CjpbbRTB5dU/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sangram Bhakti Sagar",
  //       liveBroadcastContent: "none",
  //       publishTime: "2024-01-03T12:26:05Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "ejy9IwR6JF0dt_MnUbB8-YHv-mM",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "VSBsqBl4mns",
  //     },
  //     snippet: {
  //       publishedAt: "2020-04-07T22:22:04Z",
  //       channelId: "UCQvDS0AW6PNlHZ32jSFOcPg",
  //       title:
  //         "Hanuman Chalisa Super Fast 7 Times | Hanuman Chalisa | Shri Hanuman Chalisa",
  //       description:
  //         "\"Dive into Divine Bliss with 'Hanuman Chalisa Super Fast 7 Times' - The 7 Times Repeated Version of the Superhit Superfast ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/VSBsqBl4mns/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/VSBsqBl4mns/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/VSBsqBl4mns/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Bhakti Bhajan Mantra",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-04-07T22:22:04Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "ZVnJj1UmItb0EnASehfS_7wnTqU",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "xx24JlJXPn0",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-18T23:20:22Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/xx24JlJXPn0/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/xx24JlJXPn0/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/xx24JlJXPn0/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-18T23:20:22Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "4wskgnq5_Kzv0njY5ABfWWKdVEU",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "ibuBCp4Dgfw",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-26T12:09:03Z",
  //       channelId: "UCkoyqCndvey5N0BbQfgU1PA",
  //       title:
  //         "LIVE : श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa bhajan new",
  //       description:
  //         "hanumanchalisabhajans #hanumanchalisa #HanumanGatha2022 #BalajiBhajanNew2022 #NewHanumanBhaktiSongs2022 ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/ibuBCp4Dgfw/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/ibuBCp4Dgfw/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/ibuBCp4Dgfw/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Sangram Bhakti Sagar",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-26T12:09:03Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "1hKBYmtchONzaddYlLMARGDbixo",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "fG6SG3it6gA",
  //     },
  //     snippet: {
  //       publishedAt: "2023-12-24T11:45:33Z",
  //       channelId: "UCLIryeFjYeiEtpqNETz_Ydg",
  //       title:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan",
  //       description:
  //         "LIVE: श्री हनुमान चालीसा | Hanuman Chalisa | Jai Hanuman Gyan Gun Sagar |hanuman chalisa live bhajan ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/fG6SG3it6gA/default_live.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/fG6SG3it6gA/mqdefault_live.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/fG6SG3it6gA/hqdefault_live.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Prarthana Bhakti",
  //       liveBroadcastContent: "live",
  //       publishTime: "2023-12-24T11:45:33Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "cjEUxf-MA9dy8fCv1Td4OGWxUMg",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "YW90B26hnaw",
  //     },
  //     snippet: {
  //       publishedAt: "2020-10-17T16:06:40Z",
  //       channelId: "UCwpr_zu6ECpmbWE5xFLU-mA",
  //       title:
  //         "Hanuman Chalisa Super Fast || Hanuman Chalisa || हनुमान चालीसा || Brijesh Shandilya",
  //       description: "",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/YW90B26hnaw/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/YW90B26hnaw/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/YW90B26hnaw/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Brijesh Shandilya",
  //       liveBroadcastContent: "none",
  //       publishTime: "2020-10-17T16:06:40Z",
  //     },
  //   },
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "Hsftf3MCHpL8JjOfrXRrin6FTFc",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "yvmQA1iSKTg",
  //     },
  //     snippet: {
  //       publishedAt: "2019-01-08T12:34:24Z",
  //       channelId: "UCj2HG0nuFAR5X_RbcYupVZA",
  //       title:
  //         "Hanuman Chalisa - Bengali I LCS Academy I  শ্রী শ্রী হনুমান চালিশা I Biswajit Karmakar",
  //       description:
  //         "Sri Sri Hanuman Chalisa ( শ্রী শ্রী হনুমান চালিশা) by Tulshi Das (তুলসী দাস) is Sri Hanuman ...",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/yvmQA1iSKTg/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/yvmQA1iSKTg/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/yvmQA1iSKTg/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "Biswajit Karmakar",
  //       liveBroadcastContent: "none",
  //       publishTime: "2019-01-08T12:34:24Z",
  //     },
  //   },
  // ];

  const getTheSearchQueryVideo = async () => {
    try {
      const result = await fetch(
        `${SEARCH_QUERY_VIDEO_URL}${searchQuery}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const { items } = await result.json();
      dispatch(addSearchQueryVideos(items));
    } catch (error) {
      console.warn(error?.message);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getTheSearchQueryVideo();
    }
  }, [searchQuery]);

  if (!searchQueryVideos) {
    return;
  }

  const truncateString = (str) => {
    let words = str.split(" ");
    if (words.length <= 10) {
      return str;
    } else {
      return words.slice(0, words.length).join(" ") + " ...";
    }
  };

  const calculatePublishTime = (dateStr) => {
    let currentDate = new Date();
    let pastDate = new Date(dateStr);
    let timeDifference = currentDate - pastDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
      return seconds + " seconds ago";
    } else if (minutes < 60) {
      return minutes + " minutes ago";
    } else if (hours < 24) {
      return hours + " hours ago";
    } else if (days < 7) {
      return days + " days ago";
    } else if (weeks < 4) {
      return weeks + " weeks ago";
    } else if (months < 12) {
      return months + " months ago";
    } else {
      return years + " years ago";
    }
  };

  return (
    <div className="bg-gray-950 w-full md:w-full sm:w-full text-white px-6 z-10 absolute transform sm:translate-x-20 md:translate-x-16 translate-y-14 md:translate-y-14">
      {searchQueryVideos &&
        searchQueryVideos.map((video, index) => (
          <Link to={"/watch?v=" + video.id.videoId} key={index}>
            <div className="flex flex-col w-full h-auto text-white sm:flex-row my-2">
              <div className="w-full h-full sm:w-96 sm:h-52">
                <img
                  src={video.snippet?.thumbnails?.high?.url}
                  alt="video-thumbnail"
                  className="aspect-video "
                />
              </div>
              <div className="flex w-full items-start content-evenly">
                <div className="flex flex-col w-full sm:h-28 p-1">
                  <span className="text-md font-bold mt-4">
                    {truncateString(video.snippet.title)}
                  </span>
                  <span className="text-sm text-gray-300 my-2">
                    {video.snippet.channelTitle}
                  </span>
                  <span className="text-sm text-gray-300 my-2">
                    {calculatePublishTime(video.snippet.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchQueryPage;
