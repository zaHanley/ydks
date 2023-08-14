import HistoryCard from "@/components/HistoryCard";
import HotTopicsCard from "@/components/HotTopicsCard";
import QuizCard from "@/components/QuizCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import RecentActivity from "./RecentActivity";

type Props = {};

export const metatdata: Metadata = {
  title: "Dashboard | ydks",
};

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl mr-2 tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizCard />
        <HistoryCard />
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivity />
      </div>
    </main>
  );
};

export default Dashboard;
