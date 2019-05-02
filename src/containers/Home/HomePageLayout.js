import React from 'react'
import PropTypes from 'prop-types'

const HomePageLayout = ({ posts }) => (
  <main className="home-page">
    <header className="home-page-header">
      <div className="social-media">
        <a className="social-link" href="https://www.google.com">
          <i className="fab fa-ravelry" />
        </a>
        <a className="social-link" href="https://www.linkedin.com/">
          <i class="fab fa-linkedin-in" />
        </a>
        <a className="social-link" href="https://www.instagram.com">
          <i class="fab fa-instagram" />
        </a>
        <a className="social-link" href="https://twitter.com">
          <i class="fab fa-twitter" />
        </a>
      </div>
      <h1>Constellation</h1>
      <h5>If I vreate from the heart, nearly everything works; if from the head, almost nothing</h5>
    </header>
    <section className="home-page-posts-block">
      {posts.map(post => (
        <article className="home-page-post">
          <div />
        </article>
      ))}
    </section>
  </main>
)

HomePageLayout.defaultProps = {
  posts: [],
}

HomePageLayout.propTypes = {
  posts: PropTypes.array,
}

export default HomePageLayout
