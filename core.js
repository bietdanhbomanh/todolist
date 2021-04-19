export default function html([first, ...rest], ...values) {
    return values
        .reduce(
            (acc, value) => {
                return acc.concat(value, rest.shift());
            },
            [first]
        )
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}

export function createStore(reducer) {
    let state = reducer();

    const roots = new Map();

    function render() {
        for (let [component, root] of roots) {
            root.innerHTML = component();
        }
    }

    return {
        attach(component, root) {
            roots.set(component, root);
            render();
        },
        connect(selector = (state) => state) {
            return (component) => (props, ...args) =>
                component(Object.assign({}, props, args, selector(state)));
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}
