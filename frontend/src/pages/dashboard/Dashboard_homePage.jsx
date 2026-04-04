import Code_embed_box from "@/components/common/Code_embed_box";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCheck,
  Globe,
  MoveUpRight,
  Plus,
  Text,
  Upload,
} from "lucide-react";
import React from "react";

const Dashboard_homePage = () => {
  return (
    <DashboardLayout>
      <div className="p-8 w-full">
        <SetupProgress />
        <div className="flex gap-5 mt-5">
          <div className="flex w-[60%] flex-col gap-5">
            <KnowledgeBase />
            <Sections />
          </div>
          <div className="flex w-[40%] flex-col gap-5">
            <RecentChats />
            <InstallWidget />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard_homePage;

const SetupProgress = () => {
  return (
    <div className="w-full">
      <h5 className="text-xl ">Setup Progress</h5>
      <div className=" grid-cols-4 w-full grid  gap-5 mt-6">
        <div
          className={`flex w-full rounded-lg border bg-zinc-950 p-5  flex-row  text-zinc-600 justify-between items-center`}
        >
          <p className="text-sm  ">Website Scanned</p>
          <Check size={15} />
        </div>
        <div
          className={`flex w-full rounded-lg border bg-zinc-950 p-5  flex-row  text-zinc-600 justify-between items-center`}
        >
          <p className="text-sm  ">Knowledge Added</p>
          <Check size={15} />
        </div>
        <div
          className={`flex w-full rounded-lg border bg-zinc-950 p-5  flex-row  text-zinc-600 justify-between items-center`}
        >
          <p className="text-sm  ">Section Configured</p>
          <Check size={15} />
        </div>
        <div
          className={`flex w-full rounded-lg border border-blue-800 bg-[#0f5afd28] p-5  flex-row  text-zinc-600 justify-between items-center`}
        >
          <p className="text-sm  text-gray-300 ">Widget Installed</p>
          <ArrowUpRight className="text-blue-800" size={15} />
        </div>
      </div>
    </div>
  );
};

const KnowledgeBase = () => {
  return (
    <div className="p-4 w-full border rounded-lg">
      <div className="flex justify-between ">
        <p>Knowledge Base</p>
        <Button
          variant="outline"
          className="text-xs text-zinc-500 rounded-lg border px-2 py-1"
        >
          Manage sources
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-3">
        <div className="w-full mt-3 border bg-zinc-950 p-3 rounded-lg ">
          <div className="flex text-zinc-600 items-center gap-2">
            <Globe className="text-blue-500" size={15} />
            <p className="text-xs">Pages</p>
          </div>
          <p className="text-2xl text-gray-300 mt-1">0</p>
        </div>
        <div className="w-full mt-3 border bg-zinc-950 p-3 rounded-lg ">
          <div className="flex text-zinc-600 items-center gap-2">
            <Text className="text-blue-500" size={15} />
            <p className="text-xs">Manual Texts</p>
          </div>
          <p className="text-2xl text-gray-300 mt-1">0</p>
        </div>
        <div className="w-full mt-3 border bg-zinc-950 p-3 rounded-lg ">
          <div className="flex text-zinc-600 items-center gap-2">
            <Upload className="text-blue-500" size={15} />
            <p className="text-xs">Uploads</p>
          </div>
          <p className="text-2xl text-gray-300 mt-1">0</p>
        </div>
      </div>
    </div>
  );
};

const Sections = () => {
  return (
    <div className="p-4 min-h-80 w-full border rounded-lg">
      <div className="flex justify-between ">
        <div>
          <p>Sections</p>
          <p className="text-xs text-zinc-600">
            Configure behaviour for different topics
          </p>
        </div>
        <Button className="text-xs rounded-lg border px-2 py-1">
          <Plus /> Create Section
        </Button>
      </div>
      <p className="text-center text-zinc-600 mt-10 text-sm">
        No sections configured yet
      </p>
    </div>
  );
};

const RecentChats = () => {
  return (
    <div className="p-4 min-h-80 w-full border rounded-lg">
      <div className="flex justify-between ">
        <div>
          <p>Recent Chats</p>
        </div>
        <Button
          variant="outline"
          className="text-xs text-zinc-500 rounded-lg border px-2 py-1"
        >
          View all <ArrowRight />
        </Button>
      </div>
      <p className="text-center text-zinc-600 mt-10 text-sm">No chats yet.</p>
    </div>
  );
};

const InstallWidget = () => {
  return (
    <div className="p-4 w-full border rounded-lg">
      <div className="flex justify-between ">
        <div>
          <p>Install Widget</p>
        </div>
      </div>
      <p className="text-xs mt-1 text-zinc-500">Add this code to your website appropriate page. </p>
      <div className="mt-5">
        <Code_embed_box showCopyButton={true} />
      </div>
    </div>
  );
};
