const FeaturesModel = require("../model/FeaturesModel");
const FeaturesListService = async (req, res) => {
  try {
    let data = await FeaturesModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: e }.toString();
  }
};

module.exports = { FeaturesListService };
