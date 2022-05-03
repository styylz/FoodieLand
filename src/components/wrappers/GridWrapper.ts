import styled from 'styled-components/macro';
import {
    grid,
    gridGap,
    GridGapProps,
    GridProps,
    compose
} from 'styled-system'
import { Box } from './Box';

const gridProps = compose(grid, gridGap)

interface GridStyles
    extends GridProps,
    GridGapProps { }

export const GridWrapper = styled(Box) <GridStyles>`
    display: grid;

    && {
        ${gridProps}
    }
`
