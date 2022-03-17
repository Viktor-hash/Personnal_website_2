import { useNavigate } from "react-router-dom";

export default function MainNavBar() {
  let navigate = useNavigate();

  const OnTitleClicked = () => {
    navigate("/");
  };

  const OnAboutClicked = () => {
    navigate("/about");
  };

  const OnContactClicked = () => {
    navigate("/contact");
  };

  const OnWorkClicked = () => {
    navigate("/work");
  };

  return (
    <div className="header">
      <h1 onClick={OnTitleClicked}>Victor Perrault</h1>
      <ul>
        <li>
          <h3 onClick={OnAboutClicked}>ABOUT</h3>
        </li>
        <li>
          <h3 onClick={OnWorkClicked}>WORK</h3>
        </li>
        <li>
          <h3 onClick={OnContactClicked}>CONTACT</h3>
        </li>
      </ul>
    </div>
  );
}
