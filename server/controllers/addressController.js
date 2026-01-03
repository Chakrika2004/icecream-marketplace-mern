import Address from "../models/Address.js";

// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.user.id;  // <-- from auth middleware

    await Address.create({
      ...req.body,  // <-- your address fields from frontend
      userId
    });

    return res.json({ success: true, message: "Address added successfully" });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.user.id;  // <-- NEVER use req.body

    const addresses = await Address.find({ userId });

    return res.json({ success: true, addresses });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
