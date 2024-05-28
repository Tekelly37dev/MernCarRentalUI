import React, {useEffect, useState} from "react";
import UserDataService from "../services/user.service";
import NavBar from "./NavBar";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./loginform.css"

//api help https://www.geeksforgeeks.org/different-ways-to-fetch-data-using-api-in-react/

const LoginForm = () => {
    const [data, setuserData] = useState({
        username: "",
        email: "",
        password: "",
        admin: false,
        firstname: "",
        lastname:""
      });
      
    const [apiResponse, setApiResponse] = useState(null);
    //The handleChange function updates the corresponding property of userData based on the name attribute of the input that triggered the change.
    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSearchClick = (event) => {
        event.preventDefault();
        // Handle the search action here
        console.log("submit button clicked with text:");
        //set object with values 
        console.log(data);
        
        UserDataService.login(data)
        .then(response => {
            setApiResponse(response.data);
            console.log(response.data);
            var accessToken = response.data.accessToken;
            if(accessToken){
                console.log('Success! User found! Access Token: ', accessToken);
                toast.success('Login successful!');
            }
            else{
                toast.error('Login failed!');
            }
        })
        .catch(e => {
            console.log(e);
            toast.error('Login failed!');
        });
    };
    return (
        <>
        <div className="page">
            <div className="cover">
                <h1>Login</h1>
                <div class="input-container">
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value={data.username} 
                    onChange={handleChange} 
                    />
                    
                    <input 
                    type="password" 
                    name = "password"
                    placeholder="password" 
                    value={data.password} 
                    onChange={handleChange} 
                    />
                </div>
            <div className="login-btn" onClick={handleSearchClick}>Login</div>
        </div>
            <ToastContainer />
        </div>
        </>
    )
}

export default LoginForm