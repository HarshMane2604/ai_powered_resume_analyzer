import { Home, Analysis, About } from "../pages/index.js";

const appRoutes = [
    {
        path: '/',
        element: <Home/>,
        label: 'Home'
    },
    {
        path:'/analysis',
        element: <Analysis/>,
        label: "Analysis"
    },
    {
        path: '/about',
        element: <About/>,
        label:"About"
    }
]

export default appRoutes;