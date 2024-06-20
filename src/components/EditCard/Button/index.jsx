const stylesButton = {
  submit:
    "px-6 py-2 font-semibold cursor-pointer text-center text-white text-nowrap text-sm rounded-xl bg-slate-700 lg:text-lg xl:text-lg",
  reset:
    "px-6 py-2 font-semibold cursor-pointer text-center text-white text-nowrap text-sm rounded-xl bg-slate-700/40 lg:text-lg xl:text-lg",
};

export default function Button({ children, type, reset }) {
  return (
    <>
      <button
        className={type === "submit" ? stylesButton.submit : stylesButton.reset}
        type={type}
        onClick={reset}
      >
        {children}
      </button>
    </>
  );
}
