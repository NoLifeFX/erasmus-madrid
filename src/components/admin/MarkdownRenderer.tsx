"use client";

import dynamic from "next/dynamic";

const MDPreview = dynamic(() => import("@uiw/react-md-editor").then((m) => m.default.Markdown), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-100 rounded-lg h-32" />,
});

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div data-color-mode="light" className="article-content">
      <MDPreview source={content} />
    </div>
  );
}
