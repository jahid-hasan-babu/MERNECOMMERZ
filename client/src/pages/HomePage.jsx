import React from "react";
import Layout from "../components/layout/Layout";
import SliderSkeleton from "../skeleton/SliderSkeleton";
import FeaturesSkeleton from "../skeleton/FeaturesSkeleton";
import CategoriesSkeleton from "../skeleton/CategoriesSkeleton";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";
import BrandSkeleton from "../skeleton/BrandSkeleton";

const HomePage = () => {
  return (
    <Layout>
      <SliderSkeleton />
      <FeaturesSkeleton />
      <CategoriesSkeleton />
      <ProductsSkeleton />
      <BrandSkeleton />
    </Layout>
  );
};

export default HomePage;
