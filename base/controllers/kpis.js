import KPI from "../models/KPI.js";
import User from "../models/User.js";

/* CREATE */
export const createKpi = async (req, res) => {
  try {
    const {
      userId,
      organization,
      ccriEnvironment,
      ccriSocial,
      ccriEconomic,
      investmentValue,
      laborValue,
      laborHours,
    } = req.body;

    const imsWic =
      ((laborValue + investmentValue) / laborHours) * 0.6 +
      ((ccriEnvironment + ccriSocial + ccriEconomic) / 3) * 0.4;

    const newKpi = new KPI({
      userId,
      organization,
      ccriEnvironment,
      ccriSocial,
      ccriEconomic,
      investmentValue,
      laborValue,
      laborHours,
      "ims-wic": imsWic,
    });

    await newKpi.save();
    res.status(201).json(newKpi);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */

export const getAllKpis = async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getKpiById = async (req, res) => {
  try {
    const { id } = req.params;
    const kpi = await KPI.findById(id);
    res.status(200).json(kpi);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */

export const updateKpi = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, organization, ccriEnvironment, ccriSocial, ccriEconomic, investmentValue, laborValue, laborHours } = req.body;

    // Find the associated user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const imsWic =
      ((laborValue + investmentValue) / laborHours) * 0.6 +
      ((ccriEnvironment + ccriSocial + ccriEconomic) / 3) * 0.4;

    const updatedKpi = await KPI.findByIdAndUpdate(
      id,
      {
        userId,
        organization,
        ccriEnvironment,
        ccriSocial,
        ccriEconomic,
        investmentValue,
        laborValue,
        laborHours,
        firstName: user.firstName,
        lastName: user.lastName,
        organization: user.organization,
        "ims-wic": imsWic,
      },
      { new: true }
    );

    res.status(200).json(updatedKpi);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};