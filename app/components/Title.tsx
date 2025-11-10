"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TitleProps {
  name: string;
  color?: string; // optional fill color
  childVariant?: unknown; // optional Framer Motion variants
}

export default function Title({
  name,
  color = "var(--color-foreground)",
  childVariant,
}: TitleProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/titles/${name}25.svg`)
      .then((res) => res.text())
      .then(setSvgContent)
      .catch(console.error);
  }, [name]);

  if (!svgContent) return null;

  const processedSvg = svgContent
    .replace(/fill="[^"]*"/g, `fill="${color}"`) // replace existing fills
    .replace(/<path(?![^>]*fill=)/g, `<path fill="${color}"`); // add fill if missing

  return (
    <motion.div variants={childVariant}>
      <span className="block w-[60px] ">
        <div
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: processedSvg }}
        />
      </span>
    </motion.div>
  );
}



