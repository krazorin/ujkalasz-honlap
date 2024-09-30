import { Routes, Route } from "react-router-dom"

import Home from "src/pages/Home/Home"
import Bemutatkozas from "./pages/Bemutatkozas/Bemutatkozas"
import Tortenetunk from "./pages/Bemutatkozas/Tortenetunk"

import "src/App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bemutatkozas" element={<Bemutatkozas />} />
        <Route path="/bemutatkozas/tortenetunk" element={<Tortenetunk />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
