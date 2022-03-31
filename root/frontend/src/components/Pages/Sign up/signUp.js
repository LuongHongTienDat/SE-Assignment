
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import register from '../../../api/userApi';

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
    const [state,setState] = useState(true);
    const [state1,setState1] = useState(true);

    var result;

    var notify ='warning';
    var titleNotify='Warning';
    var messageNotify='Please enter full input'
 
    // save text
    const [formValue, setformValue] = useState({
        name: '',
        userName:'',
        password: '',
        phoneNumber:'',
        gender:'',
        email:''
      });
    //text event
    const handleChangeText = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

    // call api    
    useEffect(()=>{
        (async () => {
            const res = await register(formValue); 
            result =res;
            console.log(result);

            if(result === undefined) {
                notify ='warning'
                titleNotify="Warning"
                messageNotify='Please enter full input'
                setState1(!state1)
            }
        
            if(result !==undefined) {
                if(result.message !== undefined) {
                    notify ='danger'
                    titleNotify="Register failure"
                    messageNotify=result.message;      
                }
                else if(result.email !== undefined) {
                    notify ='success'
                    titleNotify="Register successful"
                    messageNotify="Please back to Login page to login";
                }    
            }
          })()
    },[state]);

   
    //notify
    const handleNotify=()=>{
        Store.addNotification({
            title: titleNotify,
            message: messageNotify,
            type: notify,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4500,
              onScreen: true
            }
          });
      } 
    return (
        <>
        <ReactNotifications/>
        <div className="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Name" required
                        onChange={handleChangeText}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" required
                        onChange={handleChangeText}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="userName"
                        placeholder="UserName" required
                        onChange={handleChangeText}
                        onClick={()=>{setState1(!setState)}}
                        />
                    
                    <Formik
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
                                onInput={handleChangeText}
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
                    </Formik>
  

                    <button
                        onClick={()=>{setState(!state); handleNotify()}}
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
                </div>

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

