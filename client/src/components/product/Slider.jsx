import React from "react";
import ProductStore from "../../store/ProductStore";
import SliderSkeleton from "./../../skeleton/SliderSkeleton";

const Slider = () => {
  const { SliderList } = ProductStore();

  if (SliderList === null) {
    return <SliderSkeleton />;
  } else {
    return <div></div>;
  }
};

export default Slider;
