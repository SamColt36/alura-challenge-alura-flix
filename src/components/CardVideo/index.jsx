import { IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useVideosContext } from "hooks/useVideosContext";

export default function CardVideo({ video, color }) {
  const { cover, title } = video;
  const { setSelectedVideo, fnDeleteVideo } = useVideosContext();

  return (
    <div className="relative border-2" style={{ borderColor: `${color}` }}>
      <img src={cover} alt={title} />

      <div
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer"
        style={{ backgroundColor: `${color}` }}
      >
        <IoMdClose
          color="white"
          size="32px"
          onClick={() => fnDeleteVideo(video)}
        />
      </div>

      <div
        className="flex items-center justify-center p-4 bg-black cursor-pointer"
        title="Editar"
        name="Editar"
        aria-label="Editar card de imagem"
      >
        <FaEdit
          color={color}
          size="24px"
          onClick={() => setSelectedVideo(video)}
        />
      </div>
    </div>
  );
}
