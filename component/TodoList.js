import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";
import html from "../core.js";

function TodoList({ todos, filters, filter, editIndex }) {
    return html`
        <section class="main">
            <input
            ${todos.every(filters.completed) && 'checked'}
            onchange="dispatch('toggleAll',this.checked) && checked"
            id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.filter(filters[filter])
                .map((todo, index) => TodoItem(todo, index, editIndex))}
            </ul>
        </section>
    `
}

export default connect()(TodoList);
