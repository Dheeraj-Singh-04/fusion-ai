import Code_embed_box from "@/components/common/Code_embed_box";
import Chatbot_playground from "@/components/common/dashboard-page/Chatbot_playground";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Code, Info, Palette, Save } from "lucide-react";

import React, { useState } from "react";

const Chatbot = () => {
  return (
    <DashboardLayout>
      <div className="p-8 w-full">
        {/* header  */}
        <div className="flex justify-between items-center ">
          <div>
            <h5 className="text-xl ">Chatbot Playground</h5>
            <p className="text-sm mt-1 text-zinc-600">
              Test your assistant, customize apperance and deploy it.{" "}
            </p>
          </div>
        </div>

        <div className="flex mt-7 gap-5 ">
          <div className="w-[60%]  ">
            <Chatbot_playground />
          </div>
          <div className="w-[40%] h-min ">
            <Apperance_Box />
            <EmbedCode />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chatbot;

const Apperance_Box = () => {
  return (
    <div className="bg-zinc-950 border-2 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <Palette size={20} />{" "}
        <p className="uppercase text-zinc-300 text-sm">Apperance</p>
      </div>
      <div>
        <p className="text-sm text-zinc-500 mt-6 font-semibold">
          Primary Color
        </p>
        <div className="flex gap-2 items-center mt-3">
          {[
            "bg-red-600",
            "bg-blue-600",
            "bg-green-600",
            "bg-yellow-600",
            "bg-pink-600",
            "bg-purple-600",
            "bg-orange-600",
          ].map((c) => (
            <p className={`h-6 w-6 rounded-full ${c} `}></p>
          ))}
        </div>

        <Field>
          <FieldLabel
            className={"text-sm text-zinc-500 mt-4 font-semibold"}
            htmlFor="textarea-disabled"
          >
            Welcome Message
          </FieldLabel>
          <Textarea
            id="textarea-disabled"
            placeholder="Type your welcome message."
            disabled
          />
          <Button className={"mt-2"}>
            <Save /> Save
          </Button>
        </Field>
      </div>
    </div>
  );
};

const EmbedCode = () => {
  return (
    <div className="bg- border-2 p-4 mt-5 rounded-lg">
      <div className="flex gap-2 items-center">
        <Code size={20} />{" "}
        <p className="uppercase text-zinc-300 text-sm">Apperance</p>
      </div>

      <div className="mt-4">
        <Code_embed_box showCopyButton={true} />
      </div>
      <div className="flex p-1 px-2 mt-3 rounded-lg border  border-yellow-600 text-xs text-yellow-600 gap-2 bg-[#ffea2d27] items-center ">
        <Info size={17} />{" "}
        <p>Paste this code before the {`<head>`} closing tag. </p>
      </div>
    </div>
  );
};
