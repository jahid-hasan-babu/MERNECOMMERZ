import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
  BrandList: null,
  CategoryList: null,
  SliderList: null,
  ListProduct: null,

  BrandListRequest: async () => {
    let res = await axios.get(`/api/v1/ProductBrandList`);
    if (res.data["status"] === "success") {
      set({ BrandList: res.data["data"] });
    }
  },
  CategoryListRequest: async () => {
    let res = await axios.get("/api/v1/ProductCategoryList");
    if (res.data["status"] === "success") {
      set({ CategoryList: res.data["data"] });
    }
  },
  SliderListRequest: async () => {
    let res = await axios.get("/api/v1/ProductSliderList");
    if (res.data["status"] === "success") {
      set({ SliderList: res.data["data"] });
    }
  },
  ListByRemarkRequest: async (Remark) => {
    set({ ListByRemark: null });
    let res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
    if (res.data["status"] === "success") {
      set({ ListByRemark: res.data["data"] });
    }
  },
}));

export default ProductStore;
