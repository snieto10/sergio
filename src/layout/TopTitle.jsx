import github from '../assets/images/github.svg';
import linkedIn from '../assets/images/linkedin.svg';
import sergio from '../assets/images/sergioLogo.png';

function TopTitle() {
  return (
    <>
      <div className='flex flex-spaceBetween max-width'>
        <div className='flex flex-logo'>
          <img className='sergio' src={sergio} alt='' />
        </div>
        <div className='flex programming-lenguages opacity7 letter-space'>
          <h3>JAVASCRIPT</h3>
          <h3>REACT</h3>
          <h3>HTML</h3>
          <h3>CSS </h3>
          <h3>GITHUB </h3>
        </div>
        <div className='flex'>
          <div className='flex flex-icon'>
            <a
              target='_target'
              href='https://www.linkedin.com/in/sergio-nieto-ba5aab50/'
            >
              <img className='fronticons' src={linkedIn} alt='linkedinlogo' />
            </a>
          </div>
          <div className='flex flex-icon'>
            <a target='_target' href='https://github.com/snieto10'>
              <img className='fronticons' src={github} alt='githublogo' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTitle;
