import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from './reducers/User';
import {persistReducer, persistStore} from 'redux-persist';
import {logger} from 'redux-logger';
import Categories from './reducers/Categories';
import Donation from './reducers/Donation';
const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donation: Donation,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
persistor.purge();
