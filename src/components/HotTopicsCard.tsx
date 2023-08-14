import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Hot Topics</CardTitle>
        <CardDescription>Click on a topic to start a quiz</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">Word Cloud</CardContent>
    </Card>
  );
};

export default HotTopicsCard;
