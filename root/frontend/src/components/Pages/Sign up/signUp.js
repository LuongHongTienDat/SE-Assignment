
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });

export default function Signup () {
    const navigate=useNavigate()
    const [formValue, setformValue] = useState({
        name: '',
        userName:'',
        password: '',
        phoneNumber:'',
        gender:'',
        email:''
      });

      const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("name", formValue.name)
        loginFormData.append("userName", formValue.userName)
        loginFormData.append("password", formValue.password)
        loginFormData.append("phoneNumber", formValue.phoneNumber)
        loginFormData.append("gender", formValue.gender)
        loginFormData.append("email", formValue.email)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "http://localhost:5000/api/user/register",
            data: formValue,
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
                    <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Name" required
                        onChange={handleChange}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" required
                        onChange={handleChange}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="userName"
                        placeholder="UserName" required
                        onChange={handleChange}
                        />
                    
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password" required
                        />

                        {/* <Formik
                            initialValues={{
                                password: "",
                                changepassword: ""
                            }}
                            validationSchema={Schema}
                            onSubmit={() => {}}
                            >
                            {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                return (
                                <form >

                                    <span className="error" style={{ color: "red" }}>
                                    {errors.password}
                                    </span>
                                    <input
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    placeholder="Password" required
                                    />

                                    <input
                                    type="password"
                                    name="changepassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.changepassword}
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    placeholder="Confirm password" required
                                    />
                                    <span className="error" style={{ color: "red" }}>
                                    {errors.changepassword}
                                    </span>

                                </form>
                                );
                            }}
                        </Formik> */}
  

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-white mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/Login')}}>
                        Log in
                    </a>.
                </div>
            </div>
        </div>

        </>
           
        
        
    );
}

