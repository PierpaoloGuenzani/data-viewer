import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/authenticationSlice";
import { properties } from "../properties";
import UserForm from './user-form';

export function LoginComponent()
{
    const [create , setCreate] = useState();
    const dispatch = useDispatch()

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleClick = () =>
    {
        fetch(properties.LOGIN_URL,
            {
                method: "POST",
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username":usernameRef.current.value, "password":passwordRef.current.value})
            }
        ).then(
            response => response.ok? dispatch(login()): dispatch(logout())
        )
    }

    const handleCreate = () =>
    {
        setCreate(
            <UserForm></UserForm>
        )
    }

    return(
        <div>
            <TextField size="small" placeholder="Username" inputRef={usernameRef}></TextField>
            <TextField size="small" type="password" placeholder="Password" inputRef={passwordRef}></TextField>
            <Button variant="contained" size="large" onClick={handleClick}>Login</Button>
            <Button variant="contained" size="large" onClick={handleCreate}>Create new user</Button>
            {create}
        </div>
    );
}