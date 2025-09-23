import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import PropTypes from "prop-types";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

App.propTypes = {
    isSignedIn: PropTypes.bool,
    redirectPath: PropTypes.string,
    children: PropTypes.node,
};

export default App;
