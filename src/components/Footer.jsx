

const Footer = () => {
  return (
    <div>
       <footer>
        <div className="footer-content">
          <div className="div-foot">
            <img src="./images/logo.png" alt="Logo" className=" foot-logo " />
            <p>betaHealthNG@gmail.com</p>
            <div className="social-icons">
              <div className="icon">⚪</div>
              <div className="icon">⚪</div>
              <div className="icon">⚪</div>
            </div>
          </div>

          <div className="about">
            <h3 className='foot-h3'>About</h3>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="socials">
            <h3 className='foot-h3'>Socials</h3>
            <ul>
              <li>Pinterest</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p>&copy; 2024 Company Name. All rights reserved</p>
            <ul>
              <li>Privacy & Policy</li>
              <li>Terms & Condition</li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
