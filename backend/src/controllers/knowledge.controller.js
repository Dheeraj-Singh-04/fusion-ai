import { Subscription } from "../schemas/subscription.schema.js";
import { Knowledge } from "../schemas/knowledge.schema.js";
import { summarizeData, webScrap } from "../utils/functions.js";

export const addKnowledge = async (req, res) => {
  try {
    const userId = req.user._id;
    const { KnowledgeType } = req?.body;

    const userCurrentPlan = req.userCurrentPlan;

    const userTotalKnowledges = await Knowledge.find({
      userId,
    }).countDocuments();

    console.log(userCurrentPlan);

    if (userTotalKnowledges >= userCurrentPlan.planId.totalKnowledges) {
      return res.send({
        success: false,
        message: "You reached maximum knowledges of your current plan",
      });
    }

    if (KnowledgeType == "website") {
      const { websiteUrl } = req.body;

      if (!websiteUrl)
        return res.send({ success: false, message: "Website url is required" });

      const websiteData = webScrap(websiteUrl)
      
      const summarizedData = summarizeData(websiteData)
    }
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
};
