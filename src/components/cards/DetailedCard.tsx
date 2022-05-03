import { Image } from 'components/Image';
import { Typography } from 'components/typography/Typography';
import { Box } from 'components/wrappers/Box';
import React from 'react'
import styled from 'styled-components/macro';
import { FlexWrapper } from 'components';
import { Recipe } from 'constants/constants';


export const DetailedCard: React.FC<Recipe> = ({title, time, category, imageName}) =>
      (
    <DetailedStyledCard
      position="relative"
      paddingX="s16"
      maxWidth="22.5rem"
      height="27.125rem"
      borderRadius="r30"
    >
      <Image
        src={imageName}
        alt={title}
        borderRadius='30px'
        maxWidth='100%'
      />
      <Box
        position="absolute"
        borderRadius="r30"
        width="3rem"
        height="3rem"
        backgroundColor="white"
        top="0.7rem"
        right="2rem"
        textAlign="center"
        paddingY="s8"

      >
        <Image src="heart" alt="heart" />
      </Box>
      <FlexWrapper
        marginTop="s24"
        flexDirection="column"
        justifyContent="space-between"
        paddingLeft="s8"
        minWidth="21rem"
      >
        <Typography
          type='h3'
          letterSpacing="-0.04em"
        >
       {title}
        </Typography>
        <FlexWrapper marginTop="s24" >
            <FlexWrapper
              alignItems="center"
              marginTop="s24"
            >
                <Image src="timer" alt="timer" margin='0 0.8rem 0 0' />
                <Typography
                   type='caption14'
                   color="secondary"
                   letterSpacing="-0.02em"
                   marginRight="s24"
                >
                 {time}
                </Typography>
            </FlexWrapper>

            <FlexWrapper
              alignItems="center"
              marginTop="s24"
            >
            <Image src="forkKnife" alt="forkKnife" margin='0 0.8rem 0 0' />
                <Typography
                   type='caption14'
                   color="secondary"
                   letterSpacing="-0.02em"
                >
                 {category}
                </Typography>
            </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </DetailedStyledCard>
  )


const DetailedStyledCard = styled(Box)`
  width: 25rem;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%);
  height: 27.125rem;
  padding: 0 1rem;
  border-radius: 1.87rem;
`
