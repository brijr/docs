"use client";
import { NotionRenderer } from "react-notion-x";
import type { ComponentProps } from "react";
import dynamic from "next/dynamic";

// Dynamically import the code component
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

const mapPageUrl = (pageId: string) => {
  return `/docs/${pageId}`;
};

export function Renderer(props: ComponentProps<typeof NotionRenderer>) {
  return (
    <NotionRenderer
      {...props}
      mapPageUrl={mapPageUrl}
      components={{
        Code: Code,
      }}
    />
  );
}
