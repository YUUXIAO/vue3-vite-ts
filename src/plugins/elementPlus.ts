/*
 * @Description: 注册全局Element-plus
 */
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export function setupElement(app: App<Element>) {
  app.use(ElementPlus, { locale })
}
