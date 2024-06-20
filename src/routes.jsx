import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="new-video" element={<NewVideo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
