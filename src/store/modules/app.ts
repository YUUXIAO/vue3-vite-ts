import { ActionTree, MutationTree,Module } from 'vuex'
import RootState from '../../interface/store'
import appState from '../../interface/store/modules/app'

const state:appState = {
    name: 'app',
    device:'chrome'
}

const mutations: MutationTree<any> = {}
const actions: ActionTree<any, any> = {}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
} as Module<appState, RootState>