import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    chatbotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chatbot",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    externalUserId: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Conversation = mongoose.model("conversation", conversationSchema);
