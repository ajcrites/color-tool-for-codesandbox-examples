import parse from 'parse-color';

export function colorReducer(state = {}, action): ColorContextProps {
  switch (action.type) {
    case 'UPDATE_HEX': {
      let nextState = { ...state };
      const hexColor = action.payload;
      if (/^#[a-f0-9]{6}$/i.test(hexColor)) {
        const { hex, rgba } = parse(action.payload);
        nextState = {
          ...state,
          hex,
          rgba,
        }
      }
      return nextState;
    }

    case 'UPDATE_RGBA': {
      let nextState = { ...state };
      const rgbaColor = action.payload;
      if (!rgbaColor.some(isNaN)) {
        const { hex, rgba } = parse(action.payload);
        nextState = {
          ...state,
          hex,
          rgba,
        }
      }
      return nextState;
    }
  }
}
