import NavBar from "./navBar";
import React from "react";
const data = {
  "logo": "https://static.wikia.nocookie.net/logopedia/images/b/b9/Discovery_Plus_Icon.png",
  "menuItem": [
    "Home",
    "Explore",
    "Shorts",
    "Mindblown",
    "Premium"
  ],
  "buttonText": "SignIn",
  "searchPlaceholder": "Search for a show, episode, short"
};

export const Default = () => <NavBar data={data} />;

export default {
  title: "organisms/navBar",
  component: NavBar,
};