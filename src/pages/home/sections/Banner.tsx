import { Badge, Box, Container, FlexWrapper, Image, SectionWrapper, Typography } from 'components';
import { BlackButton } from 'components/buttons/BlackButton';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

const Banner:React.FC = () => {
  return (
    <SectionWrapper>
        <Container>
          <FlexWrapper
            backgroundColor = "accent"
            style={{borderRadius: '0 5rem 5rem 0'}}
            flexDirection={{lmobile: 'column', desktop:'row'}}
           >
          <FlexWrapper
             paddingX="s48"
             paddingY="s48"
            >
                <FlexWrapper
                    flexDirection="column"
                    justifyContent="space-between"
                >
                     <Badge
                       src='paper'
                       alt="paper-logo"
                       title="Hot Recipes"
                       backgroundColor="white"
                       padding="0.4rem 1rem"
                       width="10rem"
                       marginBottom='2rem'
                      />
                    <Typography
                      type="h1"
                    >
                        Spicy delicious chicken wings
                    </Typography>
                    <Box
                      maxWidth="32.5rem"
                    >
                    <Typography
                      type='body16'

                    >
                       Lorem ipsum dolor sit amet, consectetuipisicing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </Typography>
                    </Box>

                <FlexWrapper
                  marginTop="s24"
                  flexDirection={{lmobile: 'column', desktop: 'row'}}
                >

                    <Badge
                       src='timer'
                       alt="timer-logo"
                       title="Hot Recipes"
                       backgroundColor="rgba(0, 0, 0, 0.05)"
                       padding="0.4rem 1rem"
                       width="10rem"
                       marginBottom='0.5rem'
                       marginRight="2rem"

                      />
                     <Badge
                       src='forkKnife'
                       alt="forkKnife-logo"
                       title="Chicken"
                       backgroundColor="rgba(0, 0, 0, 0.05)"
                       padding="0.4rem 1rem"
                       width="10rem"
                      />
                  </FlexWrapper>
            <FlexWrapper
            >
              <FlexWrapper
                  alignItems="center"
                  marginTop={{lmobile: 's32', desktop: 's96'}}
                  flexDirection={{lmobile: 'column', desktop: 'row'}}
              >
                    <Badge
                      src="personAvatar"
                      alt="personAvatar"
                      title="John Smith"
                      date="15 March 2022"
                      width="12rem"
                      marginBottom='2rem'
                     />
                    <BlackButton>
                        <FlexWrapper
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography
                            type="caption14"
                            fontWeight="fw500"
                            color="white"
                           >
                            View Recipes
                           </Typography>
                           <Image src="playButton" alt="playIcon" />
                    </FlexWrapper>
                    </BlackButton>
                    </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>

            <StaticImage
              width={1200}
              style={{ borderRadius: '0 5rem 5rem 0'}}

              src='../../../assets/images/chickenWings.png'
              alt="chicken wings"
            />
          </FlexWrapper>

        </Container>
    </SectionWrapper>
  )
}

export default Banner