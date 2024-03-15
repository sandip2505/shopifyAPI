
const apicontroller = {};
const ShopifyUser = require('../schema/userSchema');


apicontroller.getShopifyUser = async (req, res) => {
  try {
    const shopifyUser = await ShopifyUser.find({ deletedAt: null });
    res.status(200).json({ shopifyUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
apicontroller.postShopifyUser = async (req, res) => {
  try {

    const newShopifyUser = new ShopifyUser(req.body);
    await newShopifyUser.save();
    res.status(201).json({ message: 'ShopifyUser store successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}





module.exports = apicontroller;
