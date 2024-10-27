// components/HeroTitle.styled.js
import styled, { keyframes } from "styled-components";

export const HeroWrapper = styled.div`
  text-align: center;
`;

const textRotate1 = keyframes`
  0% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  40% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  60% { transform: translate3d(0, -100%, 0) rotateX(-90deg); }
  100% { transform: translate3d(0, -100%, 0) rotateX(-90deg); }
`;

const textRotate2 = keyframes`
  0% { transform: translate3d(0, 100%, 0) rotateX(-90deg); }
  40% { transform: translate3d(0, 100%, 0) rotateX(-90deg); }
  60% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
  100% { transform: translate3d(0, 0%, 0) rotateX(0deg); }
`;

export const Position = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: #022B3A;

  .text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    &.first span {
      animation: ${textRotate1} 2.4s infinite alternate;
    }
    &.second {
      top: 0;
      color: #1F7A8C;
      span {
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }
`;

export const AnimatedSpan = styled.span`
  display: inline-block;
  transform-style: preserve-3d;
  transform-origin: bottom;
  animation-delay: ${({ index }) => index * 0.05}s !important;
  padding: ${({ children }) => (children === " " ? "0.325rem" : "0")};
`;
