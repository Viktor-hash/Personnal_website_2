import WorkBarNav from "./WorkBarNav";
import { Outlet } from "react-router-dom";

export default function Work() {
  return (
    <>
      <WorkBarNav />
      <Outlet />
    </>
  );
}
