/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ItemCarousel from "./itemCarousel";

export const Default = () => (
    <ItemCarousel
        src={"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"}
        title={"Tales of Valour"}
        subTitle={
            "Revisit the history of India's wars and learn about some of the untold tales of..."
        }
        label1={"Best of 2020"}
        label2={"Trending"}
    />
);

export default {
    title: "Molecules/itemCarousel",
    component: ItemCarousel,
};
