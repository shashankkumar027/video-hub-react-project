import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxWidth={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'wide'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
            inventore ab eius nobis suscipit sapiente veniam placeat dolorum
            ipsum rerum doloremque eaque sint delectus? Non eos at eius voluptas
            dolores ea architecto esse! Obcaecati, tenetur! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vitae eveniet sed atque
            quidem minima quam in architecto accusantium ea modi cum ab, culpa,
            amet commodi! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ab modi iusto provident, quis dolore et soluta ullam dicta hic
            voluptate quasi sit suscipit quam deleniti nihil cumque, fugit ea?
            At corporis dignissimos iusto a porro?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'} display={'flex'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading
        bgColor={'white.600'}
        color={'purple.500'}
        {...headingOptions} top={'16'}
        borderBottom={'1px solid black'}
        fontStyle={'italic'}
      >
        VIDEO HUB
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Don't just Play be the Part of It
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Change the Way to Play
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Move Inside The Screen
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
