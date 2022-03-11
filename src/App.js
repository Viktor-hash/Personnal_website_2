import "./styles.scss";
import MainNavBar from "./MainNavBar";
import Home from "./Home";
import background from "../images/background.jpg";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "1000px 1080px"
      }}
    >
      <MainNavBar />
      <Home />
    </div>
  );
}
