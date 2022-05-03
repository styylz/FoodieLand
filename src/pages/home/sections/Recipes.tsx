import React, { useState } from 'react'
import { Box, Container, FlexWrapper, GridWrapper, Image, Typography, DetailedCard } from 'components';
import { SectionWrapper } from '../../../components/wrappers/SectionWrapper';
import { RECIPES } from 'constants/constants';
import { useQuery } from '../../../styles/breakpoints';
import { BlackButton } from 'components/buttons/BlackButton';

const Recipes:React.FC = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const {isMobile, isTablet} = useQuery()

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  return (
    <SectionWrapper>
        <Container>
            <FlexWrapper
              flexDirection="column"
              marginBottom="s96"
            >
              <Box
                marginBottom="s16"
              >
                <Typography
                  type='h2'
                  textAlign="center"
                >
                   Simple and tasty recipes
                </Typography>
              </Box>
              <Box
              maxWidth="43.75rem"
              margin="auto"
              >
                <Typography
                  type='body16'
                  textAlign="center"
                >
                   Lorem ipsum dolor sit amet, consectetuipisicing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </Typography>

              </Box>
            </FlexWrapper>
            <GridWrapper
              gridTemplateColumns={{ _: 'auto', lmobile: 'auto ', ltablet:'auto auto  ', desktop: 'auto auto auto'}}
              gridGap="2.5rem"
              marginBottom={{ lmobile: 's24', ltablet:'s24', desktop: 's0'}}
            >
              { isReadMore && (isMobile || isTablet) ? (RECIPES.map(({id, title, time, category, imageName}, i)=> (
                  i !== 5 ? (
                  <DetailedCard
                    id={id}
                    title={title}
                    time={time}
                    category={category}
                    imageName={imageName}
                   />) : (
                    <Image maxWidth="22.5rem" src="ads" alt="ad" />
                   )

               )).slice(0,3)) : (RECIPES.map(({id, title, time, category, imageName}, i)=> (
                  i !== 5 ? (
                  <DetailedCard
                    id={id}
                    title={title}
                    time={time}
                    category={category}
                    imageName={imageName}
                   />) : (
                    <Image maxWidth="22.5rem" src="ads" alt="ad" />
                   )
               ))) }

            </GridWrapper>
            <FlexWrapper
              justifyContent="Center"
            >
              {(isMobile || isTablet) && isReadMore ? (
                <BlackButton onClick={toggleReadMore} >
                  Show more
                </BlackButton>
              ) : (isMobile || isTablet) ? (<BlackButton onClick={toggleReadMore} >
                  Show less
                </BlackButton>) : ''
              }

            </FlexWrapper>
        </Container>
    </SectionWrapper>
  )
}

export default Recipes