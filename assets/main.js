import { attach } from "../store.js";
import App from "../component/App.js";

const body = document.querySelector("body");

attach(App, body);


