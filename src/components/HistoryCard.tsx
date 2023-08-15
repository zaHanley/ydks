"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollText } from "lucide-react";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

const HistoryCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();
  return (
    <div
      className={className}
      {...props}
      onClick={() => {
        router.push("/history");
      }}
    >
      <Card className="cursor-pointer hover:opacity-90 transition-all hover:translate-y-[2px] hover:translate-x-[1px]  hover:bg-sky-700 hover:border-slate-900 ">
        <CardHeader className="font-bold text-left text-xl flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xl font-bold">History</CardTitle>
          <ScrollText size={25} />
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground hover:text-white">
          Track your progress
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryCard;
