import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock4 } from "lucide-react";
import React from "react";

type Props = {};

const RecentActivity = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3 transition-all hover:translate-y-[2px] hover:translate-x-[1px] cursor-pointer">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
          <Clock4 />
        </div>
        <CardDescription>You have played a total of 69 games</CardDescription>
      </CardHeader>
      <CardContent>History</CardContent>
    </Card>
  );
};

export default RecentActivity;
