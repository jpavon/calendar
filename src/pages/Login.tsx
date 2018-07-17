import * as React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { authUserRequest } from 'data/user/actions'
import { RootState } from 'data/types'
import LoginComponent from 'components/Login'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Login extends React.Component<Props> {
    private emailRef = React.createRef<HTMLInputElement>()
    private passwordRef = React.createRef<HTMLInputElement>()

    private handleAuthUserRequest = () => {
        this.props.authUserRequest({
            email: this.emailRef.current!.value,
            password: this.passwordRef.current!.value
        })
    }

    public render() {
        return (
            <>
                <Helmet>
                    <title>Login - Doctoralia</title>
                </Helmet>
                <LoginComponent
                    authUser={this.handleAuthUserRequest}
                    emailRef={this.emailRef}
                    passwordRef={this.passwordRef}
                />
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({})

const mapDispatchToProps = {
    authUserRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
