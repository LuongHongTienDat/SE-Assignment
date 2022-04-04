import { useNavigate } from 'react-router-dom'



const ErrorPage = () => {
    const navigate=useNavigate()
    return (
       <>
        <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 lg:mb-20 flex items-center">
                    <img className="h-8 ml-3 w-auto sm:h-10" alt="" src="https://static.wixstatic.com/media/2cd43b_17040a042929442094fd1a2179d5bd29~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_17040a042929442094fd1a2179d5bd29~mv2.png"/>
                    <span className="font-bold text-2xl px-2 text-blue-600">Luna Eatery</span>
                    </div>
                    <div className="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">404 OOPS</h1>
                        <p className="font-normal text-lg">Page not found</p>
                        <p className="font-normal text-lg">Sorry we can't find the page, Please try again or login to continue.</p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <button onClick={()=>{navigate('/')}} className="text-2xl font-semibold outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">Back to home</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                <img alt="" src="https://error404.fun/img/full-preview/1x/13.png" className=""/>
                
                </div>
            </div>
            <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
       </>
    );
}

export default ErrorPage;
