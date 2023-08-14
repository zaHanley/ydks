import HotTopicsCard from "@/components/HotTopicsCard";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "ydks | History",
};

const HistoryPage = (props: Props) => {
  return <HotTopicsCard />;
};

export default HistoryPage;
