import manipulatrice from "./victor-perrault-manipulatrice-portrait.jpg";
import bowie from "./bowie.jpg";
import bulbizarre from "./bulbizarre.jpg";
import figure from "./figure.jpg";
import portrait from "./portrait.jpg";
import portrait_girl from "./portrait_girl.jpg";
import shooter from "./shooter.jpg";
import walk from "./walk.jpg";

export default function Drawings() {
  return (
    <>
      <div class="complete_gallery">
        <div class="gallery_position">
          <div class="responsive">
            <div class="gallery">
              <img src={portrait} width={500} height={300} alt="thinking" />
              <div class="desc">Ron portrait</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <img
                src={portrait_girl}
                width={500}
                height={300}
                alt="thinking"
              />
              <div class="desc">Girl Portrait</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <img src={shooter} width={500} height={300} alt="thinking" />
              <div class="desc">Shooter</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <img src={walk} width={500} height={300} alt="thinking" />
              <div class="desc">Adventure</div>
            </div>
          </div>
          <div class="responsive">
            <div class="gallery">
              <img src={manipulatrice} alt="Manipulatrice" />
              <div class="desc">Manipulatrice</div>
            </div>
          </div>

          <div class="responsive">
            <div class="gallery">
              <img src={figure} width={500} height={300} alt="thinking" />
              <div class="desc">Figure in Light</div>
            </div>
          </div>

          <div class="responsive">
            <div class="gallery">
              <img src={bulbizarre} width={500} height={300} alt="thinking" />
              <div class="desc">Buuulbizarre</div>
            </div>
          </div>

          <div class="responsive">
            <div class="gallery">
              <img src={bowie} width={500} height={300} alt="thinking" />
              <div class="desc">Side portrait</div>
            </div>
          </div>
          <div class="clearfix"></div>
          <h3>If you want to see more click on this link : </h3>
          <a className="art_link" href="https://victorsketches.artstation.com/">
            Artstation Site
          </a>
        </div>
      </div>
      <div class="footer_projects">
        <p>© Victor Perrault 2023. Currently in Hong Kong</p>
      </div>
    </>
  );
}
