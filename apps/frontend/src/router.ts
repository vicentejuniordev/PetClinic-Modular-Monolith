import {createRouter, createWebHistory} from "vue-router";
import Index from "~/pages/Index.vue";
import VetIndex from "./pages/veterinarios/VetIndex.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", name:"index",component: Index},
        {path: "/vet", name:"vet",component: VetIndex},
    ]
})

export default router
