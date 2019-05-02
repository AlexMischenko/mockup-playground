import React from 'react'

const HomePageLayout = () => (
  <section className="home-page">
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
  </section>
)

export default HomePageLayout
