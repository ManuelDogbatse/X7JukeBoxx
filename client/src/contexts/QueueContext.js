import { createContext, useEffect, useState, useRef } from "react";

const QueueContext = createContext();

export function QueueContextProvider(props) {
  /* 
  Song Object:
  {
    title: String,
    artist: String,
    imageURL: String,
    videoID: String
  }
  */

  // const [queue, setQueue] = useState([]);
  const queue = useRef([]);
  const [currentSong, setCurrentSong] = useState(0);
  const [songSearch, setSongSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("Queue:");
  console.log(queue.current);
  console.log(`Current Song: ${currentSong}`);

  useEffect(() => {
    async function addToQueue(songSearch) {
      console.log("addToQueue");
      const ytAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY;

      let title = "";
      let artist = "";
      let imageURL = "";
      let videoID = "";
      let isValidURL = false;

      console.log(songSearch);
      if (songSearch.includes("?v=")) {
        videoID = songSearch.match(/(?<=\?v=)[^&]*/)[0];
      } else {
        videoID = songSearch;
      }

      await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${ytAPIKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.items.length > 0) {
            isValidURL = true;
            imageURL = data.items[0].snippet.thumbnails.standard.url;
            title = data.items[0].snippet.title;
            artist = data.items[0].snippet.channelTitle;
          }
        });

      console.log(`isValidURL: ${isValidURL}`);

      if (isValidURL) {
        queue.current.push({
          title: title,
          artist: artist,
          imageURL: imageURL,
          videoID: videoID,
        });
        console.log(queue.current);
      }
      setIsLoading(true);
    }
    setIsLoading(false);
    if (songSearch !== "") {
      addToQueue(songSearch);
    }
    setSongSearch("");
  }, [songSearch]);

  function searchSongHandler(searchInput) {
    setSongSearch(searchInput);
  }

  const context = {
    queue: queue,
    currentSong: currentSong,
    isLoading: isLoading,
    searchSong: searchSongHandler,
  };

  return (
    <QueueContext.Provider value={context}>
      {props.children}
    </QueueContext.Provider>
  );
}

export default QueueContext;
