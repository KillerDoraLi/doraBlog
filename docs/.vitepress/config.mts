import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "Dora Blog",
  description: "哆啦技术输出初体验",
  base: '/doraBlog/',
  lastUpdated: true,
  // 主题级选项
  themeConfig: {
    logo: '/public/logo/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'JavaScript',
        collapsed: true,
        items: [
          { text: '原型/原型链', link: '/Javascript/prototype' },
          { text: '词法作用域和动态作用域', link: '/Javascript/scope' },
          { text: '执行上下文栈', link: '/Javascript/context' },
          { text: '变量对象', link: '/Javascript/variable_object' },
        ]
      },
      {
        text: 'ES6',
        collapsed: true,
        items: [
          { text: 'let 和 const', link: '/ES6/let_const' },
          // { text: '模版字符串', link: '/ES6/template_strings' },
          { text: '箭头函数', link: '/ES6/arrow_function' },
          { text: '字符串', link: '/ES6/string' },
        ]
      },
      {
        text: 'Git',
        collapsed: true,
        items: [
          { text: '关于变更', link: '/Git/git_change' },
        ]
      },
      {
        text: 'TypeScript',
        collapsed: true,
        // items: [
        //   { text: '基础类型', link: '/TypeScript/basic_types' },
        //   { text: '高级类型', link: '/TypeScript/advanced_types' },
        // ]
      },
      {
        text: 'Vue3',
        collapsed: true,
        items: [
          { text: 'index', link: '/Vue3/index' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KillerDoraLi' }
    ]
  }
})
