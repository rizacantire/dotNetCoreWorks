import {configureStore,  createSerializableStateInvariantMiddleware,isPlain
} from "@reduxjs/toolkit"
import authorReducer from "../reducers/authorSlice"
import categoryReducer from "../reducers/categorySlice"
import { Iterable } from 'immutable'

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})
export const store = configureStore({
    
    reducer : {
        authors:authorReducer,
        categories:categoryReducer,
        middleware: [serializableMiddleware],

    }
})