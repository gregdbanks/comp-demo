import styled from 'styled-components';
import '../../App.css';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const TitleLink = styled.a`
  text-decoration: none;
`;

const HoverEffect = styled.span`
  position: absolute;
  bottom: -5px;
  left: -10%;
  width: 120%;
  height: 2px;
  background-color: #333;
  transform: scaleX(0);
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
`;

const HoverLink = styled(TitleLink)`
  &:hover {
    color: #666; /* Optional: change the link color on hover */
  }
  
  &:hover ${HoverEffect} {
    transform: scaleX(1);
  }
`;


const HomePage = () => {
  return (
    <Wrapper>
      <HoverLink href="https://www.npmjs.com/package/greg-lib-1">
        <Title>greg-lib-1</Title>
        <HoverEffect />
      </HoverLink>
      <Text>
        Introducing the one-of-a-kind component library, conjured up by a design enthusiast who doesn't take themselves too seriously but pours their heart into design. This developer may have graduated from YouTube University, but their talent speaks for itself. This user-friendly library is so intuitive that even your dog could create a website with it (opposable thumbs sold separately). Get ready to enjoy design like never before while learning a thing or two along the way.

        Crafted to provide responsive components, this library is neutral on color, font, size, and style, offering a blank canvas for your wildest creative dreams. With no reliance on 3rd party libraries, minimal parameters and options, and a clean, minimalistic design, this library is all about ease of use and customization. TypeScript and Storybook are thrown into the mix to ensure top-notch quality assurance.

        This versatile library can be adapted into your very own custom component collection. Created by a solo developer with a penchant for quality, the components may be simple, but they're designed to cater to your unique needs. Say goodbye to the struggles of 3rd party libs that try to fit every use case, and embrace the simplicity and elegance of our composable offering.

        Step into our sandbox and unleash your inner designer, because with this library, the possibilities are endless. Get ready to make your mark on the web, one component at a time.
      </Text>
    </Wrapper>
  );
};

export default HomePage;
