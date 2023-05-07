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
        Introducing the latest component library built by a developer who may
        not take themselves too seriously, but takes design seriously enough to
        create something awesome. They might have gotten their design degree
        from YouTube University, but hey, at least they got it! This library is
        so easy to use, even your dog could build a website with it (if they had
        opposable thumbs). So get ready to have some fun with design, and maybe
        learn a thing or two along the way.
      </Text>
    </Wrapper>
  );
};

export default HomePage;
