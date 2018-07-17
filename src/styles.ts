import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const theme = {
    font: 'sans-serif',
    color: {
        primary: '#0564E5',
        secondary: '#55bd5b',
        font: '#333',
        background: '#eef2f2'
    },
    borderRadius: '3px'
}

export const globalStyles = () => injectGlobal`
    ${styledNormalize}

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: ${theme.font};
        color: ${theme.color.font};
        overflow-y: scroll;
        background-color: ${theme.color.background};
        font-weight: 400;
    }
`
