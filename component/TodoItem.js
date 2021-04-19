import html from "../core.js";
function TodoItem(todo, index, editIndex) {
    return html`
    <li class="${todo.completed && 'completed'} ${editIndex == index && 'editing'}"
        ondblclick="dispatch('edit', ${index})"
    >
        <div class="view">
            <input onchange="dispatch('toggle', ${index})"
            class="toggle" type="checkbox"
            ${todo.completed && 'checked'} />
            <label>${todo.title}</label>
            <button class="destroy" onclick="dispatch('delete', ${index})"></button>
        </div>
        <input
        onblur="dispatch('editDone', this.value.trim())"
        onkeyup="event.key === 'Enter' && dispatch('editDone', this.value.trim()) || event.key === 'Escape' && dispatch('cancelEdit', this.value.trim()) "
        class="edit" value="${todo.title}" />
    </li>
    `;
}

export default (TodoItem);
