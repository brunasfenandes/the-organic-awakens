// components/HeroTitle.js
import React from "react";
import { HeroWrapper, Position, AnimatedSpan } from "./HeroTitle.styled";

const HeroTitle = () => {
  const phrases = [
    "Master Organic Bonds",
    "Unlock Chemical Secrets",
  ];

  const produceSpans = (phrase) =>
    phrase.split("").map((letter, index) => (
      <AnimatedSpan key={index} index={index}>
        {letter}
      </AnimatedSpan>
    ));

  return (
    <HeroWrapper>
      <h1>THE ORGANIC AWAKENS</h1>
      <Position>
        <div className="text first" aria-label={phrases[0]}>
          {produceSpans(phrases[0])}
        </div>
        <div className="text second" aria-label={phrases[1]}>
          {produceSpans(phrases[1])}
        </div>
      </Position>
    </HeroWrapper>
  );
};

export default HeroTitle;

