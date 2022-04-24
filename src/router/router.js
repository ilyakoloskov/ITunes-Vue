import AlbumsPage from "@/pages/AlbumsPage"
import ArtistsPage from "@/pages/ArtistsPage"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: "/",
        component: AlbumsPage
    },
    {
        path: "/albums",
        component: AlbumsPage
    },
    {
        path: "/artist",
        component: ArtistsPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;