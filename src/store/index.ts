import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import app from './modules/app';
import RootState from '../interface/store/index';

export const key: InjectionKey<Store<RootState>> = Symbol();

// 封装useStore，避免每次导入key
export function useStore() {
    return baseUseStore(key);
}

const store = createStore<RootState>({
    modules:{
        app

    }
})


export default store
