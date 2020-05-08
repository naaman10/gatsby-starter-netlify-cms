import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import FeatureCards from '../components/FeatureCards'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  logo,
  heading,
  subheading,
  description,
  intro,
  features,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundColor: `#FDFFF7`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
      <img
        src={logo.image.childImageSharp.fluid.src}
        className="homeLogo"
        alt={logo.alt}
      />
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          boxShadow:
            'rgba(252, 72, 104,1) -0.5rem 0px 0px',
          marginTop: '30px',
          color: '#1B1B1B',
          lineHeight: '1',
          padding: '0.25em',
        }}
      >
        {subheading}
      </h3>
      <h3><span class="tag is-light">{features.heading}</span></h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <FeatureCards featureItems={features.featureItems} />
              </div>
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>

                <Features gridItems={intro.blurbs} />
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  features: PropTypes.shape({
    features: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        logo={frontmatter.logo}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        features={frontmatter.features}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
  markdownRemark(frontmatter : {
    templateKey: {
      eq: "index-page"
    }
  }) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth : 2048, quality : 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo {
        alt
        image {
          childImageSharp {
            fluid(maxWidth : 400, quality : 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      heading
      subheading
      description
      intro {
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth : 240, quality : 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        heading
        description
      }
      features {
        featureItems {
          image {
            childImageSharp {
              fluid(maxWidth : 60, quality : 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
          link
          linkText
        }
        heading
      }
    }
  }
}
`
