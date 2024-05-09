import './assets/scss/global.scss'
import './index.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import 'vue3-perfect-scrollbar/style.css';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import store from './store'




const app = createApp(App)

app.use(router)
app.use(VueApexCharts)
app.use(store)
app.use(PerfectScrollbarPlugin)
app.mount('#app')
