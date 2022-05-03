import React from "react";
import styled from "styled-components/macro";
import { FlexWrapper, Image, Typography } from "components";

interface Styles {
    backgroundColor?: string;
    width?: string;
    height?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    maxHeight?: string;
    padding?: string;
    borderRadius?: string;
}

interface BadgeProps extends Styles {
    src: string;
    title: string;
    alt: string;
    date?: string;
    onClick?: () => void;
}


export const Badge: React.FC<BadgeProps> = ({ src, alt, title, date, onClick, ...rest }) => (
    <StyledBadge onClick={onClick} {...rest}>
        <Image src={src} alt={alt} />
        <FlexWrapper flexDirection='column'>
            <Typography type='caption14' fontWeight='fw600' paddingLeft='s8'>
                {title}
            </Typography>
            {date && <Typography type='caption14' fontWeight='fw500' paddingLeft='s8' marginTop='s8' >{date}</Typography>}
        </FlexWrapper>
    </StyledBadge>
);

const StyledBadge = styled.div<Styles>`
    background-color: ${({ backgroundColor }) => backgroundColor || ''};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${({ marginLeft }) => marginLeft || ''};
    margin-right: ${({ marginRight }) => marginRight || ''};
    margin-top: ${({ marginTop }) => marginTop || ''};
    margin-bottom: ${({ marginBottom }) => marginBottom || ''};
    padding: ${({ padding }) => padding || '0 1rem'};
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    border-radius: ${({ borderRadius }) => borderRadius || '1.875rem'};
`;