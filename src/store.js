export default function createStore(reducer) {
    let state = reducer();

    return {
        dispatch: (action) => {
            state = reducer(state, action);
        },
        getState: () => state,
    }
}