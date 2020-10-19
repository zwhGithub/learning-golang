module.exports = {
  theme:"",
  title: "Golang入门教程",
  description: "Welcome to Study Golang site",
  base: "/",
  head: [
    ["link",{ 
      rel: "icon",
      href: "https://app-cdn.btclass.cn/hunter/wxcb6a343940be8bf5/1602987096631--Golang.png" 
      // href: "https://app-cdn.btclass.cn/hunter/wxcb6a343940be8bf5/1602987225449--golang%20(1).png"
    }
  ]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
};