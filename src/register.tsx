import { customElement } from 'solid-element';
import PriceTicker from "./components/Hello";

export function registerWebComponents() {
    customElement('hello-world', getInitialProps(), PriceTicker);
}

function getInitialProps() {
    return {
        asset: ''
    };
}
