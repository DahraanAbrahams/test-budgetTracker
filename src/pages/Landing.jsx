import  Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import landingMainImage from "../assets/images/bt-landing-image.svg";
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            budget <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={landingMainImage} alt='bank cards' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
