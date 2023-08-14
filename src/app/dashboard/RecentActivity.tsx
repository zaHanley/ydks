import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

const RecentActivity = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
        <CardDescription>You have played a total of 69 games</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RecentActivity;
