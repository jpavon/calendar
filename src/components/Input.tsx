import styled from 'styled-components'

import { theme } from 'styles'

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0em 1em;
    height: 3em;

    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: ${theme.borderRadius};

    &::placeholder {
        color: currentcolor;
        opacity: 0.5;
    }
`

export default Input
