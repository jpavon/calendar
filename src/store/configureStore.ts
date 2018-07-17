import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from 'store/rootReducer'
import rootEpic from 'store/rootEpic'

const epicMiddleware = createEpicMiddleware()

const middlewares: Middleware[] = [epicMiddleware]

if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
        collapsed: true
    })
    middlewares.push(logger)
}

const configureStore = () => {
    const store = createStore(
        rootReducer,
        {},
        compose(applyMiddleware(...middlewares))
    )

    epicMiddleware.run(rootEpic)

    return store
}

export default configureStore
