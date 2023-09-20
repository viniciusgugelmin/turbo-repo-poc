import { defineCustomElement } from "vue";

import HelloWorld from "./components/HelloWorld.ce.vue";
import ButtonCounter from "./components/ButtonCounter.ce.vue";

const HelloWorldElement = defineCustomElement(HelloWorld);
customElements.define("hello-world", HelloWorldElement);

const ButtonCounterElement = defineCustomElement(ButtonCounter);
customElements.define("button-counter", ButtonCounterElement);
