import html from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filters, filter }) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                ${Object.keys(filters).map(TypeFilter =>`
                <li onclick="dispatch('filter', '${TypeFilter}')">
                    <a class="${TypeFilter === filter && 'selected' }" href="#/">
                    ${TypeFilter[0].toUpperCase() + TypeFilter.slice(1)}
                    </a>
                </li>   
                `)}
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            ${todos.some(filters.completed) && 
            `<button 
            class="clear-completed"
            onclick="dispatch('clear')"
            >Clear completed</button>`}
        </footer>
    `
}

export default connect()(Footer);
