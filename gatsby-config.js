module.exports = {
  siteMetadata: {
    title: `Some Starter Gimmick`,
    description: `Working smarter, not harder (probably)`,
    author: `@jccdev45`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
};
