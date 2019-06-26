import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

createDomElement();

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app5',
        render: h => h(App)
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];


function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app5');
    if (!el) {
        el = document.createElement('div');
        el.id = 'app5';
        document.body.appendChild(el);
    }
    return el;
}
