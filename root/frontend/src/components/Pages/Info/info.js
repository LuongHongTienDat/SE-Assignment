
import { useState,useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { updateInfo, userInfo } from '../../../api/userApi';
import Footer from "../../Footer";
import Header from "../../Header";


function Info(){

    var result;
    
    var notify ='success'
    var titleNotify="Update successful"
    var messageNotify="";
    const [state,setState]=useState(true);
    const [info,setInfo]=useState(
        {
            name:'',
            userName:'',
            email:'',
            phoneNumber:'',
            gender:''
        }
    );
    // save text
    const [formValue, setformValue] = useState({
        name:'',
        email:'',
        phoneNumber:'',
        gender:'',
        password:''
      });
    //text event
    const handleChangeText = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }


    //call api    
    useEffect(()=>{
        (async () => {
            const res = await updateInfo(formValue,localStorage.getItem('user')); 
            result =res;
            console.log(result);
            const info = await userInfo(localStorage.getItem('user'));
            if(info || info.message=== undefined){
                setInfo(info);
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
        <Header/>
        <div className="bg-white min-h-screen pt-24 font-mono ">
            <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <div className="mt-6 ">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="personal w-full pt-4">
                                <h2 className="text-2xl text-gray-900 pb-4 font-semibold">Personal info:</h2>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Your name</label>
                                    <input onChange={handleChangeText}
                                    name="name"
                                    defaultValue={info.name}
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'/>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >user name</label>
                                    <input  defaultValue={info.userName} className='appearance-none block w-full bg-white text-gray-700 border bg-gray-100 border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 ' type='text' disabled/>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Phone number</label>
                                    <input  onChange={handleChangeText}
                                    defaultValue={info.phoneNumber}
                                    name="phoneNumber"
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'/>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Email</label>
                                    <input  onChange={handleChangeText}
                                    defaultValue={info.email}
                                    name="email"
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'/>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                    <input  onChange={handleChangeText}
                                    name="password"
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='password'/>
                                </div>
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Gender</label>
                                    <input  onChange={handleChangeText}
                                    defaultValue={info.gender}
                                    name="gender"
                                    className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'/>
                                </div>

                                <div className="flex justify-end">
                                    <button onClick={()=>{handleNotify(); setState(!state)}}
                                    className="appearance-none bg-green-300 text-gray-900 px-2 py-1 shadow-lg hover:bg-green-500 rounded-md mr-3 font-semibold" type="submit">save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Info;
