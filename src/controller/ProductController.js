const {
  BrandListServices,
  CategoryListServices,
  SliderListServices,
  ListByBrandService,
  ListByCategoryService,
  ListBySmilerService,
  ListByKeyWordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
} = require("../services/ProductServices");

exports.ProductBrandList = async (req, res) => {
  let result = await BrandListServices();
  return res.status(200).json(result);
};

exports.ProductCategoryList = async (req, res) => {
  let result = await CategoryListServices();
  return res.status(200).json(result);
};

exports.ProductSliderList = async (req, res) => {
  let result = await SliderListServices();
  return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.status(200).json(result);
};

exports.ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.status(200).json(result);
};

exports.ProductListBySmiler = async (req, res) => {};

exports.ProductListByKeyword = async (req, res) => {};

exports.ProductDetails = async (req, res) => {};

exports.ProductReviewList = async (req, res) => {};

exports.CreateProductReview = async (req, res) => {};
