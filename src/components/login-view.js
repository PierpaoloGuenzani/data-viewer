import UserForm from "./user/user-form";
import { useSelector } from "react-redux";
import { LoginComponent } from "./user/login";

export default function LoginView()
{
    const loginView = useSelector(state => state.loginValue)

    return (
        <div>
            {loginView? <LoginComponent/> : <UserForm/>}
        </div>
    )
}