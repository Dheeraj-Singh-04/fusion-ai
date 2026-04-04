import mongoose from "mongoose";

const knowledgeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    KnowledgeType: {
      type: String,
      required: true,
      enum: ["file", "website", "text"],
    },
    webite: {
      url: String,
      content: String,
    },
    text: {
      title: String,
      content: String,
    },
    file: {
      fileType: {
        // now only takes .csv files
        type: String,
        default: "csv",
      },
      fileName: String,
      content: String,
    },
  },
  { timestamps: true },
);

export const Knowledge = mongoose.model("knowledge", knowledgeSchema);
