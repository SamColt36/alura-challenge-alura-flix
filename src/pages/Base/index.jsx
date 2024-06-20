import Footer from "components/Footer";
import Header from "components/Header";
import Nav from "components/Nav";
import VideosProvider from "context/VideosContext";
import { Outlet } from "react-router-dom";

export default function Base() {
  return (
    <div className="bg-background">
      <VideosProvider>
        <div className="max-w-6xl mx-auto">
          <Header />
          <Nav />

          <Outlet />
          <Footer />
        </div>
      </VideosProvider>
    </div>
  );
}
