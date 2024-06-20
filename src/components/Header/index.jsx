import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "./favicon.png";

export default function Header() {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-t-lg bg-slate-900">
        <figure className="flex items-center justify-start gap-1 grow lg:gap-2 xl:gap-2">
          <img
            src={logo}
            alt="Logo Alura Geek"
            className="rounded-full size-6 grayscale"
            aria-label="Logo Alura Geek"
          />
          <figcaption
            className="text-xl font-medium text-white"
            aria-label="Link do site oficial da alura"
          >
            alura.com.br
          </figcaption>
        </figure>

        <Link
          to="https://github.com/SamColt36/alura-challenge-alura-flix"
          aria-label="Redirecionamento para repositório do projeto no Github"
        >
          <BsFillPatchQuestionFill className="fill-white size-6 grayscale" />
        </Link>
      </header>
    </>
  );
}
