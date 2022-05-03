import { Box, Container, FlexWrapper, Image, Typography, SectionWrapper } from 'components'
import React from 'react'
import { useQuery } from 'styles/breakpoints';

const Footer:React.FC = () => {
  const {isMobile} = useQuery();
   return (
    <SectionWrapper>
        <Container>
          <FlexWrapper
            flexDirection={{lmobile: 'column', desktop: 'row'}}
            justifyContent="space-between"


            alignItems="center"
          >
            <FlexWrapper
              flexDirection="column"
            >
                <Image src="foodieland" alt="foodieland" />
                  <Box
                    // marginRight="480px"
                  >
                  <Typography
                    type='h5'
                    fontWeight="fw400"
                    fontSize="fs16"
                    lineHeight="1.75rem"
                    letterSpacing="-0.04em"
                    textAlign="center"
                    marginBottom={{lmobile: 's32', desktop: 's0'}}
                  >
                      Lorem ipsum dolor sit amet, consectetuipisicing elit,
                  </Typography>
                  </Box>
            </FlexWrapper>
            <FlexWrapper>
              <Typography
                type='h5'
                fontWeight="fw400"
                fontSize="fs16"
                lineHeight="1.75rem"
                letterSpacing="-0.04em"
                textAlign="center"
                marginRight="s64"
              >
               Recipes
              </Typography>
              <Typography
                type='h5'
                fontWeight="fw400"
                fontSize="fs16"
                lineHeight="1.75rem"
                letterSpacing="-0.04em"
                textAlign="center"
                marginRight="s64"
              >
                  Blog
              </Typography>
              <Typography
                type='h5'
                fontWeight="fw400"
                fontSize="fs16"
                lineHeight="1.75rem"
                letterSpacing="-0.04em"
                textAlign="center"
                marginRight="s64"
              >
                 Contact
              </Typography>
              <Typography
                type='h5'
                fontWeight="fw400"
                fontSize="fs16"
                lineHeight="1.75rem"
                letterSpacing="-0.04em"
              >
                 About us
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
          <Box
            height="0"
            min-width="90vw"
            border="1px solid rgba(0, 0, 0, 0.1);"
            marginTop={{lmobile: 's32', desktop: 's48'}}

          >
          </Box>
          <FlexWrapper
            textAlign="center"
            justifyContent="space-between"
            margin={{lmobile: 's0', desktop: 's48'}}

          >
           <Box
             margin="auto"

           >
            <Typography
              type='h5'
              fontWeight="fw400"
              fontSize="fs16"
              lineHeight="1.75rem"
              letterSpacing="-0.04em"
              textAlign="center"
            >
              © 2020 Flowbase. Powered by Webflow
            </Typography>
           </Box>
           {isMobile ? '' : (
              <FlexWrapper>
              <Box marginRight="s40">
                <Image src="facebook" alt="facebook" />
              </Box>
              <Box marginRight="s40">
                <Image src="twitter" alt="twitter" />
              </Box>
                <Image src="instagram" alt="instagram" />
            </FlexWrapper>
           )}

          </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

export default Footer