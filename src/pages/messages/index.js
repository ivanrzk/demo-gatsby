import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const MessagePage = ({ data }) => 
{
    return(
        <Layout pageTitle="Messages">
            {data.allStrapiMessages.nodes.map(node => (<p>{node.message}</p>))}
        </Layout>
    )
}

export const query = graphql`
  query {
    allStrapiMessages {
        nodes {
          message
        }
      }
  }
`

export default MessagePage