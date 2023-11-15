import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: 154.578125,
  icons: [],
  open: false,
  colorPickerOpen: false,
  textSizeOpen: false,
  hrefInputOpen: false,
  iconSelected: [],
};

export const ptoSlice = createSlice({
  name: "pto",
  initialState,
  reducers: {
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setIcons: (state, action) => {
      state.icons = action.payload;
    },
    setIconSelected: (state, action) => {
      state.iconSelected.push(action.payload);
    },
    resetSelectedIcons: (state) => {
      state.iconSelected = [];
    },
    removeSelectedIcon: (state, action) => {
      state.iconSelected = state.iconSelected.filter((icon) => icon !== action.payload);
    },
    openProjectTools: (state) => {
      state.open = true;
    },
    openColorPicker: (state, action) => {
      state.colorPickerOpen = action.payload;
    },
    openTextSize: (state, action) => {
      state.textSizeOpen = action.payload;
    },
    openHrefInput: (state, action) => {
      state.hrefInputOpen = action.payload;
    },
    closeProjectTools: (state) => {
      state.open = false;
    },
  },
});

export const {
  setPosition,
  setIcons,
  openColorPicker,
  openProjectTools,
  closeProjectTools,
  setIconSelected,
  resetSelectedIcons,
  removeSelectedIcon,
  openTextSize,
  openHrefInput,
} = ptoSlice.actions;

export default ptoSlice.reducer;
