import { useLocation } from "react-router-dom";
import { useVideosContext } from "hooks/useVideosContext";
import Button from "../Button";
import Titulo from "./Titulo";
import Select from "./Select";
import Id from "./Id";

export default function Form({ fnSubmit }) {
  const { fnResetForm } = useVideosContext();
  const { pathname } = useLocation();

  return (
    <form
      method="dialog"
      className={
        pathname === "/"
          ? "flex flex-col *:grow gap-2 lg:min-w-[350px]"
          : "lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 flex flex-col *:grow gap-2"
      }
      onSubmit={fnSubmit}
    >
      <Titulo />
      <Select />
      <Id />

      <div className="flex gap-4 *:grow">
        <Button type="submit" reset={() => {}}>
          Salvar
        </Button>
        <Button type="reset" reset={fnResetForm}>
          Apagar
        </Button>
      </div>
    </form>
  );
}
