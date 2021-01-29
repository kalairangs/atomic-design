import Home from "./home";
import data from "./data.json";

export const Default = () => <Home data={data} />;

export default {
  title: "pages/home",
  component: Home,
};