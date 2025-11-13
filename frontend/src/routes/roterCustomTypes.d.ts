import type {IndexRouteObject, NonIndexRouteObject} from "react-router";

export type RouteObject = (IndexRouteObject | NonIndexRouteObject) & {
    visibleOnSidebar?: boolean
};
export type DataRouteObject = RouteObject & {
    children?: DataRouteObject[];
    id: string;
};