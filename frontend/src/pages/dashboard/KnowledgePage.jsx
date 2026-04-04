import AddKnowledgeModal from "@/components/common/dashboard-page/AddKnowledgeModal";
import RightDrawer from "@/components/common/dashboard-page/CreateSection_drawer";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Eye,
  Filter,
  FilterIcon,
  Globe,
  Notebook,
  Plus,
  Text,
  Upload,
} from "lucide-react";
import React, { useState } from "react";

const KnowledgePage = () => {
  const [addKnowledgeOpen, setaddKnowledgeOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="p-8 w-full">
        {/* drawer  */}
        <AddKnowledgeModal
          open={addKnowledgeOpen}
          setopen={setaddKnowledgeOpen}
        />
        {/* header  */}
        <div className="flex justify-between items-center ">
          <div>
            <h5 className="text-xl ">Knowledge Base</h5>
            <p className="text-sm mt-1 text-zinc-600">
              Manage your website sources, documents,and uploads.{" "}
            </p>
          </div>

          {/* <RightDrawer /> */}
          <Button
            onClick={() => setaddKnowledgeOpen(true)}
            className={"cursorpo"}
          >
            <Plus />
            Add Knowledge
          </Button>
        </div>

        {/* 3 boxes of add sources types */}
        <div className="grid grid-cols-3 gap-5 mt-7">
          <div
            onClick={() => setaddKnowledgeOpen(true)}
            className="p-5 cursor-pointer hover:border-blue-600 py-8  bg-zinc-950 border rounded-lg "
          >
            <div className="flex justify-center">
              <Globe
                size={40}
                className="text-blue-700 p-2 rounded-full bg-[#203aff26] border-blue-700"
              />
            </div>
            <p className="text-sm my-1 text-zinc-300 text-center">
              Add Website
            </p>
            <p className="text-xs mt-2 text-zinc-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              fugiat! Lorem, ipsum dolor.
            </p>
          </div>
          <div
            onClick={() => setaddKnowledgeOpen(true)}
            className="p-5 cursor-pointer hover:border-green-600 py-8  bg-zinc-950 border rounded-lg "
          >
            <div className="flex justify-center">
              <Upload
                size={40}
                className="text-green-700 p-2 rounded-full bg-[#49ff2026] border-green-700"
              />
            </div>
            <p className="text-sm my-1 text-zinc-300 text-center">
              Upload File
            </p>
            <p className="text-xs mt-2 text-zinc-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              fugiat! Lorem, ipsum dolor.
            </p>
          </div>
          <div
            onClick={() => setaddKnowledgeOpen(true)}
            className="p-5 cursor-pointer hover:border-yellow-600 py-8  bg-zinc-950 border rounded-lg "
          >
            <div className="flex justify-center">
              <Text
                size={40}
                className="text-yellow-700 p-2 rounded-full bg-[#fbff2026] border-yellow-700"
              />
            </div>
            <p className="text-sm my-1 text-zinc-300 text-center">
              Manual Text
            </p>
            <p className="text-xs mt-2 text-zinc-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              fugiat! Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        {/* source list box  */}
        <div className="  bg-zinc-950 mt-7 border rounded-lg ">
          <div className="flex p-5  justify-between items-center">
            <p>Sources</p>
            <div className="flex justify-center items-center gap-4">
              <Input placeholder="Search Sources..."></Input>
              <FilterIcon size={20} />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={`text-sm text-zinc-500  w-50`}>
                  NAME
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  TYPE
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  STATUS
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  LAST UPDATE
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  ACTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <Globe size={18} className="text-blue-700" />
                    <div>
                      <p className="text-xs text-zinc-300">
                        https://localhost:8000
                      </p>
                      <p className="text-[11px] text-zinc-600">
                        https://localhost:8000
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm  text-zinc-600 h-full flex items-center">
                    Website
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-xs  px-2 rounded-full bg-[#1af95224] w-min border border-green-700  text-green-700 h-full flex items-center">
                    Active
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-zinc-600 text-sm">07/12/2025</div>
                </TableCell>
                <TableCell>
                  <div className="p-2 text-white    hover:text-blue-600 bg-zinc-800  w-min rounded-lg cursor-pointer ">
                    <Eye size={20} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgePage;
