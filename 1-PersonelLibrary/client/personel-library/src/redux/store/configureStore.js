import { createStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import rootReducer from "./rootReducer";

export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer())
}