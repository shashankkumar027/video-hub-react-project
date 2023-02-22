import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Uploads = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <Heading color={'purple.500'} textAlign={'center'}>
        VIDEO HUB
      </Heading>

      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
        <Text color={'gray.500'}>Access your videos and photos on the go</Text>
        <Text color={'gray.500'}> any time anywhere by uploading on our cloud storage.</Text>
      </VStack>
    </Container>
  );
};

export default Uploads;
