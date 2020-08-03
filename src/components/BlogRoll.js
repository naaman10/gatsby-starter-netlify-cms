import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="row">
        {posts &&
          posts.map(({ node: post }) => (
            <div className={` ${
              post.frontmatter.featuredpost ? 'col-md-12' : 'col-md-4'
            } mb-3`} key={post.id}>

              <div className={`card ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="card-img-top">
                  {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `${post.frontmatter.title}`,
                        }}
                        className="img-fluid"
                      />

                  ) : null}

                </div>
                <div className="card-body">
                  <p className="card-title">{post.frontmatter.title}</p>
                  <p><span className="is-size-7 is-block">{post.frontmatter.date}</span></p>
                  <p className="card-text">{post.excerpt}</p>
                  <Link className="btn btn-primary" to={post.fields.slug}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
