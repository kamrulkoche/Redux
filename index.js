// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
    count: 0,
};

const initialUserState = {
    users: [{ name: "Kamrul Hasan" }],
};

// action - object-type,payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}

const addUser = () => {
    return {
        type: "ADD_USER",
        payload: { name: 'shakil' }
    }
}

// create reducer for counter
const couterReducer = (state = initialCounterState, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;

    }
}

//1. state
//2. dispatch action
//3. reducer
//4. store
