export default function HM_recommend() {
  return (
    <>
      <div class="row_pet">
        <div class="column_pet">
          <div class="container_float">
            <h2>H & M Recommendation :</h2>
            <br />
            <p className="pet_content">
              {" "}
              This a machine learning project for H&M. <br />
              <br />
              H&M Group wants a recommendation system based on data from
              previous transactions, as well as from customer and product meta
              data. The available meta data spans from simple data, such as
              garment type and customer age, to text data from product
              descriptions, to image data from garment images.
              <br />
              <br />
              <h3> Work in progress... </h3>
            </p>
          </div>
        </div>
        <div class="column_pet">
          <div class="container_float">
            <h2>Links :</h2>
            <br />
            <h3>
              Project explainations :{" "}
              <a href="https://www.kaggle.com/c/h-and-m-personalized-fashion-recommendations">
                Project presentation
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
