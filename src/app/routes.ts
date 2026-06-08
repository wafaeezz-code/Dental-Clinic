import { createElement, type ComponentType, useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router";
import { NavBar } from "./components/NavBar";
import { AccueilPage } from "./components/pages/AccueilPage";
import { AProposPage } from "./components/pages/AProposPage";
import { SpecialitesPage } from "./components/pages/SpecialitesPage";
import { TechnologiesPage } from "./components/pages/TechnologiesPage";
import { GaleriePage } from "./components/pages/GaleriePage";
import { ContactPage } from "./components/pages/ContactPage";
import { ImplantologiePage } from "./components/pages/ImplantologiePage";
import { OrthodontiePage } from "./components/pages/OrthodontiePage";
import { RadiologiePage } from "./components/pages/RadiologiePage";
import { RehabilitationsPage } from "./components/pages/RehabilitationsPage";

function withNav(Page: ComponentType) {
  return function WithNavPage() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    return createElement(
      "div",
      null,
      createElement(NavBar),
      createElement("div", { style: { paddingTop: "154px" } }, createElement(Page))
    );
  };
}

export const router = createBrowserRouter([
  { path: "/", Component: withNav(AccueilPage) },
  { path: "/apropos", Component: withNav(AProposPage) },
  { path: "/specialites", Component: withNav(SpecialitesPage) },
  { path: "/specialites/implantologie", Component: withNav(ImplantologiePage) },
  { path: "/specialites/orthodontie", Component: withNav(OrthodontiePage) },
  { path: "/specialites/radiologie", Component: withNav(RadiologiePage) },
  { path: "/specialites/rehabilitations", Component: withNav(RehabilitationsPage) },
  { path: "/technologies", Component: withNav(TechnologiesPage) },
  { path: "/galerie", Component: withNav(GaleriePage) },
  { path: "/contact", Component: withNav(ContactPage) },
]);
