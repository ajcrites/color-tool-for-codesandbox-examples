import React, { useState, createContext } from 'react';

import { HexInput } from '~/HexInput';
import { RgbaInput } from '~/RgbaInput';

interface ColorContextProps {
  hex: string;
  rgba: number[];

  setHex: (value) => void;
  setRgba: (value) => void;
};

const ColorContext = createContext<ColorContextProps>({} as any);

export const ColorToolApp = () => {
  const [hex, setHex] = useState('');
  const [rgba, setRgba] = useState(['', '', '', '']);
  const state: ColorContextProps = {
    hex, rgba, setHex, setRgba,
  };

  return (
    <main>
      <ColorContext.Producer value={state}>
        <HexInput />
        <RgbaInput />
      </ColorContext.Producer>
    </main>
  );
};
