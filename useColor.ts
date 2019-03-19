import { useContext, useCallback } from 'react';
import parse from 'parse-color';

import { ColorAppContext } from '~/ColorApp';

export function useColor() {
  const { hex, rgba, setHex, setRgba } = useContext(ColorAppContext);

  const updateHex = useCallback(hexValue => {
    const { hex, rgba } = parse(hexValue);

    setHex(hex);
    setRgba(rgba);
  });

  const updateRgba = useCallback(rgbaValue => {
    const { hex, rgba } = parse(rgbaValue);

    setRgba(rgba);
    setHex(hex);
  });

  return { hex, rgba, updateHex, updateRgba };
}
