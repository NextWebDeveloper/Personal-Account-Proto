import React from 'react'
import {
    Route,
    Redirect,
} from "react-router-dom";

function PrivateRoute({ isAuthenticated, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/auth",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;