import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import HeloVue from './HeloVue.vue'

createApp(App).mount('#app');
createApp(HeloVue).mount('#app2');