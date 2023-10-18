// Create a Redux slice to manage the uploaded image
import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: { uploadedImage: null },
  reducers: {
    setImage: (state, action) => {
      state.uploadedImage = action.payload;
      // Save the image to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem('uploadedImage', action.payload);
      }
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;