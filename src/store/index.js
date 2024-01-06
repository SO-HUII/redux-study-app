// 리덕스 로직 저장 index.js 파일

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;