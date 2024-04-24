import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点级选项
  title: "Dora Blog",
  description: "哆啦技术输出初体验",
  base: '/doraBlog/',
  // 主题级选项
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'ES6',
        items: [
          { text: 'let 和 const', link: '/ES6/let_const' },
          { text: '模版字符串', link: '/ES6/template_strings' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KillerDoraLi' }
    ]
  }
})
