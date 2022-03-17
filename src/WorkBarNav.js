import { useNavigate } from "react-router-dom";

export default function WorkBarNav() {
  let navigate = useNavigate();

  const OnProjectClicked = () => {
    navigate("");
  };

  const OnDrawingsClicked = () => {
    navigate("drawings");
  };

  return (
    <div className="workNav">
      <ul>
        <li>
          <h3 onClick={OnProjectClicked}>PROJECTS</h3>
        </li>
        <li>
          <h3 onClick={OnDrawingsClicked}>DRAWINGS</h3>
        </li>
      </ul>
    </div>
  );
}
