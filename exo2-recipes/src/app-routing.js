import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import RecipeItem from "./components/RecipeItem";
import AddRecipe from "./components/AddRecipe";
import SignForm from "./components/SignForm";
import HomePage from "./components/HomePage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "details/:id",
                element: <RecipeItem />            
            },
            {
                path: "/addRecipe",
                element: <AddRecipe />

            },
            {
                path: "/signForm",
                element: <SignForm />
            }
        ]

    }
])

export default router