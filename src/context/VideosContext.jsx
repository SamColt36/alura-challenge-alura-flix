import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export const objectDefault = {
  title: "",
  category: "",
  cover: "",
  id: uuidv4(),
};

export default function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [videoSelected, setSelectedVideo] = useState(null);
  const [videoForm, setVideoForm] = useState(objectDefault);
  const [valueInputNameTitle, setValueInputNameTitle] = useState("");
  const [valueInputNameCover, setValueInputNameCover] = useState("");
  const [valueSelect, setValueSelect] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5500/videos")
      .then((body) => body.data)
      .then((resolve) => setVideos(resolve));
  }, []);

  useEffect(() => {
    setVideoForm((prevForm) => ({
      ...prevForm,
      category: valueSelect,
      title: valueInputNameTitle,
      cover: `https://img.youtube.com/vi/${valueInputNameCover}/hqdefault.jpg`,
    }));
  }, [
    valueInputNameCover,
    valueInputNameTitle,
    valueInputNameCover,
    valueSelect,
  ]);

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        videoSelected,
        setSelectedVideo,
        videoForm,
        setVideoForm,
        valueInputNameTitle,
        setValueInputNameTitle,
        valueInputNameCover,
        setValueInputNameCover,
        valueSelect,
        setValueSelect,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}
