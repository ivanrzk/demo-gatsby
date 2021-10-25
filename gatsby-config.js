module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby DarkSite",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://strapidemo.azurewebsites.net/",
        collectionTypes: [
          "messages",
          "images",
          "pictures",
          "previews",
          "notes"
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
