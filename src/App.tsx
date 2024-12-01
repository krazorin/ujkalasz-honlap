import { Route, Routes } from "react-router-dom"
import Home from "src/pages/Home/Home"

import { csoportokRoutes } from "./data/csoportok"
import { galeriaRoutes } from "./data/galeria"
import Alapszabaly from "./pages/Bemutatkozas/Alapszabaly"
import Bemutatkozas from "./pages/Bemutatkozas/Bemutatkozas"
import Kapcsolataink from "./pages/Bemutatkozas/Kapcsolataink"
import Tortenetunk from "./pages/Bemutatkozas/Tortenetunk"
import Vezerkonyv from "./pages/Bemutatkozas/Vezerkonyv"
import Csoportjaink from "./pages/Csoportjaink/Csoportjaink"
import Elerhetosegeink from "./pages/Elerhetosegeink/Elerhetosegeink"
import Galeria from "./pages/Galeria/Galeria"
import Kiadvanyok from "./pages/Kiadvanyok/Kiadvanyok"
import Programok from "./pages/Programok/Programok"
import Rolunk from "./pages/Rolunk/Rolunk"
import UjKalaszUjsag from "./pages/UjKalaszUjsag/UjKalaszUjsag"
import VaciKalaszHaz from "./pages/VaciKalaszHaz/VaciKalaszHaz"
import VaciKalaszHazArak from "./pages/VaciKalaszHaz/VaciKalaszHazArak"
import VaciKalaszHazKepek from "./pages/VaciKalaszHaz/VaciKalaszHazKepek"
import VaciKalaszHazTudnivalok from "./pages/VaciKalaszHaz/VaciKalaszHazTudnivalok"

import "src/App.scss"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* To disable active class for "továbbiak" nav item in header */}
        {/* TODO: improve behaviour */}
        <Route path="/tovabbiak" element={<Home />} />
        <Route path="/bemutatkozas" element={<Bemutatkozas />} />
        <Route path="/bemutatkozas/tortenetunk" element={<Tortenetunk />} />
        <Route path="/bemutatkozas/vezerkonyv" element={<Vezerkonyv />} />
        <Route path="/bemutatkozas/alapszabaly" element={<Alapszabaly />} />
        <Route path="/bemutatkozas/kapcsolataink" element={<Kapcsolataink />} />
        <Route path="/programok" element={<Programok />} />
        <Route path="/elerhetosegeink" element={<Elerhetosegeink />} />
        <Route path="/csoportjaink" element={<Csoportjaink />} />
        {csoportokRoutes}
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/galeria" element={<Galeria />} />
        {galeriaRoutes}
        <Route path="/kiadvanyok" element={<Kiadvanyok />} />
        <Route path="/vaci-kalasz-haz" element={<VaciKalaszHaz />} />
        <Route
          path="/vaci-kalasz-haz/tudnivalok"
          element={<VaciKalaszHazTudnivalok />}
        />
        <Route path="/vaci-kalasz-haz/kepek" element={<VaciKalaszHazKepek />} />
        <Route path="/vaci-kalasz-haz/arak" element={<VaciKalaszHazArak />} />
        <Route path="/kiadvanyok/uj-kalasz-ujsag" element={<UjKalaszUjsag />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
