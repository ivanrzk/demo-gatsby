import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage  } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => 
{
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="Darth Vader"
        src="../images/vader.jpg"
      />
    </Layout>
  )
}
export const query = graphql`
query{
  strapiImages {
    pics {
      url
    }
  }
}
`

export default IndexPage;