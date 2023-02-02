import { createApp } from 'vue'
import App from './App.vue'
import ApiService, { API_SERVICE } from "./api/ApiService";

import '@mdi/font/css/materialdesignicons.css'
import './style.scss'
import 'vuetify/styles'
import { createVuetify } from "vuetify";

const app = createApp(App);

const apiService = new ApiService(import.meta.env.VITE_API_BASE_URL);


app.use(createVuetify()).provide(API_SERVICE, apiService);

app.mount('#app')
