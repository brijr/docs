"use client";
import { NotionRenderer } from "react-notion-x";
import type { ComponentProps } from "react";

const mapPageUrl = (pageId: string) => {
  return `/docs/${pageId.replace(/-/g, '')}`;
};

export function Renderer(props: ComponentProps<typeof NotionRenderer>) {
  return <NotionRenderer {...props} mapPageUrl={mapPageUrl} />;
}
