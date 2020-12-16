module.exports = {
  siteMetadata: {
    title: `DesignCode `,
    description: `Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `@SoniaSim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
