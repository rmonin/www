/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Romain Monin's Personal Website",
    author: {
        name: `Romain Monin`,
      },
      description: `My Personal Website`,
      siteUrl: `https://romain-monin.fr/`,
  },
  plugins: [],
}

export default config
