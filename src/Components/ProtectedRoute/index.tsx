import React, { ComponentType as ReactComponent, FunctionComponent } from "react";
import { Redirect, Route, RouteProps, RouteComponentProps } from "react-router"


export const ProtectedRoute: FunctionComponent<RouteProps> =
    ({ component: Component, ...props }) => {
        if (!Component) {
            return null;
        }
        return (
            isAuthentified() ?
            <Route
                {...props}
                render={(props: RouteComponentProps<{}>) => <Component {...props} />}
            /> :
            <Redirect to='/invalid'></Redirect>
        );
    };


/**
 * isAuthentified
 * @description Checks if User is logged in
 * @todo Change with your way of checking
 */
const isAuthentified = () => {
    return false;
}
