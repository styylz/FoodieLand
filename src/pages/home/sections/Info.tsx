import { Box, Container, FlexWrapper, SectionWrapper, Typography } from 'components'
import { BlackButton } from 'components/buttons/BlackButton'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Info:React.FC = () =>
  (
    <SectionWrapper>
        <Container>
            <FlexWrapper>
                <FlexWrapper
                 flexDirection="column"
                 justifyContent="center"
                >
                  <Box
                    marginBottom="s24"
                    marginTop="s64"
                  >
                    <Typography
                      type='h2'
                     >
                         Everyone can be a chef in their own kitchen
                     </Typography>
                  </Box>
                  <Box
                    marginBottom="s64"
                  >
                    <Typography
                      type='body16'
                     >
                         Lorem ipsum dolor sit amet, consectetuipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                     </Typography>
                </Box>
                     <BlackButton>
                         Learn More
                     </BlackButton>
                </FlexWrapper>
                <StaticImage
                  width={1200}
                  src='../../../assets/images/chef.png'
                  alt="chef"
                 />
            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )


export default Info