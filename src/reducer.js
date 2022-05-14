const initialState = {
    data: 0,
}

const reducers = {
    setData(state, { payload : { data }}) {
        return {
            ...state,
            data,
        };
    },
}

function defaultReducer(state) {
    console.log("defaultReducer", state);
    return state;
}

export default function reducer(state=initialState, action='') {
    return (reducers[action.type] || defaultReducer)(state, action);
}