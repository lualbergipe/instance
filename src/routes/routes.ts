import { Layout } from "../layouts";
import { Home, Orders, Error } from "../pages";

interface Route {
    path: string;
    layout: (props: any) => JSX.Element;
    component: () => JSX.Element;
}

const routes: Route[] = [
    {
        path: "/",
        layout: Layout,
        component: Home
    },
    {
        path: "/orders",
        layout: Layout,
        component: Orders
    },
    {
         path: "*",
        layout: Layout,
        component: Error
    }
];

export default routes;
