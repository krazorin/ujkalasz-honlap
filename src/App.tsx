import { Routes, Route } from "react-router-dom"

import Home from "src/pages/Home/Home"
import Bemutatkozas from "./pages/Bemutatkozas/Bemutatkozas"
import Tortenetunk from "./pages/Bemutatkozas/Tortenetunk"
import Vezerkonyv from "./pages/Bemutatkozas/Vezerkonyv"
import Alapszabaly from "./pages/Bemutatkozas/Alapszabaly"
import Kapcsolataink from "./pages/Bemutatkozas/Kapcsolataink"
import Programok from "./pages/Programok/Programok"
import Elerhetosegeink from "./pages/Elerhetosegeink/Elerhetosegeink"
import Csoportjaink, {
  csoportokRoutes,
} from "./pages/Csoportjaink/Csoportjaink"

import "src/App.scss"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* To disable active class for "továbbiak" nav item in header */}
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

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

// bp-krisztus-kiraly BpKrisztusKiraly
// papa
// egerbatak
// szeged
// bp-sashalom
// szombathely
// valko
// pannonhalma
// mogyorod
// nagykata
