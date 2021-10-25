import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NewsBody = ({ data }) =>
{
  console.log("==============================================")
  console.log("DATA %o", {data})
  console.log("==============================================")
    return(
        <Layout pageTitle={data.strapiNotes.title}>
          <GatsbyImage image={getImage(data.strapiNotes.pictureNews.localFile)} alt="there is no image"/>

          <p>{data.strapiNotes.bodyNews}</p>
        </Layout>
    )
}

export const query = graphql`
query($strapiId: Int){
strapiNotes(preview: {id: {eq: $strapiId}}) {
    pictureNews {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    title
    bodyNews
  }
}
  `
export default NewsBody