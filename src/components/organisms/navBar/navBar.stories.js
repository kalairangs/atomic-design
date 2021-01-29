import NavBar from "./navBar";
import data from "./data.json";

export const Default = () => <NavBar data={data} />;

export default {
  title: "organisms/navBar",
  component: NavBar,
};