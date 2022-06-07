import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export const RainbowHighlight = ({
  color,
  children,
  textLength,
}: {
  color: string;
  children: React.ReactNode;
  textLength: number;
}) => {
  return (
    <RoughNotation
      type='highlight'
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={800}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
