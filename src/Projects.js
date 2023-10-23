//https://www.kaggle.com/victorperrault/pet-pawpularity-v2/notebook
//https://www.kaggle.com/c/h-and-m-personalized-fashion-recommendations
//https://github.com/Viktor-hash/Binary_tree_Project_c
//treasury management
//multi-agent system
//Sql library database

import { MdPets } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GiClothes, GiFamilyTree, GiMoneyStack } from "react-icons/gi";
import { AiOutlineCluster } from "react-icons/ai";
import { SiPostgresql } from "react-icons/si";

export default function Projects() {
  let navigate = useNavigate();

  const OnPetClicked = () => {
    navigate("petpawpularity");
  };
  const OnHMClicked = () => {
    navigate("HMrecommendation");
  };
  const OnBinaryClicked = () => {
    navigate("Binarytree");
  };
  const OnTreasuryClicked = () => {
    navigate("Treasury");
  };
  const OnMultiClicked = () => {
    navigate("MultiAgent");
  };
  const OnLibraryClicked = () => {
    navigate("LibraryProject");
  };
  return (
    <>
      <div class="row_project">
        <div class="column_project">
          <div class="container_float" onClick={OnPetClicked}>
            <h3 className="logo_title">Pet Pawpularity :</h3>
            <MdPets size={90} className="logo_pet" />
          </div>
        </div>
        <div class="column_project">
          <div class="container_float" onClick={OnHMClicked}>
            <h3>H&M recommendation :</h3>
            <GiClothes size={90} className="logo_hm" />
          </div>
        </div>
        <div class="column_project">
          <div class="container_float" onClick={OnBinaryClicked}>
            <h3>Binary Tree :</h3>
            <GiFamilyTree size={90} className="logo_binary_tree" />
          </div>
        </div>
      </div>
      <div class="row_project">
        <div class="column_project">
          <div class="container_float" onClick={OnTreasuryClicked}>
            <h3>Treasury management :</h3>
            <GiMoneyStack size={90} className="logo_binary_tree" />
          </div>
        </div>
        <div class="column_project">
          <div class="container_float" onClick={OnMultiClicked}>
            <h3>multi-agent system :</h3>
            <AiOutlineCluster size={90} className="logo_binary_tree" />
          </div>
        </div>
        <div class="column_project">
          <div class="container_float" onClick={OnLibraryClicked}>
            <h3>Sql library database :</h3>
            <SiPostgresql size={90} className="logo_binary_tree" />
          </div>
        </div>
      </div>

      <div class="footer_projects">
        <p>© Victor Perrault 2023. Currently in Hong Kong</p>
      </div>
    </>
  );
}
