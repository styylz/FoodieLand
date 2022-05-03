import { FlexWrapper, Container, SectionWrapper, Typography, Box, Image, Input, BlackButton } from 'components';
import React from 'react'
import { useQuery } from '../../../styles/breakpoints';

const Subscribe = () => {
  const {isTablet} = useQuery()
  return (
    <SectionWrapper>
        <Container>
            <FlexWrapper
              borderRadius="r60"
              backgroundColor="accent"
              flexDirection="column"
              position="relative"
              padding={{ lmobile: '2rem 2rem', desktop: "5rem 21.56rem"}}

            >
            <Box
              position="absolute"
              bottom="-0.3rem"
              left="0"
            >
              <Image src="flyingSalad" alt="flyingSalad" borderRadius="3.75rem" />
            </Box>
            <Box
              marginBottom="s24"
            >
              <Typography
                 type='h2'
                 textAlign="center"
                >
                Deliciousness to your inbox
              </Typography>
            </Box>
            <Box
              marginBottom="s48"
              zIndex={1}
            >
              <Typography
                 type='body16'
                 textAlign="center"
                >
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqut enim ad minim
              </Typography>
            </Box>
            <Box
              position="absolute"
              right="16rem"
              bottom="1rem"
            >
              <Image src="rucola" alt="rucola"  />
            </Box>
            <Box
              position="absolute"
              bottom="-0.3rem"
              right="0"
            >
              <Image src="plate" alt="plate" borderRadius="3.75rem" />
            </Box>
              <Box
                position="relative"
                margin="auto"
              >
              {isTablet ?
                <FlexWrapper flexDirection='column' alignItems='center'>
                    <Input  placeholder='Your email address...' />
                    <Box marginTop='s16'>
                        <BlackButton >Subscribe</BlackButton>
                    </Box>
                </FlexWrapper>
                : <Box position='relative' >
                    <Input  placeholder='Your email address...' />
                    <Box position='absolute' top='0.5rem' right='0.5rem'>
                        <BlackButton >Subscribe</BlackButton>
                    </Box>
                </Box>
                }
              </Box>
            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

export default Subscribe