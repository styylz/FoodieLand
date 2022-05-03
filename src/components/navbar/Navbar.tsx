import { Typography } from 'components/typography/Typography'
import React from 'react'
import { Image } from 'components/Image';
import { FlexWrapper } from '../wrappers/FlexWrapper';


export const Navbar: React.FC = () => {
  return (
    <FlexWrapper
        padding="2.5rem 5rem"
        alignItems="center"
        flexDirection={{lmobile: 'column', desktop: 'row'}}
        justifyContent="space-between"
        borderBottom= '1px solid rgba(0, 0, 0, 0.1)'

    >
         <Image
        src='foodieland'
        maxHeight='1rem'
        alt="logo"
      />

            <FlexWrapper
              flexGrow="1"
              justifyContent="space-between"
              flexDirection={{lmobile: 'row', desktop: 'row'}}
              padding={{lmobile: 's0', desktop: '0 17.26rem'}}
              marginTop={{lmobile: 's16', desktop: 's0'}}
            >
                <Typography
                  marginRight={{lmobile: 's16', desktop: 's0'}}
                >
                  Home
                </Typography>
                <Typography
                  marginRight={{lmobile: 's16', desktop: 's0'}}
                >
                  Recipes
                </Typography>
                <Typography
                 marginRight={{lmobile: 's16', desktop: 's0'}}
                >Blog</Typography>
                <Typography
                  marginRight={{lmobile: 's16', desktop: 's0'}}
                >Contact</Typography>
                <Typography
                >About us</Typography>
            </FlexWrapper>

        <FlexWrapper
            justifyContent="space-between"
            flexDirection="row"
        >
            <Image
          src='facebook'
          maxHeight='1rem'
          alt="logo-facebook"
          margin="0 2.5rem 0 0"
        />

            <Image
          src='twitter'
          maxHeight='1rem'
          alt="logo-twitter"
          margin="0 2.5rem 0 0"
        />
            <Image
          src='instagram'
          maxHeight='1rem'
          alt="logo-instagram"
        />
        </FlexWrapper>
    </FlexWrapper>
  )
}

