import Vue from 'vue';
import App from '@/js/App';

import '@/styles/styles.scss';

(() => new Vue({
    el: '#app',
    render: h => h(App),
}))();
