import drawing from "../images/index.jpg";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import Typical from "react-typical";

//https://stackoverflow.com/questions/27752500/how-to-have-an-anim-gif-on-a-link-and-play-it-on-hover-and-reset
export default function Home() {
  return (
    <>
      <div class="main_container">
        <div class="row">
          <div class="column left_side">
            <div class="container_float">
              <h2>My Profiles :</h2>
              <a href="https://github.com/Viktor-hash/">
                <AiFillGithub size={90} className="logo_github" />
              </a>
              <a href="https://instagram.com/victor_prlt/">
                <AiOutlineInstagram size={90} className="logo_instagram" />
              </a>
              <a href="https://www.linkedin.com/in/victor-perrault-32b16b15b/">
                <AiOutlineLinkedin size={90} className="logo_linkedin" />
              </a>
            </div>
          </div>
          <div class="column middle">
            <div class="container_float">
              <h2>Welcome !</h2>
              <h3 class="Typed_text">
                <Typical
                  steps={[
                    "I am a Data Scientist and a Developper :) ",
                    4000,
                    "",
                    1000,
                    "You can learn more about me in the about section :) ",
                    4000,
                    "",
                    1000
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h3>
            </div>
          </div>
          <div class="column right_side">
            <div class="container_float">
              <h2>My Projects :</h2>
              <GiMaterialsScience size={200} className="logo_projects" />
            </div>
          </div>
        </div>
        <div class="footer">
          <p>© Victor Perrault 2022. Currently in Paris</p>
        </div>
      </div>
    </>
  );
}