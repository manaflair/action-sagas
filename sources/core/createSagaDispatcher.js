export function createSagaDispatcher(sagaMiddleware) {

    return store => next => action => {

        if (typeof action === `function` && `next` in action.prototype && `throw` in action.prototype)
            return sagaMiddleware.run(action()).done;

        return next(action);

    };

};
