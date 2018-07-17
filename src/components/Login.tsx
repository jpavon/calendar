import * as React from 'react'
import styled from 'styled-components'

import Input from 'components/Input'
import Button from 'components/Button'
import Logo from 'media/logo.svg'
import { theme } from 'styles'

interface Props {
    authUser: () => void
    emailRef: React.RefObject<HTMLInputElement>
    passwordRef: React.RefObject<HTMLInputElement>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
    margin-top: 15vh;
`

const StyledLogo = styled(Logo)`
    margin-bottom: 3rem;
`

const StyledInput = styled(Input)`
    margin-bottom: 0.3rem;
`

const StyledButton = styled(Button)`
    margin-top: 1rem;
`

const Login: React.SFC<Props> = (props) => (
    <Container>
        <StyledLogo fill={theme.color.primary} />
        <StyledInput placeholder="Email" innerRef={props.emailRef} />
        <StyledInput
            type="password"
            placeholder="Password"
            innerRef={props.passwordRef}
        />
        <StyledButton onClick={props.authUser}>Sign in</StyledButton>
    </Container>
)

export default Login
