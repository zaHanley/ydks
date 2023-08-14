"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brain } from "lucide-react";
import { useRouter } from "next/navigation";

const QuizCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter();
  return (
    <div
      className={className}
      {...props}
      onClick={() => {
        router.push("/quiz");
      }}
    >
      <Card className="cursor-pointer hover:opacity-80 transition-all hover:translate-y-[2px] hover:translate-x-[1px]">
        <CardHeader className="font-bold text-left text-xl flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xl font-bold">Quiz me</CardTitle>
          <Brain size={25} />
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Take a new quiz
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCard;
