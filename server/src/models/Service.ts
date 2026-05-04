import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  category: string;
  branch: string;
  description: string[];
  image: string;
}

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Combo Packs", "Spa Massage", "Special Treatments", "Ayurvedic Massage"],
    },

    branch: {
      type: String,
      required: true,
      enum: ["KATTANAM", "VARKALA", "THONNAKKAD"],
    },

    description: [
      {
        type: String,
      },
    ],

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);