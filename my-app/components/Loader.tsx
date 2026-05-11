"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-99999 bg-black flex items-center justify-center">
      <div className="flex flex-row items-center gap-2.5">
        {/* <div className="h-12 w-12 rounded-full border-4 border-white border-t-transparent animate-spin" /> */}
        <Image src="/logo.svg" width={50} height={50} alt="logo" className="h-14 w-14" loading="eager" />
        <p className="text-white text-sm tracking-widest pt-1">
          LOADING...
        </p>
      </div>
    </div>
  );
}