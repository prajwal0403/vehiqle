"use client";

import React from "react";
import Head from "next/head";

export default function WaitlistPage() {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
        <div className="aspect-video w-full"><iframe style={{"width":"100%"}} height="569" src="https://www.create.xyz/app/089ae6cf-4a11-45df-b3b8-0b053e8902a1" title="WaitlistForm" frameBorder="0"></iframe></div>
      </div>
    </>
  );
}
