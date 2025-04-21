"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Check, Clipboard } from "lucide-react";
import useClipboard from "react-use-clipboard";

type Props = {
  children: string;
  language?: string;
  title?: string;
  hideHeader?: boolean;
};

export const CodeBlock = ({
  children,
  language = "typescript",
  title,
  hideHeader = false,
}: Props) => {
  const [isCopied, copy] = useClipboard(children, {
    successDuration: 1000,
  });

  return (
    <div className="rounded-lg bg-zinc-900 font-mono text-white">
      {!hideHeader && (
        <div className="flex items-center justify-between pl-2">
          <h2 className="text-xs text-zinc-300">{title || language}</h2>
          <button onClick={copy} className="p-2 text-zinc-400">
            {isCopied ? <Check size="15" /> : <Clipboard size="15" />}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        customStyle={{
          padding: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "rgb(24,24,27)",
          fontSize: "0.82rem",
        }}
        language={language}
        style={codeTheme}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
