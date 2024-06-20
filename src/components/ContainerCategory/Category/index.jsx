import { v4 as uuidv4 } from "uuid";
import Label from "components/Label";
import { useVideosContext } from "hooks/useVideosContext";
import CardVideo from "components/CardVideo";

export default function Category({ nameCategory }) {
  const { videos, fnColorPerCategory } = useVideosContext();

  const category = videos.filter((video) => video.category === nameCategory);
  const color = fnColorPerCategory(nameCategory);

  return (
    <section className="space-y-8">
      <Label color={color}>{nameCategory}</Label>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.map((video) => (
          <li key={uuidv4()}>
            <CardVideo video={video} color={color} />
          </li>
        ))}
      </ul>
    </section>
  );
}
