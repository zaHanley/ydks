import { Metadata } from "next";
import { FC } from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "ydks | Quiz",
};

const QuizPage: FC<pageProps> = ({}) => {
  return <div> Quiz page</div>;
};

export default QuizPage;
