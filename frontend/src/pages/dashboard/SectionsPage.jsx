import AddKnowledgeModal from "@/components/common/dashboard-page/AddKnowledgeModal";
import CreateSession_drawer from "@/components/common/dashboard-page/CreateSection_drawer";
import RightDrawer from "@/components/common/dashboard-page/CreateSection_drawer";
import ViewSession_drawer from "@/components/common/dashboard-page/ViewSection_drawer";
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
  const [selectedSectionToView, setselectedSectionToView] = useState();
  return (
    <DashboardLayout>
      <div className="p-8 w-full">
        {/* header  */}
        <div className="flex justify-between items-center ">
          <div>
            <h5 className="text-xl ">Sections</h5>
            <p className="text-sm mt-1 text-zinc-600">
              Define behaviour and tone for different topics.
            </p>
          </div>

          {/* <RightDrawer /> */}

          <CreateSession_drawer />
        </div>

        {/* source list box  */}
        <div className="  bg-zinc-950 mt-7 border rounded-lg ">
          <Table className={"mt-4"}>
            <TableHeader>
              <TableRow>
                <TableHead className={`text-sm text-zinc-500  w-50`}>
                  NAME
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  SOURCES
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  TONE
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  SCOPE
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  STATUS
                </TableHead>
                <TableHead className={`text-sm text-zinc-500  `}>
                  PREVIEW
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <p className=" text-zinc-400">FAQ</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm  text-zinc-600 h-full flex items-center">
                    2 sources
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-xs  px-2 rounded-full bg-[#1a1af924] w-min border border-blue-700  text-blue-700 h-full flex items-center">
                    Neutral
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-zinc-600 text-sm">General</div>
                </TableCell>
                <TableCell>
                  <div className="text-xs  px-2 rounded-full bg-[#1af92124] w-min border border-green-700  text-green-700 h-full flex items-center">
                    Active
                  </div>{" "}
                </TableCell>
                <TableCell>
                  <ViewSession_drawer
                    selectedSectionToView={selectedSectionToView}
                  />
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
