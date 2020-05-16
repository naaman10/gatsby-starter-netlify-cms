import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ScrollSpy from '../components/ScrollSpy'
import Committee from '../components/Committee'
import WeWork from '../components/WeWork'


export const AboutPageTemplate = ({
  image,
  title,
  heading,
  description,
  scrollSection,
  main,
  ourCommittee,
  weWork,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-2">
              <ScrollSpy scrollItems={scrollSection} />
            </div>
            <div className="column is-10">
              <WeWork weWorkData={weWork} />
              <Committee committeeData={ourCommittee} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  scrollSection: PropTypes.shape({
    scrollItems: PropTypes.array,
  }),
  main: PropTypes.shape({
    content: PropTypes.array,
}),
  ourCommittee: PropTypes.shape({
    members: PropTypes.array,
  }),
  weWork: PropTypes.shape({
    heading: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        scrollSection={frontmatter.scrollSection}
        main={frontmatter.main}
        ourCommittee={frontmatter.ourCommittee}
        weWork={frontmatter.weWork}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        scrollSection {
          heading
          scrollItems {
            link
            linkText
          }
        }
        main {
          content {
            heading
            description
            link

        }
      }
      ourCommittee {
        heading
        intro
        link
        members {
          name
          role
          bio
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          social {
            Link
            source
          }
        }
      }
      weWork {
        heading
        link
        content
      }
      }
    }
  }
`
