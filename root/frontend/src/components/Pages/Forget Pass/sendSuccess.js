import React from 'react';
import { useNavigate } from 'react-router-dom'

const Sendsuccess = () => {
    const navigate=useNavigate()
    return (
        <>
             <div className="bg-grey-lighter min-h-screen flex flex-col bg-[url('https://asianfoodnetwork.com/content/dam/afn/global/en/homepage/new-content-carousel/AFN_Food_Made_Good_HK_Awards_good_to_go_award_mobile.jpg.transform/desktop-img/img.jpg')]">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-semibold">Send Success</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto fill-green-700" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    <h1 className="mb-8 text-lg text-center font-semibold">
                    Check your email to reset your password</h1>



                    <div className="text-center text-md text-green-700 font-semibold mt-4 hover:text-green-800 cursor-pointer" onClick={()=>{navigate('/')}}>
                       Back to home
                       
                    </div>
                </div>

                <div className="text-white mt-6">
                    Remember your password? 
                    <a className="no-underline border-b border-blue text-blue-500 font-semibold" href="#" onClick={()=>{navigate('/Login')}}>
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        </>
    );
}

export default Sendsuccess;
