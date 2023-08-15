import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import WordCloud from "./WordCloud";
import { redirect } from "next/navigation";
import { Flame } from "lucide-react";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4 transition-all hover:translate-y-[2px] hover:translate-x-[1px] cursor-pointer">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-xl font-bold">Hot Topics</CardTitle>
          <Flame />
        </div>

        <CardDescription>Click on a topic to start a quiz</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
