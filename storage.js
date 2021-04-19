export default {
    get() {
        return JSON.parse(localStorage.getItem("DATA_TODOS")) || [];
    },

    set(todos) {
        localStorage.setItem("DATA_TODOS", JSON.stringify(todos));
    },
};
