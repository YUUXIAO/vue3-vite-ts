import appState from './modules/app'
import userState from './modules/user'

export default interface RootState {
   app: appState,
   user: userState
}