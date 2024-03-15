
const apicontroller = {};
const User = require('../schema/userSchema');
const WhatsApp = require('../schema/whatsappSchema');
const validation = require('../helper/validation');


apicontroller.getCountrycode = async (req, res) => {
  try {
    const mobileNumber = req.query.mobile_number;
    console.log(mobileNumber, "mobileNumber");

    // Check if mobileNumber is not empty
    if (!mobileNumber) {
      return res.status(400).json({ error: 'Mobile number is required' });
    }

    // Parse the phone number
    const phoneNumber = PhoneNumber.parse(mobileNumber, 'US'); // 'ZZ' allows parsing with any country code
    console.log("::::phone number::::", phoneNumber)

    // Check if the phone number is valid
    if (!phoneNumber || !PhoneNumber.isValidNumber(phoneNumber)) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    // Extract the country code
    // const countryCode = PhoneNumber.getCountryCodeForRegion(phoneNumber.country);

    // Send the country code in the response
    res.json({ country_code: phoneNumber.country });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

apicontroller.postWhatsAppData = async (req, res) => {
  try {
    console.log(req.body, req.files, "req.files");
    const { mobile_number, position, prefield_message, popup_message, status } = req.body;
    const icon = req?.files?.icon ? req.files.icon : null;
    icon && icon.mv("uploads/" + icon.name);
    const validationResults = await validation.performBlankValidations({ mobile_number, position, prefield_message, popup_message, status });

    if (!validationResults.success) {
      return res.status(400).json({ message: validationResults.message });
    }
    const existingMobile = await WhatsApp.findOne({ mobile_number });
    if (existingMobile) {
      return res.status(409).json({ message: 'Mobile number already exists' });
    }
    const newWhatsApp = new WhatsApp({ mobile_number, position, prefield_message, icon: icon ? icon.name : null, popup_message });
    await newWhatsApp.save();
    res.status(201).json({ message: 'WhatsApp data saved successfully' });
  } catch (error) {
    console.log(error)
  }
}
apicontroller.getWhatsAppData = async (req, res) => {
  try {
    const whatsAppData = await WhatsApp.find({ deletedAt: null });
    res.status(200).json({ whatsAppData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

apicontroller.getWhatsAppDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const whatsAppData = await WhatsApp.findOne({ _id: id, deletedAt: null });
    if (!whatsAppData) {
      return res.status(404).json({ message: 'WhatsApp data not found' });
    }
    res.status(200).json({ whatsAppData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

apicontroller.updateWhatsApp = async (req, res) => {
  try {
    const id = req.params.id;
    const { mobile_number, position, prefield_message, icon, popup_message, status } = req.body;
    const validationResults = await validation.performBlankValidations({ mobile_number, position, prefield_message, icon, popup_message });
    const existingMobile = await WhatsApp.findOne({ mobile_number: mobile_number, _id: { $ne: id }, deletedAt: null });
    // const mobileNumber = await WhatsApp.findOne({ _id: id , deletedAt: null });

    if (!validationResults.success) {
      return res.status(400).json({ message: validationResults.message });
    }
    if (existingMobile) {
      return res.status(404).json({ message: 'Mobile number already exists' });
    }
    const updateWhatsApp = await WhatsApp.findOneAndUpdate({ _id: id }, { mobile_number, position, prefield_message, icon, popup_message, status });
    res.status(201).json({ message: 'WhatsApp data updated successfully' });
  } catch (error) {
    console.log(error)
  }
}

apicontroller.deleteWhatsApp = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteWhatsApp = await WhatsApp.findOneAndUpdate({ _id: id }, { deletedAt: Date.now() });
    res.status(201).json({ message: 'WhatsApp data deleted successfully' });
  } catch (error) {
    console.log(error)
  }
}

module.exports = apicontroller;
