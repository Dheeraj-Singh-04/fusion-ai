import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function CreateSection_drawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className={"cursor-pointer"}>
          <Plus />
          Create Section
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-black! min-w-110 border-gray-950">
        <DrawerHeader className={"border-b border-zinc-900"}>
          <DrawerTitle className={`text-zinc-100`}>Create Section</DrawerTitle>
          <DrawerDescription className={`text-zinc-500`}>
            Configure how AI behave for this specific topic.
          </DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <p className="mt-6 text-zinc-400 text-xs">BASICS</p>

          <FieldGroup className={"gap-1"}>
            <Field>
              <FieldLabel
                className={`text-zinc-500 text-xs mt-5`}
                htmlFor="section-name"
              >
                Section Name
              </FieldLabel>
              <Input
                className={"border-zinc-700 h-10"}
                id="section-name"
                placeholder="e.g. Billing Policy"
              />
            </Field>
            <Field>
              <FieldLabel
                className={`text-zinc-500 text-xs mt-5`}
                htmlFor="description"
              >
                Description
              </FieldLabel>
              <Input
                id="description"
                className={"border-zinc-700 h-10"}
                type="email"
                placeholder="When should the AI use this?"
              />
              <FieldDescription className={"text-xs"}>
                We&apos;ll send updates to this address.
              </FieldDescription>
            </Field>
            <div className="flex justify-between items-center">
              <p className="mt-6 text-zinc-400 uppercase text-xs ">
                Knowledge sources
              </p>
              <p className="mt-6 text-zinc-500  text-xs ">0 Attached</p>
            </div>

            {/* selected sources  */}
            <Field>
              <Select>
                <SelectTrigger className="w-full text-zinc-500 border-zinc-700 h-10! mt-4 max-w-48">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent className={"bg-zinc-950 text-zinc-500"}>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            {/* tone  */}
            <p className="mt-6 text-zinc-400 uppercase text-xs ">TONE</p>

            <RadioGroup defaultValue="comfortable" className="w-full mb-4 mt-4">
              <div className="flex flex-col w-full  gap-2">
                <div className="flex items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 gap-2">
                  <RadioGroupItem value="strict" id="r1" />
                  <Label className={"text-zinc-300"} htmlFor="r1">
                    Strict{" "}
                    <div className="bg-[#f002] py-0.5 border border-red-700 text-red-700 px-2 text-[10px] rounded-lg ">
                      Fact based
                    </div>{" "}
                    <p className="text-[11px] text-zinc-600">
                      Only answer if fully confident. No small talk.{" "}
                    </p>
                  </Label>
                </div>
              </div>

              <div className="flex flex-col w-full  gap-2">
                <div className="flex items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 gap-2">
                  <RadioGroupItem value="neutral" id="r2" />
                  <Label className={"text-zinc-300"} htmlFor="r2">
                    Neutral{" "}
                    <p className="text-[11px] text-zinc-600">
                      Porfessional, concise, and direct.
                    </p>
                  </Label>
                </div>
              </div>

              <div className="flex flex-col w-full  gap-2">
                <div className="flex items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 gap-2">
                  <RadioGroupItem value="friendly" id="r2" />
                  <Label className={"text-zinc-300"} htmlFor="r3">
                    Friendly{" "}
                    <p className="text-[11px] text-zinc-600">
                      Warm and conversational. Good for general FAQ.
                    </p>
                  </Label>
                </div>
              </div>

              <div className="flex flex-col w-full  gap-2">
                <div className="flex items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 gap-2">
                  <RadioGroupItem value="empahetic" id="r2" />
                  <Label className={"text-zinc-300"} htmlFor="r4">
                    Empahetic{" "}
                    <p className="text-[11px] text-zinc-600">
                      Support-first, apologetic, and calming.
                    </p>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </FieldGroup>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Create Section</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CreateSection_drawer;
