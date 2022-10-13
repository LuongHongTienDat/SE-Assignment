import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import {login, userInfo} from '../../../api/userApi'

const EnterNewPass = () => {
    var result;
    var path= '';
    var notify ='warning';
    var titleNotify='Warning';
    var messageNotify='Please enter full input'
    
    
    const navigate=useNavigate()
    const [state,setState] = useState(true)
    const [formValue, setformValue] = useState({
        newPassWord:'',
        password:'', 
    });

    useEffect(()=>{
        (async () => {
            const res = await login(formValue); 
            result =res;
        //    console.log(result.token);
            // const test = await userInfo(localStorage.getItem('user'))
            // console.log(localStorage.getItem('user'))
            if(result === undefined) {
                notify ='warning'
                titleNotify="Warning"
                messageNotify='Please enter full input'
            }
        
            if(result !==undefined) {
                if(result.message !== undefined) {
                    notify ='danger'
                    titleNotify="Login failure"
                    messageNotify=result.message;      
                }
                else if(result.email !== undefined) {
                    localStorage.setItem("user",result.token);
                    path ='/'
                    notify ='success'
                    titleNotify="Login successful"
                    messageNotify="Please back to Home page";                  
                }    
            }

          })()
    },[state]);

    const handleChange = (event) => {
        setformValue({
        ...formValue,
        [event.target.name]: event.target.value
        });
    }

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
                    <h1 className="mb-8 text-3xl text-center font-semibold">Enter New Password</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="newPassWord"
                        placeholder="New password"
                        onChange={handleChange} required/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Confirm password"
                        onChange={handleChange} required />
            
                    <button
                        onClick={()=>{setState(!state);handleNotify(); navigate(path)}}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Confirm</button>

                    <div className="text-center text-sm text-grey-dark mt-4">

                        <a className="no-underline border-b border-grey-dark text-md text-grey-dark text-green-700 font-semibold" href="#"  onClick={()=>{navigate('/')}}>
                            Back To Home
                        </a>

                    </div>
                </div>

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

export default EnterNewPass;
