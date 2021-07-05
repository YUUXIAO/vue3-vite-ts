import { ActionTree, MutationTree, Module } from 'vuex'
import RootState from '../../interface/store'
import userState from '../../interface/store/modules/user'

const state:userState = {
	isLogin: false,
	userInfo:{
		nickName: 'yabby',
		age: 1
	}
}

const mutations: MutationTree<any> = {}
const actions: ActionTree<any, any> = {}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
} as Module<userState,RootState>