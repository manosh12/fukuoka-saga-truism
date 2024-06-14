import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Header} from "./components/Header.jsx";
import { Home } from "./pages/home/Home.jsx";
import {Footer} from "./components/Footer.jsx";
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
