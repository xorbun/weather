import { configureStore } from "@reduxjs/toolkit";
import viewMeteo from "../reducers/meteo";




const store = configureStore({
    reducer: viewMeteo
}) 

export default store