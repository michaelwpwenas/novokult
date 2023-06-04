import mongoose from "mongoose";

const kpiSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
  },
    lastName: {
      type: String,
      required: true,
  },
    organization: {
      type: String,
      required: true,
    },
    ccriEnvironment: {
      type: Number,
      required: true,
    },
    ccriSocial: {
      type: Number,
      required: true,
    },
    ccriEconomic: {
      type: Number,
      required: true,
    },
    investmentValue: {
      type: Number,
      required: true,
    },
    laborValue: {
      type: Number,
      required: true,
    },
    laborHours: {
      type: Number,
      required: true,
    },
    "ims-wic": {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const KPI = mongoose.model("KPI", kpiSchema);

export default KPI;
