// import { ComponentCustomProperties } from 'vue'
import { Router } from 'vue-router'
import { Store } from 'vuex'
import RootState from './store/index'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store、this.$router`
  interface ComponentCustomProperties {
    $store: Store<RootState>
    $router: Router
  }
}
