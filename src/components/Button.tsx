import styled from 'styled-components'

import { theme } from 'styles'

const Button = styled.button`
    position: relative;
    display: block;
    width: 100%;
    height: 3em;
    padding: 0 1em;
    min-width: 2.5em;

    appearance: none;
    user-select: none;
    outline: none;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: inherit;
    border-radius: ${theme.borderRadius};
    color: #fff;
    background-color: ${theme.color.primary};

    &:hover,
    &:focus {
        box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.1);
    }
    &:active,
    &.active {
        box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.2);
    }
`

export default Button
