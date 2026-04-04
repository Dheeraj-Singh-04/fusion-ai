import React from "react";
import ResponsiveContainer from "../ResponsiveContainer";
import { Card } from "../../ui/card";
import {
  BookOpen,
  Check,
  CopyIcon,
  MessageCircleHeart,
  ShieldCheck,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "../../ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: 0,
    popular: false,
    features: ["500 messages / month", "Website embed", "Powered by branding"],
  },
  {
    name: "Pro",
    price: 9,
    popular: true,
    features: [
      "20,000 messages / month",
      "Remove branding",
      "5 Knowledge source",
      "Lead capture forms",
      "Conversation history",
      "Advanced analytics",
      "Customize prompt",
    ],
  },
  {
    name: "Business",
    price: 39,
    popular: false,
    features: [
      "100,000 messages / month",
      "Multi-agent support",
      "Team members",
      "Priority support",
      "Unlimited Knowledge source",
    ],
  },
];

const Pricing = ({ showCopyButton = false }) => {
  return (
    <ResponsiveContainer>
      <div className="py-20">
        <p className="text-4xl text-center ">
          Plans That Grow With Your Business{" "}
        </p>

        <p className="text-zinc-700 text-center mt-4 text-lg">
          Choose a plan that fits your needs. Start for free and{" "}
        </p>
        <p className="text-zinc-700 text-center  text-lg">
          upgrade anytime as your chatbot grows.{" "}
        </p>

        <div className=" flex justify-evenly pt-10 ">
          {pricingPlans.map((p, index) => {
            return (
              <div
                className={`bg-zinc-950 mt-10 relative flex flex-col w-70 h-100  border rounded-lg border-zinc-900 p-8`}
              >
                {p.popular == 1 && (
                  <div className="absolute bg-zinc-800 top-0 right-0 px-4 p-1 text-sm rounded-bl-lg rounded-tr-lg">
                    Popular{" "}
                  </div>
                )}
                <p className="text-sm text-zinc-400 mb-2">{p.name}</p>
                <div>
                  <span className="text-4xl font-semibold">{p.price}$</span>{" "}
                  <span className="text-zinc-600">/m</span>
                </div>
                <div className="flex flex-col gap-1.5 py-6 text-sm text-zinc-500">
                  {p.features.map((f) => {
                    return (
                      <div className="flex  gap-3 items-center">
                        <Check size={15} />
                        <p>{f}</p>
                      </div>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  className={`w-full p-5 mt-auto  ${index % 2 != 0 ? "bg-gray-200! hover:bg-white!  !text-zinc-800" : " text-gray-300"}`}
                >
                  {index == 0 && "Start Free"}
                  {index == 1 && "Upgrade"}
                  {index == 2 && "Upgrade"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default Pricing;
