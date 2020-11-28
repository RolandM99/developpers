import React, { Component } from "react";
import { IconContext } from "react-icons";
import { CgFacebook } from "react-icons/cg";
import { TiSocialInstagram } from "react-icons/ti";
import { ImLinkedin2 } from "react-icons/im";
import { FaDiscord, FaPhoneAlt, FaHome } from "react-icons/fa";
import { AiTwotoneLike, AiTwotoneStar,AiOutlineMenuFold } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
class header extends Component {
  state = {};
  componentDidMount() {
    
  }
  
  changeHeader = ()=>{
  }
  render() {
    const {onToggleSideNav,sideNavOpened, onCloseSideNav} = this.props
    return (
      <>
      {sideNavOpened && <div className="side-nav-overlay" onClick={onCloseSideNav}></div>}
      <div className="header-main-container" id="navigation">
          
        <div className="header-links-wrapper"  >
          <div className="links">
            <div className="social-media">
              <IconContext.Provider value={{ className: "header-icon" }}>
                <CgFacebook />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "header-icon" }}>
                <TiSocialInstagram />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "header-icon" }}>
                <ImLinkedin2 />
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "header-icon" }}>
                <FaDiscord />
              </IconContext.Provider>
            </div>
            <div className="facebook-likes-btn">
              <div className="likes-btn">
                <IconContext.Provider
                  value={{ className: "facebook-likes-icon" }}
                >
                  <AiTwotoneLike />
                </IconContext.Provider>
                <span> Likes</span>
                <span className="likes">500</span>
              </div>
            </div>
            <div className="rating-stars-container">
              <span>5.0</span>
              <div className="start-container">
                <IconContext.Provider value={{ className: "star-icon" }}>
                  <AiTwotoneStar />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "star-icon" }}>
                  <AiTwotoneStar />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "star-icon" }}>
                  <AiTwotoneStar />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "star-icon" }}>
                  <AiTwotoneStar />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: "star-icon" }}>
                  <AiTwotoneStar />
                </IconContext.Provider>
              </div>
              <span className="google-rating">13 avis Google</span>
            </div>
          </div>
          <div className="contacts">
            <div className="contact-number">
              <IconContext.Provider
                value={{ className: "header-icon phone-icon" }}
              >
                <FaPhoneAlt />
              </IconContext.Provider>
              <span>(+250)780 083 122</span>
            </div>
            <div className="email-address-wrapper">
              <IconContext.Provider
                value={{ className: "header-icon email-icon" }}
              >
                <MdEmail />
              </IconContext.Provider>
              <span>barackmukelenga100@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="header-main-links-wrapper">
          <div className="logo-container">
          <svg class="squarespace-full is-fill notranslate" xmlns="http://www.w3.org/2000/svg" width="166px" height="24px" viewBox="0 0 500 72">
  <title>Squarespace Logo</title>
  <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path>
  <path d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45 67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"></path>
  <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
  <path d="M114.7 43.47a6.71 6.71 0 0 0 2.55 4.2 8.56 8.56 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0 0 0-2.08-1l-2.78-.84-2.65-.72a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85 9.33 9.33 0 0 1-.7-3.75 9.45 9.45 0 0 1 .9-4.12 9 9 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.73 2.6a10.27 10.27 0 0 1 3.78 7l-6 .49a6 6 0 0 0-2.18-3.47 7.43 7.43 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.54 3.25 3.7 3.7 0 0 0 .45 1.91 4.1 4.1 0 0 0 1.29 1.34 9.2 9.2 0 0 0 2.06 1c.81.3 1.73.62 2.75.95l2.54.79q2.37.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0 1 .72 3.92 10.31 10.31 0 0 1-1 4.54 10 10 0 0 1-2.78 3.5 13.13 13.13 0 0 1-4.25 2.24 17.54 17.54 0 0 1-5.43.79 15.57 15.57 0 0 1-9.18-2.58 11.21 11.21 0 0 1-4.57-7.85zM161.15 17.37a19.2 19.2 0 0 1 7.35 1.36 16.09 16.09 0 0 1 5.65 3.82 17.25 17.25 0 0 1 3.63 5.88 21.17 21.17 0 0 1 1.29 7.5 20.32 20.32 0 0 1-1.37 7.62 17.21 17.21 0 0 1-3.89 5.88l4.76 5.57v1.73h-6l-3.33-4.07a19.13 19.13 0 0 1-3.77 1.34 19.92 19.92 0 0 1-4.27.44 19.24 19.24 0 0 1-7.42-1.44 16 16 0 0 1-5.61-3.83 17 17 0 0 1-3.57-5.85 21.21 21.21 0 0 1-1.27-7.42 21.37 21.37 0 0 1 1.27-7.47 16.89 16.89 0 0 1 3.6-5.86 16.28 16.28 0 0 1 5.63-3.84 18.62 18.62 0 0 1 7.32-1.36zm-.05 5.36a11.15 11.15 0 0 0-4.79 1 10.16 10.16 0 0 0-3.57 2.75 12.33 12.33 0 0 0-2.24 4.16 17.11 17.11 0 0 0-.76 5.22 16.81 16.81 0 0 0 .79 5.26 12.89 12.89 0 0 0 2.26 4.21 10.32 10.32 0 0 0 3.57 2.8 11 11 0 0 0 4.79 1 11.44 11.44 0 0 0 4.79-1 10.09 10.09 0 0 0 3.57-2.71 12.16 12.16 0 0 0 2.26-4.18 17.4 17.4 0 0 0 .8-5.38 17 17 0 0 0-.8-5.3 12.35 12.35 0 0 0-2.26-4.16 10.33 10.33 0 0 0-3.59-2.72 11.35 11.35 0 0 0-4.82-.95zM202.64 49.38a7.63 7.63 0 0 0 6-2.36q2.13-2.35 2.13-7.22V18.06H217V40a19.58 19.58 0 0 1-1 6.62 11.45 11.45 0 0 1-2.83 4.52 11 11 0 0 1-4.51 2.58 22.51 22.51 0 0 1-12 0 10.93 10.93 0 0 1-4.49-2.58 11.56 11.56 0 0 1-2.83-4.52 19.6 19.6 0 0 1-1-6.62V18.06h6.25V39.8q0 4.86 2.14 7.22a7.61 7.61 0 0 0 5.91 2.36zM223.24 52l12.65-33.9h9.38L257.78 52v1.7h-6.15l-3.58-10.18h-15.43L229 53.7h-5.8zm11.26-13.8h11.77l-1.94-5.66c-.76-2.21-1.37-4-1.84-5.41s-.87-2.61-1.24-3.67h-1.53l-.6 1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82 2.39-.66 1.93-1.09 3.12zM292.72 53.7h-6l-10.87-14h-4v14h-6.16V18.06h11.57a35.57 35.57 0 0 1 5.18.37 10.7 10.7 0 0 1 4.45 1.72q4.22 2.78 4.22 8.38a11.4 11.4 0 0 1-.73 4.24 9.46 9.46 0 0 1-1.91 3.08 10 10 0 0 1-2.75 2.06 14.26 14.26 0 0 1-3.25 1.19L292.72 52zm-20.89-19.36h5.41a10.45 10.45 0 0 0 5.63-1.3 4.67 4.67 0 0 0 2.06-4.26 4.38 4.38 0 0 0-2.09-4.18 11.4 11.4 0 0 0-5.6-1.18h-5.41zM300.66 18.06h23.08v5.46h-17v9.33h15.78v5.36h-15.75v10h17.32v5.49h-23.43zM337.89 43.47a6.71 6.71 0 0 0 2.55 4.2 8.58 8.58 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0 0 0-2.08-1l-2.78-.84-2.68-.74a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85 10.12 10.12 0 0 1 .2-7.87 9.11 9.11 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.74 2.6a10.26 10.26 0 0 1 3.77 7l-6 .49a6 6 0 0 0-2.16-3.47 7.41 7.41 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.53 3.25 3.7 3.7 0 0 0 .44 1.91 4.1 4.1 0 0 0 1.29 1.34 9.2 9.2 0 0 0 2.06 1c.81.3 1.73.62 2.76.95l2.53.79q2.38.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0 1 .72 3.92 10.31 10.31 0 0 1-1 4.54 9.89 9.89 0 0 1-2.78 3.5A13.18 13.18 0 0 1 351 53.6a17.61 17.61 0 0 1-5.44.79 15.59 15.59 0 0 1-9.18-2.58 11.21 11.21 0 0 1-4.55-7.81zM367.91 18.06h13a18.72 18.72 0 0 1 6.08.85 10.22 10.22 0 0 1 4 2.33 8.6 8.6 0 0 1 2.18 3.5 13.52 13.52 0 0 1 .67 4.34 11.68 11.68 0 0 1-.92 4.84 8.71 8.71 0 0 1-2.65 3.4 12.07 12.07 0 0 1-4.22 2 21.42 21.42 0 0 1-5.61.67h-6.3V53.7h-6.21zm6.21 16.58h5.95a15.52 15.52 0 0 0 3-.27 7.11 7.11 0 0 0 2.38-.91 4.46 4.46 0 0 0 1.59-1.72 5.68 5.68 0 0 0 .57-2.66 5.93 5.93 0 0 0-.57-2.73 4.44 4.44 0 0 0-1.57-1.75 6.79 6.79 0 0 0-2.35-.91 15.29 15.29 0 0 0-3-.27h-6.05zM395.56 52l12.66-33.9h9.38L430.1 52v1.7H424l-3.57-10.18h-15.49l-3.57 10.18h-5.81zm11.27-13.8h11.76l-1.94-5.66c-.76-2.21-1.37-4-1.83-5.41l-1.24-3.67H412l-.6 1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82 2.39-.66 1.93-1.09 3.12zM467.92 44.27a17.81 17.81 0 0 1-2.2 3.92 14.89 14.89 0 0 1-3.31 3.22 15.63 15.63 0 0 1-4.49 2.18 19.06 19.06 0 0 1-5.68.8A18.12 18.12 0 0 1 445 53a16.19 16.19 0 0 1-5.55-3.84 17.08 17.08 0 0 1-3.55-5.86 21.28 21.28 0 0 1-1.25-7.37 21.23 21.23 0 0 1 1.25-7.37 17 17 0 0 1 3.57-5.88 16.52 16.52 0 0 1 5.58-3.9 18.06 18.06 0 0 1 7.27-1.41 16.82 16.82 0 0 1 9.8 2.73 14.75 14.75 0 0 1 5.59 7.24l-6.31 1.24a10.41 10.41 0 0 0-3.6-4.29 9.74 9.74 0 0 0-5.58-1.56 10.43 10.43 0 0 0-4.69 1 10.15 10.15 0 0 0-3.47 2.79 12.43 12.43 0 0 0-2.16 4.21 17.41 17.41 0 0 0-.75 5.19 17.1 17.1 0 0 0 .77 5.22 12.36 12.36 0 0 0 2.23 4.15 10.37 10.37 0 0 0 3.57 2.71 11 11 0 0 0 4.77 1 9.3 9.3 0 0 0 5.73-1.69 11.64 11.64 0 0 0 3.5-4.12zM476.31 18.06h23.08v5.46h-17v9.33h15.81v5.36h-15.78v10h17.32v5.49h-23.43z"></path>
</svg>
          </div>
          <div className="main-links-container">
            <ul>
              <li>
                <a href="#">
                  <IconContext.Provider value={{ className: "home-icon" }}>
                    <FaHome />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Competence</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Tariffs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="menu-humberger">
              <div className="humberger-round" onClick={onToggleSideNav}>
                <IconContext.Provider
                  value={{ className: "menu-humberger-icon" }}
                >
                  <AiOutlineMenuFold />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default header;
