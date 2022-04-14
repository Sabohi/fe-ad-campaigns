import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import history from '@/routes/History';
import rootReducer from './root-reducer';

const middlewares = [thunk, routerMiddleware(history)];

const persistConfig = {
  storage,
  key: 'root',
};

const composeEnhancers = (process.env.NODE_ENV === 'development' && window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export { store, persistor };
