import { createStore } from "./core.js";
import reducer from "./reducer.js";
import logger from "./logger.js";

const { dispatch, attach, connect } = createStore(logger(reducer));

export { attach, connect };

window.dispatch = dispatch;
