import Code_embed_box from "@/components/common/Code_embed_box";
import Chatbot_playground from "@/components/common/dashboard-page/Chatbot_playground";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Code, Info, Palette, Save, Search } from "lucide-react";

import React, { useState } from "react";

const Conversations = () => {
  return (
    <DashboardLayout>
      <div className=" flex  w-full">
        <div className="w-[30%] border-r p-4 h-screen overflow-y-auto">
          <div className="flex justify-between items-center">
            <p>Inbox</p>
            <p className="text-xs text-zinc-500">1 conversation</p>
          </div>

          <div className="flex gap-2 items-center rounded-lg  focus-within:border-zinc-600 border p-1.5 mt-6 bg-zinc-950">
            <Search size={20} />
            <input
              placeholder="Search..."
              className="outline-none  placeholder:text-sm  w-full "
              type="text"
            />
          </div>

          <br />
          <div className="gap-2 flex flex-col">
            <div className="p-3 border-b-2 border-blue-700 bg-zinc-950 rounded-lg">
              <div className="flex justify-between items-center ">
                <p className="text-sm text-zinc-300">#Visitor(123.34.2.0)</p>
                <p className="text-xs text-zinc-700">0m ago</p>
              </div>
              <p className="text-xs text-zinc-600">
                Lorem ipsum dolor sit amet....
              </p>
            </div>
            <div className="p-3 border-2 border-zinc-900 bg-zinc-950 rounded-lg">
              <div className="flex justify-between items-center ">
                <p className="text-sm text-zinc-300">#Visitor(123.34.2.0)</p>
                <p className="text-xs text-zinc-700">0m ago</p>
              </div>
              <p className="text-xs text-zinc-600">
                Lorem ipsum dolor sit amet....
              </p>
            </div>
            <div className="p-3 border-2 border-zinc-900 bg-zinc-950 rounded-lg">
              <div className="flex justify-between items-center ">
                <p className="text-sm text-zinc-300">#Visitor(123.34.2.0)</p>
                <p className="text-xs text-zinc-700">0m ago</p>
              </div>
              <p className="text-xs text-zinc-600">
                Lorem ipsum dolor sit amet....
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%]  h-screen overflow-y-auto">
          <Chatbot_playground
            fullHeight={"flex-1 "}
            className={`border-0! rounded-0! h-full!  p-5!`}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Conversations;

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
