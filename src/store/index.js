import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/reducer";


const persistConfig = {
  key: "gb2409",
  storage,
};


const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
