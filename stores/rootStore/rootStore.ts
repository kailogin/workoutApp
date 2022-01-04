import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from "react-redux";

import { RootDispatch, RootState } from "./rootTypes";

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useAppDispatch = () => useReduxDispatch<RootDispatch>();
