import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const prompts = [
  "今何を考えていますか？",
  "今日の練習はどうでしたか？",
  "新しい技を習得しましたか？",
  "最近の試合での気づきは？",
  "道場の仲間に共有したいことは？",
  "今日の目標は達成できましたか？",
  "柔術で困っていることはありますか？",
  "みんなに聞いてみたいことは？",
];

export const AnimatedPlaceholder = () => {
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
        setIsChanging(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={cn(
        "transition-opacity duration-300",
        isChanging ? "opacity-0" : "opacity-100"
      )}
    >
      {currentPrompt}
    </span>
  );
};