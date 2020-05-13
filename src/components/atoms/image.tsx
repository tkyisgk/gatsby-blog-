import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

type ImageProps = {
  fileName?: string // ローカル画像の場合ファイル名を指定
  publicURL?: string // CMS画像の場合publicURLを指定
  alt?: string
}

// 画像ファイルパスをプロパティに取るようなコンポーネントを定義
const Image: React.FC<ImageProps> = ({ fileName = null, publicURL = null, alt = '' }) => (

  // ページじゃないコンポーネントでもGraphQLが使えるように
  // StaticQueryタグを使う
  <StaticQuery

    // GraphQLのクエリ引数には何も指定しない！
    query={graphql`
      query AllImageType {
        images: allFile {
          edges {
            node {
              publicURL
              base
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={({ images }) => {

      let image

      if (!fileName && !publicURL) return

      // ローカル画像の場合（ファイル名指定の場合）
      if (fileName) {
        image = images.edges.find(n => {
          return fileName === n.node.base
        })
      }
      
      // CMS画像の場合（localFile指定の場合）
      if (publicURL) {
        image = images.edges.find(n => {
          return publicURL === n.node.publicURL
        })
      }

      if (!image) return

      const imageSizes = image.node.childImageSharp.sizes
      return <Img sizes={imageSizes} alt={alt} />
    }}
  />
)

export default Image