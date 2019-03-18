import React, { useReducer, createContext, Dispatch } from 'react';

import { HexInput } from '~/HexInput';
import { RgbaInput } from '~/RgbaInput';
import { colorReducer } from '~/colorReducer';

interface ColorContextProps {
  hex: string;
  rgba: number[];

  dispatch: Dispatch<Action>;
};

const ColorContext = createContext<ColorContextProps>({} as any);

export const ColorToolApp = () => {
  const [{ hex, rgba }, dispatch] = useReducer(colorReducer, {
    hex: '',
    rgba: [0, 0, 0, 0],
  });
  const state: ColorContextProps = {
    hex, rgba, dispatch,
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
