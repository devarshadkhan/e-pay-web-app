import {configureStore} from "@reduxjs/toolkit"
import imageSlice from '../slices/uploadDocsSlices/uploadDocsSlices'
export const store =  configureStore  ({
    reducer: imageSlice ,
    
})