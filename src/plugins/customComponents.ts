/*
 * @Description: 注册全局自定义组件
 */

import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'

const getModules = () => {
  var a = '1'
  console.log(a)

  return import.meta.glob('../components/Base/*.vue')
}

export const asyncComponent = function (app: App<Element>): void {
  const modules = getModules()
  console.log(modules)
  Object.keys(modules).forEach((key: string) => {
    const AsyncComponent = defineAsyncComponent(modules[key])
    const componentName = key
    // const componentName = upperFirst(
    //   camelCase(key.replace(/^\..\/components\/common\/(.*)\.\w+$/, '$1'))
    // );
    app.component(componentName, AsyncComponent)
  })
}
