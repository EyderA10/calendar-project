import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import { setupCalendar } from 'v-calendar';
import VueDatePicker from '@vuepic/vue-datepicker';
import { createApp } from 'vue'
import { axiosConfig } from './utils/axiosConfig.js'
import './assets/css/style.css'
import 'v-calendar/style.css';
import '@vuepic/vue-datepicker/dist/main.css'

axiosConfig()
createApp(App).use(setupCalendar, {}).component('VueDatePicker', VueDatePicker).mount('#app')

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'