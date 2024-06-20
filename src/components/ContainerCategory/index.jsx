import { v4 as uuidv4 } from "uuid";
import { useVideosContext } from "hooks/useVideosContext";
import Category from "./Category";

export default function ContainerCategory() {
  const { fnListNameCategory } = useVideosContext();

  return (
    <div className="my-12 space-y-24">
      {fnListNameCategory().map((name) => (
        <Category key={uuidv4()} nameCategory={name} />
      ))}
    </div>
  );
}
