import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import ApiService, { API_SERVICE } from "./api/ApiService";

const app = createApp(App)

const apiService = new ApiService(import.meta.env.VITE_API_BASE_URL)

app.provide(API_SERVICE, apiService);

app.mount('#app')
