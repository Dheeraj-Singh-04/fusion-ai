import { CopyIcon } from "lucide-react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code_embed_box = ({ showCopyButton,width }) => {
  return (
    <div className="bg-zinc-950 border rounded-lg border-zinc-900 p-8">
      <div className="">
        <div className="flex relative justify-between items-center">
          <div className="flex gap-2">
            <p className="h-3 w-3 rounded-full bg-red-400 border border-red-600"></p>
            <p className="h-3 w-3 rounded-full bg-yellow-400 border border-yellow-600"></p>
            <p className="h-3 w-3 rounded-full bg-green-400 border border-green-600"></p>
          </div>
          <div className="text-sm text-zinc-500">index.html</div>
          {showCopyButton && (
            <CopyIcon
              size={40}
              className="text-zinc-200  absolute -top-12 -right-10 rounded-lg p-3 bg-zinc-900 hover:text-blue-400 cursor-pointer text-sm"
            />
          )}
        </div>
        <SyntaxHighlighter
          language="html"
          style={{ ...oneDark }}
          customStyle={{
            background: "transparent",
            paddingLeft:0,
            paddingRight:0
          }}
          codeTagProps={{
            style: { background: "transparent" },
          }}
        >
          {`<script \n src="https://yourdomain.com/chatbot.js">\n</script>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code_embed_box;
