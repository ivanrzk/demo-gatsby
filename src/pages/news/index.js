import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const newsPage = ({ data }) =>
{
    return(
        <Layout pageTitle="News">
            {data.allStrapiPreviews.nodes.map(prev =>
            <div key={prev.id} className="row">
              <div className="block">
                <Link to={`/news/${prev.strapiId}`}>
                <GatsbyImage image={getImage(prev.picture_preview?.localFile)}/>
                <p>{prev.resume_preview}</p>
                </Link>
                </div>
            </div>
            )}
        </Layout>
    )
}

export const query = graphql`
query {
    allStrapiPreviews {
        nodes {
          picture_preview {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  height: 200
                  placeholder: BLURRED
                )
              }
            }
          }
          strapiId
          resume_preview
        }
      }
    }
`

export default newsPage