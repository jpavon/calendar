import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { RootState } from 'data/types'
import { loadData } from 'data/actions'
import { hideLoading } from 'data/ui/actions'
import Routes from 'Routes'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class App extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.apiKey) {
            this.props.loadData()
        } else {
            this.props.hideLoading()
        }
    }

    public render() {
        return this.props.isLoading ? (
            'Loading animation component here.'
        ) : (
            <Routes isAuth={!!this.props.apiKey} />
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    apiKey: state.user.apiKey,
    isLoading: state.ui.isLoading
})

const mapDispatchToProps = {
    loadData,
    hideLoading
}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(App)
