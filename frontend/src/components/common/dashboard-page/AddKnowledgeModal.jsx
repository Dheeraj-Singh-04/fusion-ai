import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Info, Text, Upload } from "lucide-react";
import { useState } from "react";

function AddKnowledgeModal({ open, setopen }) {
  const [tabType, settabType] = useState("website"); // website text file
  return (
    <Dialog open={open} onOpenChange={setopen}>
      <form>
        <DialogContent className="sm:max-w-sm text-white p-6 min-w-130 bg-black ">
          <DialogHeader>
            <DialogTitle className={"text-zinc-300"}>
              Add New Sources
            </DialogTitle>
            <DialogDescription>
              Choose a content type to train your your assistant.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 ">
            {/* tabs  */}
            <div className="flex  pb-2  items-center">
              <div
                onClick={() => settabType("website")}
                className={`p-3 text-zinc-400 hover:bg-zinc-800 cursor-pointer border-black hover:border-zinc-700 border-b-2 ${tabType == "website" && " border-blue-700! "} `}
              >
                Website
              </div>
              <div
                onClick={() => settabType("text")}
                className={`p-3 text-zinc-400 hover:bg-zinc-800 cursor-pointer border-black hover:border-zinc-700 border-b-2 ${tabType == "text" && " border-blue-700! "} `}
              >
                QA/Text
              </div>
              <div
                onClick={() => settabType("file")}
                className={`p-3 text-zinc-400 hover:bg-zinc-800 cursor-pointer border-black hover:border-zinc-700 border-b-2 ${tabType == "file" && " border-blue-700! "} `}
              >
                File Upload
              </div>
            </div>

            {tabType == "website" && <WebsiteTypeContent />}
            {tabType == "text" && <TextTypeContent />}
            {tabType == "file" && <FileTypeContent />}
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddKnowledgeModal;

const WebsiteTypeContent = () => {
  return (
    <div className="my-4">
      <div className="p-3 bg-[#ff1f1f22] my-3 border border-red-800 rounded-lg w-full">
        <div className="flex items-center  gap-3">
          <Info size={20} className="text-red-800" />
          <p className="text-xs mt-1 text-zinc-600">
         Please enter a valid URL
          </p>
        </div>
      </div>
      <div className="p-3 bg-[#9e1fff22] border border-purple-800 rounded-lg w-full">
        <div className="flex gap-3">
          <Globe size={20} className="text-purple-800" />
          <div>
            <p className="text-sm text-zinc-300">Crawl website</p>
            <p className="text-xs mt-1 text-zinc-600">
              Enter a website URL to crawl significantly or add a specific page
              link to provide focused context.{" "}
            </p>
          </div>
        </div>
      </div>
      <Field className={"mt-6"}>
        <FieldLabel
          className={"text-zinc-300 text-xs!"}
          htmlFor="fieldgroup-name"
        >
          Website URL*{" "}
        </FieldLabel>
        <Input id="fieldgroup-name" placeholder="https://example.com" />
      </Field>
      <Button
        disabled={false}
        variant="outline"
        className={"w-full text-black cursor-pointer mt-6 p-5 "}
      >
        Submit
      </Button>
    </div>
  );
};

const TextTypeContent = () => {
  return (
    <div className="my-4">
      <div className="p-3 bg-[#9e1fff22] border border-purple-800 rounded-lg  w-full">
        <div className="flex gap-3">
          <Text size={20} className="text-purple-800" />
          <div>
            <p className="text-sm text-zinc-300">Raw Text</p>
            <p className="text-xs mt-1 text-zinc-600">
              Paste existing FAQs, policies, or internal notes directly.
            </p>
          </div>
        </div>
      </div>
      <Field className={"mt-6"}>
        <FieldLabel className={"text-zinc-300 text-xs!"} htmlFor="title">
          Title
        </FieldLabel>
        <Input id="title" placeholder="e.g.  Refund Policy" />
      </Field>
      <Field className={"mt-4"}>
        <FieldLabel className={"text-zinc-300 text-xs!"} htmlFor="content">
          Content
        </FieldLabel>
        <Textarea id="content" placeholder="Paste text here..." />
      </Field>
      <Button
        disabled={false}
        variant="outline"
        className={"w-full text-black cursor-pointer mt-6 p-5 "}
      >
        Submit
      </Button>
    </div>
  );
};

const FileTypeContent = () => {
  const [isDragging, setisDragging] = useState(false);
  return (
    <div className="my-4">
      <label
        htmlFor="file"
        className={`h-40 text-zinc-600 cursor-pointer w-full border-2 border-dashed rounded-xl border-zinc-700 flex justify-center items-center ${isDragging && " border-blue-700!  "} `}
      >
        <input type="file" hidden id="file" />
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setisDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setisDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            alert(JSON.stringify(e.dataTransfer.files[0], null, 2));
            setisDragging(false);
          }}
          className="flex justify-center items-center flex-col "
        >
          <Upload
            size={50}
            className={`p-3 rounded-full bg-zinc-950 ${isDragging && " text-blue-700  "} `}
          />
          <p className="mt-2 text-sm">Click to upload or drag and drop</p>
          <p className="mt-1 text-xs text-zinc-800">CSV (max 10 mb) </p>
        </div>
      </label>
      <Button
        disabled={false}
        variant="outline"
        className={"w-full text-black cursor-pointer mt-6 p-5 "}
      >
        Submit
      </Button>
    </div>
  );
};
