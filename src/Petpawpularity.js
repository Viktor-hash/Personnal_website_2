export default function Petpawpularity() {
  return (
    <>
      <div class="row_pet">
        <div class="column_pet">
          <div class="container_float">
            <h2>Petpawpularity :</h2>
            <br />
            <p className="pet_content">
              {" "}
              This a machine learning project for Petfinder. <br />
              <br />
              PetFinder is Malaysia’s leading animal welfare platform, featuring
              over 180,000 animals with 54,000 happily adopted. PetFinder uses a
              basic Cuteness Meter to rank pet photos. It analyzes picture
              composition and other factors compared to the performance of
              thousands of pet profiles. <br />
              <br />
              The goal is to improve this Cuteness Meter. The cuteness meter of
              a picture is an integer between 0 and 100.
              <br />
              <br /> To solve this problem I used different regression
              algorithms and selected the best compromise. In order to have
              better results I added a feature with an external CNN model.
            </p>
          </div>
        </div>
        <div class="column_pet">
          <div class="container_float">
            <h2>Links :</h2>
            <br />
            <h3>
              Project explainations :{" "}
              <a href="https://www.kaggle.com/c/petfinder-pawpularity-score/overview">
                Project presentation
              </a>
            </h3>
            <h3>
              My notebook :{" "}
              <a href="https://www.kaggle.com/victorperrault/pet-pawpularity-v2/notebook">
                notebook
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div class="footer_projects">
        <p>© Victor Perrault 2023. Currently in Hong Kong</p>
      </div>
    </>
  );
}
