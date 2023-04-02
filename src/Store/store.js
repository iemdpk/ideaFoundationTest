import { configureStore } from "@reduxjs/toolkit";
import run  from "../function/add";

export default configureStore({
    reducer:{run},
})