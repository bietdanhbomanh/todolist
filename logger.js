export default function logger(reducer) {
    return (state, action, args) => {
        console.group(action);
        console.log("Value: ", args);
        console.log(`State:`, state);
        const nextState = reducer(state, action, args);
        console.log(`Next state: `, nextState);
        console.groupEnd();
        return nextState;
    };
}
