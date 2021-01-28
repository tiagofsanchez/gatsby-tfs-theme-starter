module.exports = {
  siteMetadata: {
    siteTitle: `tiagofsanchez`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-tfs-theme-starter`,
    siteHeadline: `Simple Blog - Gatsby Starter from tiagofsanchez`,
    siteUrl: `https://www.tiagofsanchez.com/`,
    siteDescription: `A feature reach starter build on top of gatsby-theme-tfs`,
    siteLanguage: `en`,
    siteImage: `./images/logo.png`,
    author: `tiagofsanchez`,
    navigation: [
      {
        title: `Me`,
        slug: `/about`,
      },
      {
        title: `Articles`,
        slug: `/blog`,
      },
    ],
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: "gatsby-theme-tfs",
      options: {
        githubUrl: "https://github.com/tiagofsanchez/tiagofsanchez/blob/master/", 
      },
    },
  ],
};
