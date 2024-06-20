import { useVideosContext } from "hooks/useVideosContext";

export default function Select() {
  const { valueSelect, setValueSelect } = useVideosContext();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium text-white md:text-lg lg:text-lg xl:text-lg">
        Categoria
      </h2>
      <select
        onChange={(e) => {
          const selectedValue = e.target.value;
          setValueSelect(selectedValue);
        }}
        required
        value={valueSelect}
        className="text-ellipsis bg-[#141c2f] rounded-lg outline-none border border-[#374151] px-6 py-3 text-white w-full *:text-white"
      >
        <option></option>
        {["front-end", "back-end", "mobile"].map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
}
