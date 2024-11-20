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