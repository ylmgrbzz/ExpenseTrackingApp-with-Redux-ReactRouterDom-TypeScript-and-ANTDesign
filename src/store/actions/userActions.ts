import { LoginForm, User, userDispatch } from "../../types/user";
import api from "../../utils/api";


export const login = (creds: LoginForm) => async (dispatch: userDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await api.post<User>("/users/login", creds);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_ERROR" });
    }
}
