import hero from '../assets/images/hero.svg';
import PortfolioTracker from './../components/PortfolioTracker/PortfolioTracker';
import { HashLink as Link } from 'react-router-hash-link';
import Slider from '../components/Slider/Slider';
import Slider2 from '../components/Slider/Slider2';
import TicTacToe from '../components/TicTacToe/TicTacToe';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import { FaGithubSquare } from 'react-icons/fa';
import githubback from '../assets/images/GitHubPicture.jpg';
import github from '../assets/images/github.svg';
import profile from '../assets/images/SergioProfile.jpg';

function Body() {
  return (
    <>
      <div className='main'>
        <div className='background1'>
          <div className='background1_center'>
            <div className='background1_absolute-right'>
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
            </div>
            <div className='background1_absolute-left'>
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
              <img className='background1_img' src={hero} alt='' />
            </div>
            <div className='title'>
              <div className='profile'>
                <div className='profileA'>
                  <img className='profileImage' src={profile} alt='' />
                </div>
                <div className='profileB'>
                  <h4>Sergio Nieto</h4>
                  <h4>Front-End Developer</h4>
                  <h4>Miami, Fl</h4>
                  <div>
                    <span className='tag'>Javascript</span>
                    <span className='tag'>Typescript</span>
                    <span className='tag'>React</span>
                    <span className='tag'>CSS</span>
                    <span className='tag'>Google Cloud</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className='flex'>Scroll Down to see Projects</h1>
              </div>
              <div className='buttons'>
                <Link to='#project2' smooth>
                  <button className='btn_title'>The Favorite One</button>
                </Link>
                <Link to='#project4' smooth>
                  <button className='btn_title'>The Difficult One</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='background2_center'>
            <div className='projects' id='project1'>
              <div className='projects_title'>
                {' '}
                1- INVESTMENTS TRACKER
                <div className='unique-github'>
                  <a
                    target='_target'
                    href='https://github.com/snieto10/mystocksapp'
                  >
                    <FaGithubSquare color='darkblue' width='20px' />
                  </a>
                </div>
              </div>
              <div className='text'>
                ADD STOCKS AND TRACK YOUR PORTFOLIO <br />
                <span style={{ fontSize: '1.4rem' }}>
                  Applied useState to create a dynamic table. Consumed a restful
                  API to get stocks data. Added sorting and validation to
                  improve user experience.
                </span>
              </div>
              <br></br>
              <PortfolioTracker />
            </div>
            <div className='projects' id='project2'>
              {' '}
              <div className='projects_title'>
                {' '}
                2- SLIDERS{' '}
                <div className='unique-github'>
                  <a
                    target='_target'
                    href='https://github.com/snieto10/sergio/tree/master/src/components/Slider'
                  >
                    <FaGithubSquare color='darkblue' width='20px' />
                  </a>
                </div>
              </div>
              <div className='text'>
                SLIDER 1 - Click to change image <br />
                <span style={{ fontSize: '1.4rem' }}>
                  Created a slider using the CSS opacity property.
                </span>
              </div>
              <Slider />
              <div className='text'>
                SLIDER 2 - Drag to slide images <br />
                <span style={{ fontSize: '1.4rem' }}>
                  Replicated Amazon.com Slider to show products for Tablet or
                  Mobile using React's framer-motion library.
                </span>
              </div>
              <Slider2 />
            </div>
            <div className='projects' id='project3'>
              {' '}
              <div className='projects_title'>
                {' '}
                3- TIC-TAC-TOE
                <div className='unique-github'>
                  <a
                    target='_target'
                    href='https://github.com/snieto10/sergio/tree/master/src/components/TicTacToe'
                  >
                    <FaGithubSquare color='darkblue' width='20px' />
                  </a>
                </div>
              </div>
              <div className='text'>
                PLAY TIC-TAC-TOE AGAINST THE PC <br />
                <span style={{ fontSize: '1.4rem' }}>
                  Created the game using Javascript. If you win, the computer
                  will have an extra turn to tie the game !
                </span>
              </div>
              <br></br>
              <TicTacToe />
            </div>
            <div className='projects' id='project4'>
              {' '}
              <div className='projects_title'>
                {' '}
                4- E-COMMERCE SITE{' '}
                <div className='unique-github'>
                  <a
                    target='_target'
                    href='https://github.com/snieto10/asos-clothing'
                  >
                    <FaGithubSquare color='darkblue' width='20px' />
                  </a>
                </div>
              </div>
              <div className='text'>
                CLOTHING STORE <br />
                <span style={{ fontSize: '1.4rem' }}>
                  Created an online clothing store using React. Added user
                  registration and login capabilities. Utilized useContext and
                  useReducer as state management for the shopping cart contents.
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ShoppingCart />
              </div>
            </div>
            <div className='projects' id='project5'>
              {' '}
              <div className='projects_title'> OTHER PROJECTS</div>
              <div className='other-box'>
                <div className='other-box-project1'>
                  <div className='other-box-image1'>
                    <a
                      target='_target'
                      href='https://master.d2euoc27g9tw3x.amplifyapp.com/'
                    >
                      <img className='other-image' src={githubback} alt='' />
                    </a>
                  </div>
                  <div className='other-text'>
                    <h3>GITHUB FINDER</h3>
                    <h3 style={{ lineHeight: '15px' }}>
                      Used useContext to avoid prop-drilling and axios to
                      request the data
                    </h3>
                    <p className='other-view'>
                      <a
                        target='_target'
                        href='https://github.com/snieto10/github'
                      >
                        view code
                      </a>
                    </p>
                  </div>
                </div>

                <div className='other-box-project1'>
                  <a
                    target='_target'
                    href='https://master.d1jd9xk9avy6fj.amplifyapp.com/'
                  >
                    <div className='other-box-image2'>
                      <h3 className='feedbackui-text'>Feedback UI</h3>
                    </div>
                  </a>
                  <div className='other-text'>
                    <h3>FEEDBACK UI</h3>
                    <h3 style={{ lineHeight: '15px' }}>
                      Used useState and useEffect to add, delete and edit your
                      feedback !
                    </h3>
                    <p className='other-view'>
                      <a
                        target='_target'
                        href='https://github.com/snieto10/sdfeedbackui'
                      >
                        view code
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
