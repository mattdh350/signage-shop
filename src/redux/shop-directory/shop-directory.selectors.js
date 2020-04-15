import { createSelector } from "reselect";

const selectShopDirectory = (state) => state.shopDirectory;

export const selectShopDirectoryCategories = createSelector(
  [selectShopDirectory],
  (shopDirectory) => shopDirectory.categories
);
