import React from 'react'

const SideDrawer = () => (
  <div className="side-drawer-ovelay">
    <div className="side-drawer">
      <div className="side-drawer-close-btn">
        <a className="menu-close-btn" href="#" onClick={() => alert('Close SideDrawer')}>
          <i className="material-icons md-30">close</i>
        </a>
      </div>
      <div className="side-drawer-content">
        <div className="side-drawer-header">
          <h4>Hello,</h4>
          <div className="side-drawer-message">
            Vesibulum commodo volutpat a, convallis ac, laoreet encodeURIComponent. Phasallus fermentum in, dolor.
            <br />
            <br />
            Pellentesque facillisis. Nullaimperdient sit amet magna.
          </div>
          <div className="side-drawer-social">
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
        </div>

        <div className="side-drawer-menu">
          <ui>
            <li className="side-drawer-menu-item">Home</li>
            <li className="side-drawer-menu-item">Posts</li>
            <li className="side-drawer-menu-item">Gallery</li>
            <li className="side-drawer-menu-item">Contact</li>
          </ui>
        </div>
      </div>
    </div>
  </div>
)

export default SideDrawer
