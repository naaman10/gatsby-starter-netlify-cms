import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ScrollSpy from '../components/ScrollSpy'
import Committee from '../components/Committee'
import CommitteeModal from '../components/CommitteeModal'
import WeWork from '../components/WeWork'
import Testimonial from '../components/Testimonial'



export const AboutPageTemplate = ({
  image,
  title,
  heading,
  description,
  scrollSection,
  main,
  ourCommittee,
  weWork,
  testimonialSection,
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
        className="font-weight-bold display-4"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ScrollSpy scrollItems={scrollSection} />
          </div>
          <div className="col-md-10">
            <WeWork weWorkData={weWork} />
            <Committee committeeData={ourCommittee} />
            <CommitteeModal committeeModalData={ourCommittee} />
            <Testimonial testiData={testimonialSection} />
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
    scrollItemsList: PropTypes.array,
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
  testimonialSection: PropTypes.shape({
    heading: PropTypes.string,
    intro: PropTypes.string,
    link: PropTypes.string,
    testimonials: PropTypes.array,
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
        testimonialSection={frontmatter.testimonialSection}
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
  markdownRemark(id: {
    eq: $id
  }) {
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
        scrollItemsList {
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
          id
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
      testimonialSection {
        heading
        intro
        link
        testimonials {
          quote
          source
          school
        }
      }
    }
  }
}
`
