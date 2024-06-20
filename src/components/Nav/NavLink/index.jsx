import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children, url }) {
  const { pathname } = useLocation();
  const styles = {
    active:
      "px-6 py-2 font-semibold cursor-pointer text-center text-white text-nowrap text-sm rounded-xl bg-slate-700 lg:text-lg xl:text-lg",
    inative:
      "px-6 py-2 font-semibold cursor-pointer text-center text-white text-nowrap text-sm rounded-xl bg-slate-700/40 lg:text-lg xl:text-lg",
  };

  return (
    <>
      <Link
        to={url}
        className={pathname === url ? styles.active : styles.inative}
      >
        {children}
      </Link>
    </>
  );
}
