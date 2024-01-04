import React from 'react';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import Container from '../../components/Container/Container';

const Home = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Description />
      </Container>
    </main>
  );
};

export default Home;
