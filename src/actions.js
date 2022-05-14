import reducer from './reducer.js';

export function setData(data) {
    console.log("setData", data);

    return({
        type: 'setData',
        payload: { data },
    });
}
