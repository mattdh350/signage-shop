import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import shopDirectoryReducer from "../redux/shop-directory/shop-directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shopDirectory: shopDirectoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
