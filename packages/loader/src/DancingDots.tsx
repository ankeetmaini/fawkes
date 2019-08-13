import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const dance = keyframes`
  0%, 55%, 100% {
    transform: translate3d(0, 0, 0);
  }
  60% {
    transform: translate3d(0, -8px, 0);
  }
  80% {
    transform: translate3d(0, 4px, 0);
  }
  90% {
    transform: translate3d(0, -3px, 0);
  }
  95% {
    transform: translate3d(0, 1px, 0);
  }
`;

const DancingDots: FunctionComponent<{ dotCount: number }> = ({ dotCount }) => {
  let delay = 0;
  return (
    <>
      {Array.from({ length: dotCount })
        .map((_, i) => i + 1)
        .map(i => {
          const StyledSpan = styled.span`
            display: inline-block;
            margin: 2px;
            animation: ${dance} 1800ms linear infinite
              ${i === 1 ? 0 : i % 2 === 0 ? (delay += 100) : (delay += 200)}ms;
          `;
          return <StyledSpan key={i}>.</StyledSpan>;
        })}
    </>
  );
};

export default DancingDots;
