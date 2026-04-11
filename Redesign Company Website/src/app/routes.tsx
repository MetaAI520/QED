import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Solutions } from "./pages/Solutions";
import { RnD } from "./pages/RnD";
import { News } from "./pages/News";
import { Investors } from "./pages/Investors";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "solutions", Component: Solutions },
      { path: "rnd", Component: RnD },
      { path: "news", Component: News },
      { path: "investors", Component: Investors },
      { path: "contact", Component: Contact },
    ],
  },
]);
