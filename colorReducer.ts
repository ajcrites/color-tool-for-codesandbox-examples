import parse from 'parse-color';
import { getType, createStandardAction, createAction } from 'typesafe-actions';

export const updateHex = createStandardAction('UPDATE_HEX')<string>();
export const updateRgba = createStandardAction('UPDATE_RGBA')<string>();

export function colorReducer(state = {}, action): ColorContextProps {
  switch (action.type) {
    case getType(updateHex): {
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

    case getType(updateRgba): {
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
