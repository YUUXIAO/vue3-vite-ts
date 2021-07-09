/*
 * @Description: 注册全局自定义组件
 */

import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const getModules = () => {
  return import.meta.glob('../components/base/*.vue')
}

export const asyncComponent = function (app: App<Element>): void {
  const modules = getModules()
  Object.keys(modules).forEach((key: string) => {
    const AsyncComponent = defineAsyncComponent(modules[key])
    const componentName = upperFirst(
      camelCase(key.replace(/^\..\/components\/base\/(.*)\.\w+$/, '$1')),
    )
    app.component(componentName, AsyncComponent)
  })
}
