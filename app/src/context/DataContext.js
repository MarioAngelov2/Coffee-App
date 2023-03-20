import { create } from "@mui/material/styles/createTransitions";
import { createContext } from "react";

export const DataContext = createContext({
  addNewItem: () => {}
});

export const CatalogStateContext = createContext();