import type {RouteObject} from "../../../routes/roterCustomTypes";
import Login from "./index";

const loginRoute: RouteObject = {
    path: 'login',
    Component: Login,
}
export default loginRoute;