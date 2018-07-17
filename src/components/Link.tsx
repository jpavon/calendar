import styled from 'styled-components'
import { theme } from 'styles'

const Link = styled.a`
    display: inline;

    color: ${theme.color.secondary};
    text-decoration: none;

    &:hover {
        outline-width: 0;
        text-decoration: underline;
        cursor: pointer;
    }
`

export default Link
