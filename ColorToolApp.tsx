import React, { useState } from 'react';

import { HexInput } from '~/HexInput';
import { RgbaInput } from '~/RgbaInput';

export const ColorToolApp = () => {
  const [hex, setHex] = useState('');
  const [rgba, setRgba] = useState(['', '', '', '']);

  return (
    <main>
      <HexInput />
      <RgbaInput />
    </main>
  );
};