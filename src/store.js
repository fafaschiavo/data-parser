import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Base reducer
import RootReducer from './reducers/index.js'

const persistConfig = {
	key: 'root',
	storage,
}

const PersistedRootReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(PersistedRootReducer)
const store_persistor = persistStore(store)

export { store, store_persistor }