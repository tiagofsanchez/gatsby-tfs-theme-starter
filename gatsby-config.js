module.exports = {
  siteMetadata: {
    siteTitle: `tiagofsanchez`,
    siteTitleAlt: `Simple Blog - @tiagofsanchez/gatsby-theme-acmeblog`,
    siteHeadline: `Simple Blog - Gatsby Theme from tiagofsanchez`,
    siteUrl: `https://www.tiagofsanchez.com/`,
    siteDescription: ` Learning tech, writing about it and putting ✒️'pen to paper' on stuff that I like to do and think about!`,
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
