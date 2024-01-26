const configuratorReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return {
        ...state,
        selectedColor: action.payload.color,
        imagePath: buildImagePath(state.model, action.payload.color, state.selectedWheel),
      };
    case "SET_WHEEL":
      return {
        ...state,
        selectedWheel: action.payload.wheel,
        imagePath: buildImagePath(state.model, state.selectedColor, action.payload.wheel),
      };
    default:
      return state;
  }
};

export default configuratorReducer;