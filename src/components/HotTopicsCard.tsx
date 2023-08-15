import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import WordCloud from "./WordCloud";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4 transition-all hover:translate-y-[2px] hover:translate-x-[1px] cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Hot Topics</CardTitle>
        <CardDescription>Click on a topic to start a quiz</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
