import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteProps } from 'react-router'

import Login from 'pages/Login'
import Calendar from 'pages/Calendar'
import NotFound from 'pages/NotFound'

interface Props {
    isAuth: boolean | null
}

const PrivateRoute = ({
    component: Component,
    isAuth,
    ...rest
}: Props & RouteProps) => (
    <Route
        render={(props) =>
            isAuth && Component ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location.pathname }
                    }}
                />
            )
        }
        {...rest}
    />
)

const GuestRoute = ({
    component: Component,
    isAuth,
    ...rest
}: Props & RouteProps) => (
    <Route
        render={(props) =>
            !isAuth && Component ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={
                        props.location.state && props.location.state.from
                            ? props.location.state.from
                            : '/'
                    }
                />
            )
        }
        {...rest}
    />
)

const Routes: React.SFC<Props> = (props) => (
    <Switch>
        <GuestRoute exact={true} path="/login" component={Login} {...props} />

        <PrivateRoute exact={true} path="/" component={Calendar} {...props} />

        <Route component={NotFound} />
    </Switch>
)

export default Routes
