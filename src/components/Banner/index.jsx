import Description from "./Description";

export default function Banner() {
  return (
    <div
      className="grid grid-cols-1 bg-cover bg-center bg-no-repeat gap-6 p-6 justify-center items-center min-h-[500px] overflow-hidden bg-black/75 bg-blend-multiply lg:grid-cols-2 xl:grid-cols-2"
      style={{
        backgroundImage:
          "url('https://img.youtube.com/vi/iVNR-6v8lZU/hqdefault.jpg')",
      }}
    >
      <Description title="Como nasceu a Alura com Gui SIlveira | #HipstersPontoTube" />

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/iVNR-6v8lZU"
        title="Como nasceu a Alura com Gui SIlveira | #HipstersPontoTube"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
