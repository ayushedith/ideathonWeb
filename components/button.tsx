"use client";
import React from "react";

export function TailwindcssButtons() {
  return (
    <button  className="p-[3px] relative cursor-none">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <label className="text-slate-50"><strong>Register Now</strong></label>
      </div>
    </button>
  );
}
