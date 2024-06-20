import NavLink from "./NavLink";
export default function Nav() {
  return (
    <>
      <div className="flex justify-start gap-2 px-4 py-2 lg:justify-end xl:justify-end bg-slate-800">
        <NavLink url="/">Início</NavLink>
        <NavLink url="/new-video">Adicionar vídeo</NavLink>
      </div>
    </>
  );
}
