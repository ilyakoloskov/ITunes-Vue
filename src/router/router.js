import AlbumsPage from "@/pages/AlbumsPage"
import ArtistsPage from "@/pages/ArtistsPage"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/albums",
        component: AlbumsPage,
        alias: '/'
    },
    {
        path: "/artists",
        component: ArtistsPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;