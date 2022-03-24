import { useNavigate } from 'react-router-dom';

import AdminHeader from "../../../Header/adminHeader";
import foodList from "../../../../data/data";

function AdProduct (){
    const navigate=useNavigate();
    return (
       <>
           <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
                <AdminHeader/>
                <div className="md:w-full">
                {/*Category card */}
                <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:flex lg:justify-between">
                <p className="font-semibold md:pl-16 pt-20 lg:pt-16 md:text-justify text-center">List products</p>
                </div>

                <div className="flex md:flex-row flex-col flex-wrap items-center lgjustify-center md:pl-16 gap-4 pt-4 cursor-pointer">
                {
                    foodList.map((food,index)=>(

                    <div key={index} className="md:basis-1/3 lg:basis-[22%] bg-white p-6 rounded-xl border border-gray-50 hover:bg-blue-100"
                    onClick={()=>{navigate(`${food.id}`)}}>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <p className="text-xs text-gray-600 tracking-wide">{food.category}</p>
                            <h3 className="mt-1 text-lg text-blue-500 font-bold">{food.name}</h3>
                            <span className="mt-4 text-xs text-gray-500">Last Transaction 3 Hours ago</span>
                        </div>
                        <div className="bg-gray-200 p-2 md:p-1 xl:p-2 rounded-md">
                            <img src={food.image} alt="icon" className="w-auto h-8 md:h-6 xl:h-8 object-cover"/>
                        </div>
                    </div>
                    </div>

                    ))
                    
                }
                <div className="md:basis-1/3 lg:basis-[22%] bg-white p-6 rounded-xl border border-gray-50 hover:bg-blue-100 mb-4"
                    onClick={()=>{navigate('add')}}>
                   
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <p className="text-xs text-gray-600 tracking-wide"></p>
                            <h3 className="mt-1 text-lg text-blue-500 font-bold uppercase">Creat new food</h3>
                            <span className="mt-4 text-xs text-gray-500"></span>
                        </div>
                        <div className="bg-blue-500 p-2 md:p-1 xl:p-2 m-auto rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
           </div>
       </>
    );
}

export default AdProduct;
