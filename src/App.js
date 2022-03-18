import "./styles.scss";
import MainNavBar from "./MainNavBar";
import Home from "./Home";
import background from "./images/background.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Work";
import Projects from "./Projects";
import Drawings from "./Drawings";
import Contact from "./Contact";
import About from "./About";
import Petpawpularity from "./Petpawpularity";
import HMrecommendation from "./HM_recommend";
import Binarytree from "./Binary_tree";
import Treasury from "./Treasury";
import MultiAgent from "./MultiAgent";
import LibraryProject from "./LibraryProject";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "1000px 1080px"
      }}
    >
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />}>
            <Route index element={<Projects />} />
            <Route path="projects" element={<Projects />} />
            <Route path="petpawpularity" element={<Petpawpularity />} />
            <Route path="drawings" element={<Drawings />} />
            <Route path="HMrecommendation" element={<HMrecommendation />} />
            <Route path="Binarytree" element={<Binarytree />} />
            <Route path="Treasury" element={<Treasury />} />
            <Route path="MultiAgent" element={<MultiAgent />} />
            <Route path="LibraryProject" element={<LibraryProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
