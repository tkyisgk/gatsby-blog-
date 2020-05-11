/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import SeoTypeQuery from '../../types/graphql-types.d'

interface SEOProps {
  title: string,
  description?: string,
  lang?: string,
  meta?: Array<object>,
  image?: string,
  slug?: string,
}

const SEO = (props: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query SEOType {
        site {
          siteMetadata {
            title
            description
            author,
            url,
            image
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description
  const metaUrl = props.slug ? `${site.siteMetadata.url}${props.slug}/` : site.siteMetadata.url

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang
      }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ].concat(props.meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

export default SEO
