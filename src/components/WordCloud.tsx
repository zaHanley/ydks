"use client";

import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const data = [
  { text: "Test", value: 20 },
  { text: "woooooah", value: 10 },
  { text: "help", value: 5 },
  { text: "drowning", value: 3 },
  { text: "happy", value: 1 },
];
const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};
const WordCloud = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      <D3WordCloud
        height={550}
        rotate={0}
        padding={10}
        fontSize={fontSizeMapper}
        font="sans-serif"
        fill={theme.theme == "dark" ? "white" : "black"}
        data={data}
      />
    </>
  );
};

export default WordCloud;
