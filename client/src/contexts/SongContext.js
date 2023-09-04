import { createContext, useEffect, useState } from "react";

const SongContext = createContext({
  title: "",
  artist: "",
  videoID: "",
  imageURL: "",
  songLoadState: 0, // 0 - No loaded song, 1 - Loading song, 2 - Loaded song, 3 - Invalid URL for song
  updateSong: (searchInput) => {},
});

export function SongContextProvider(props) {
  // const id = "NVry-kbmVGc";
  // const id = "0qbdoxAHFyo";
  // const id = "5HuMUhX2LaI";
  // const id = "3XFXPIMdj2Y";
  const id = "jahSpftYKqg";

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [videoID, setVideoID] = useState(id);

  useEffect(() => {
    const ytAPIKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    if (videoID === "") {
      return;
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${ytAPIKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVideoID(videoID);
        if (data.items.length > 0) {
          setImageURL(data.items[0].snippet.thumbnails.standard.url);
          setTitle(data.items[0].snippet.title);
          setArtist(data.items[0].snippet.channelTitle);
        }
      });
  }, [videoID]);

  function updateSongHandler(searchInput) {
    console.log(searchInput);
    if (searchInput.includes("?v=")) {
      setVideoID(searchInput.match(/(?<=\?v=)[^&]*/)[0]);
    } else {
      setVideoID(searchInput);
    }
  }

  const context = {
    title: title,
    artist: artist,
    imageURL: imageURL,
    videoID: videoID,
    updateSong: updateSongHandler,
  };

  return (
    <SongContext.Provider value={context}>
      {props.children}
    </SongContext.Provider>
  );
}

export default SongContext;
