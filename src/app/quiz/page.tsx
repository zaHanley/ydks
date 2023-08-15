import QuizCreation from "@/components/QuizCreation";
import { getAuthSession } from "@/lib/nextauth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "ydks | Quiz",
};

const QuizPage: FC<pageProps> = async ({}) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <QuizCreation />;
};

export default QuizPage;
