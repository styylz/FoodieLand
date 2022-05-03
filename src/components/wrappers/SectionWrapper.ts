import styled from 'styled-components/macro';

import { mobile } from 'styles/breakpoints';
import { Colors } from 'styles/theme';

interface SectionWrapperStyles {
	minHeight?: string;
	backgroundColor?: Colors;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
	position: relative;
	padding: 3.8rem 0;
	min-height: ${({ minHeight }) => minHeight || ''};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? theme.colors[backgroundColor] : ''};

	@media ${mobile} {
		padding: 3rem 0;
	}
`;
