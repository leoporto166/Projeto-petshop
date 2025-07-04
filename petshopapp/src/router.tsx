import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { Carrinho } from "./pages/Carrinho";
import { Detalhes } from "./pages/Detalhes";
import { Erro } from "./pages/Erro";

const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/carrinho",
                element: <Carrinho />
            },
            {
                path: "/detalhes/:id",
                element: <Detalhes />
            },
            {
                path: "*",
                element: <Erro />
            },
        ]
    }
])

export {router}