import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Container() {
  return (
    <div
      className="p-16 rounded-t-lg bg-slate-900 text-gray-50"
      role="contentinfo"
    >
      <div className="flex flex-col items-center justify-center space-y-5">
        <h2 className="text-2xl poppins">Alura Flix</h2>
        <p className="max-w-[250px] text-sm text-center text-gray-500 line-clamp-3 poppins xl:max-w-sm">
          Alura Geek: Experimente o mundo envolvente da cultura geek.
          Desenvolvido em HTML, CSS e JavaScript, desenvolvido com Tailwind CSS
          e Webpack, oferece interatividade e comodidade. Adicione produtos
          facilmente com detalhes como nome, valor e preço. Seu design
          responsivo e tema escuro nativo garantem uma experiência visualmente
          atraente em qualquer dispositivo.
        </p>

        <figure className="flex h-4 space-x-3">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaLinkedinIn />
          <FaGithub />
        </figure>
      </div>
    </div>
  );
}
