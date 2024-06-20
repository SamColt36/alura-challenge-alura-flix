import logo from "./logo.png";

export default function Description({ title }) {
  return (
    <section className="space-y-12">
      <img src={logo} alt="Logo Alura Flix" className="rounded-lg bg-dark" />

      <div className="*:text-white space-y-4">
        <h2 className="text-4xl font-semibold line-clamp-2">{title}</h2>
        <p className="line-clamp-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis veniam
          reprehenderit eius, harum sed doloribus labore pariatur assumenda,
          quasi eligendi aut possimus minima. Facere eius blanditiis doloremque
          voluptates assumenda autem.
        </p>
      </div>
    </section>
  );
}
