import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const imagesPage = ({ data }) => 
{
    return(
        <Layout pageTitle="Images">
            {data.allStrapiPictures.nodes.map(pics => <GatsbyImage image={getImage(pics.pictures.localFile)} fixed={pics.pictures.localFile.childImageSharp.fixed} />) }
        </Layout>
    )
}


export const query = graphql`
query {
    allStrapiPictures {
        nodes {
          pictures {
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
        }
      }
}`


export default imagesPage