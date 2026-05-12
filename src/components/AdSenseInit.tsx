"use client";

import { useEffect } from "react";

export default function AdSenseInit() {
  useEffect(() => {
    // @ts-ignore
    window.adsbygoogle = window.adsbygoogle || [];
  }, []);
  return null;
}
