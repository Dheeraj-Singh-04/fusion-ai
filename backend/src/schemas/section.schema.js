import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  sectionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  knowledgeSourceIds: [
    {
      type: String,
      required: true,
    },
  ],
  tone: {
    type: String,
    required: true,
    enum: ["strict", "neutral", "friendly", "empahetic"],
  },
  allowedTopics: [{ type: String }],
  blockedTopics: [{ type: String }],
},{timestamps:true});

export const Section = mongoose.model("section", sectionSchema);
