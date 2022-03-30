import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';

export default function Login() {

    const navigate=useNavigate()

    const [formValue, setformValue] = useState({
        userName:'',
        password: '', 
    });

    const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("userName", formValue.userName)
        loginFormData.append("password", formValue.password)
    
        try {
        // make axios post request
        const response = await axios({
            method: "post",
            url: "http://localhost:5000/api/user/auth",
            data: loginFormData,
            // headers: { "Content-Type": "multipart/form-data" },
        });
        } catch(error) {
        console.log(error)
        }
    }

    const handleChange = (event) => {
        setformValue({
        ...formValue,
        [event.target.name]: event.target.value
        });
    }
    return (
      <>
        <div className="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-semibold">Sign In</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="userName"
                        placeholder="username"
                        onChange={handleChange} required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange} required />
            
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Sign In</button>

                    <div className="text-center text-sm text-grey-dark mt-4">

                        <a className="no-underline border-b border-grey-dark text-md text-grey-dark text-green-700 font-semibold" href="#"  onClick={()=>{navigate('/')}}>
                            Back To Home
                        </a>
                    </div>
                </form>

                <div className="text-white mt-6 font-semibold">
                    Don't have an account? 
                    <a className="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/Signup')}}>
                        Create Account
                    </a>.

                </div>
                

            </div>
        </div>
  
      </>
    )
}
  
