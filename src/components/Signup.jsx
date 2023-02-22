import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
        >
          <Heading color={'purple.500'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Text fontSize={"large"}>It just take few seconds.</Text>
          <Input
            type={'text'}
            placeholder={'Name'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            type={'email'}
            placeholder={'Email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            required
            focusBorderColor="purple.500"
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/login'}>Existing User</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            Already have an account?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};




export default Signup