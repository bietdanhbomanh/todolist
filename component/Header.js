import { connect } from '../store.js';
import html from '../core.js';

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input
                onkeyup="event.key === 'Enter' && dispatch('add', this.value.trim()) "
                class="new-todo"
                placeholder="What needs to be done?"
                autofocus
            />
        </header>
    `;
}
export default Header;
