import { useVideosContext } from "hooks/useVideosContext";

export default function Id() {
  const { valueInputNameCover, setValueInputNameCover } = useVideosContext();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-white md:text-lg lg:text-lg xl:text-lg">
        ID Vídeo (Youtube)
      </h2>
      <input
        className="text-ellipsis bg-[#141c2f] rounded-lg outline-none border border-[#374151] px-6 py-3 text-white w-full"
        type="text"
        value={valueInputNameCover}
        placeholder="6HfnkwkZ0Ss"
        onChange={(e) => setValueInputNameCover(() => e.target.value)}
        required
      />
    </div>
  );
}
