module.exports = {
  siteTitle: 'Ray2019', // <title>
  manifestName: 'directive',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-directive/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'RESCUE ACTON BY YOUTH',
  subHeading: '青年體檢政府網站計畫',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/onlyanubhav',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/theanubhav',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:anubhav.srivastava00@gmail.com',
    },
  ],
  projects: [
    {
      id: 1,
      name: "個人健保資料網路服務作業",
      issuu: "https://e.issuu.com/embed.html?d=20191018-3&pageLayout=singlePage&u=pdis.tw",
      current: "https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx",
      prototype: "https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx",
    },
    {
      id: 2,
      name: "勞保個人網路申報及查詢作業",
      issuu: "https://e.issuu.com/embed.html?d=20191018-3&pageLayout=singlePage&u=pdis.tw",
      current: "https://edesk.bli.gov.tw/na/",
      prototype: "https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx",
    },
  ],
};
