import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import history from 'utils/history'
import configureStore from 'store/configureStore'
import App from 'App'
import { globalStyles } from 'styles'

globalStyles()
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
