import DATA from "./storage.js";
const init = {
    todos: DATA.get(),
    editIndex:null,
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
};

const actions = {
    add(state, value) {
        if (value) {
            state.todos.unshift({ title: value, completed: false });
            state.editIndex = null;
            DATA.set(state.todos);
        }
    },
    toggle({ todos }, index) {
        todos[index].completed = !todos[index].completed;
        DATA.set(todos);
    },
    delete({ todos }, index) {
        todos.splice(index, 1);
        DATA.set(todos);
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => {
            todo.completed = completed;
            DATA.set(todos);

        });
    },
    clear(state) {
        state.todos = state.todos.filter(state.filters.active);
        DATA.set(state.todos);

    },
    filter(state, TypeFilter) {
        state.filter = TypeFilter;
    },
    edit(state, index) {
        state.editIndex = index;
    },
    editDone(state, value) {
        if(value){
            if(state.editIndex != null) {
                state.todos[state.editIndex].title = value;
                state.editIndex = null;
                DATA.set(state.todos);
            }
        }else {
            this.delete(state, state.editIndex)
        }
    },
    cancelEdit(state, value) {
        if(value) {
            state.editIndex = null;
        }else  this.delete(state, state.editIndex) 
    },
    focusHader(state) {
        state.editIndex = null;
    }

    
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}
