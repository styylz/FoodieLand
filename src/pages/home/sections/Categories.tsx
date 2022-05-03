import { Badge, Box, Container, FlexWrapper, Typography } from 'components';
import { SectionWrapper } from '../../../components/wrappers/SectionWrapper';
import React, { useState } from 'react'
import { SimpleCard } from 'components/cards/SimpleCard';
import { CATEGORIES } from '../../../constants/constants';
import { BlackButton } from 'components/buttons/BlackButton';
import { useQuery } from '../../../styles/breakpoints';


const Categories:React.FC = () =>{
  const [isReadMore, setIsReadMore] = useState(true);
  const {isMobile, isTablet} = useQuery()

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

   return(
    <SectionWrapper>
        <Container >
          <Typography
            type="h2"
          >
            Categories
          </Typography>
            <FlexWrapper
              marginTop="s128"
              justifyContent="space-between"
              position="relative"
              flexDirection={{lmobile: 'column', desktop: 'row'}}
              alignItems={{lmobile: 'center', desktop: 'flex-start'}}
            >
            { isReadMore && (isMobile || isTablet) ? (CATEGORIES.map(({title, backgroundColor, imageName}) => (
              <Box
                margin={{lmobile: 's16', desktop: 's0'}}
              >
                <SimpleCard
                  background={backgroundColor}
                  imageName={imageName}
                  title={title}
                />
              </Box>
            )).slice(0,3)) : (
              (CATEGORIES.map(({title, backgroundColor, imageName}) => (
                <Box
                  margin={{lmobile: 's16', desktop: 's0'}}
                >
                  <SimpleCard
                    background={backgroundColor}
                    imageName={imageName}
                    title={title}
                  />
                </Box>
              )))
            )}

            </FlexWrapper>
            <FlexWrapper
              justifyContent="Center"
            >
              {(isMobile || isTablet) && isReadMore ? (
                  <BlackButton onClick={toggleReadMore} >
                  Show more
                </BlackButton>
              ) : isMobile ? (
                <BlackButton onClick={toggleReadMore} >
                  Show less
                </BlackButton>) : ''
              }

            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )}

export default Categories