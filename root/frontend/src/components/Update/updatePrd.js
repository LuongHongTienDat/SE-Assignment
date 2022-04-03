import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { deleteDish, updateDish } from "../../api/dishApi";


function Updateprd ({res}) {
    const navigate=useNavigate();
    const [state,setState] = useState(true);

    var result;

    var notify ='success';
    var titleNotify='Update successful';
    var messageNotify='Please back to dish '

    const [formValue, setformValue] = useState({
        name: '',
        image:'',
        dishDetails: '',
        dishDescription:'',
        price:0,
        countInStock:1,
        category:'',
      });
    
    //   useEffect(()=>{
    //     (async () => {
    //         const res = await register(formValue); 
    //         result =res;
    //         // console.log(result);

    //         if(result === undefined) {
    //             notify ='warning'
    //             titleNotify="Warning"
    //             messageNotify='Please enter full input'
    //             setState1(!state1)
    //         }
        
    //         if(result !==undefined) {
    //             if(result.message !== undefined) {
    //                 notify ='danger'
    //                 titleNotify="Register failure"
    //                 messageNotify=result.message;      
    //             }
    //             else if(result.email !== undefined) {
    //                 notify ='success'
    //                 titleNotify="Register successful"
    //                 messageNotify="Please back to Login page to login";
    //             }    
    //         }
    //       })()
    // },[state]);

    const handleChangeText = (event) => {
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
              duration: 2500,
              onScreen: true
            }
          });
      }

    return (
        <>
        <ReactNotifications/>
        <div className="flex justify-center items-center py-8 w-full">
            <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Product</h1>
                <div >
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">Name</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" defaultValue={res.name}></input>
                    </div>
                
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="image">Image Link</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="image" id="image" defaultValue={res.image}/>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="category">Category</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="category" id="category" defaultValue={res.category}/>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="price">Price</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" defaultValue={res.price}/>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor=" dishDetails">Product detail</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name=" dishDetails" id=" dishDetails" defaultValue={res.dishDetails}/>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="dishDescription">Product Description</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="dishDescription" id="dishDescription" defaultValue={res.dishDescription}/>
                    </div>

                    <div className="flex flex-wrap gap-2">

                    <button onClick={()=>{ updateDish(formValue,localStorage.getItem('user'),res._id); handleNotify()}} className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Update</button>
                    <button onClick={()=>{deleteDish(res._id,localStorage.getItem('user'));handleNotify()}} className="block bg-red-400 hover:bg-red-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Remove</button>
                    </div>

                </div>
                <div className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                onClick={()=>{navigate('/admin/product')}}>Back to Fooddish</div>
            </div>
            
        </div>
        </>
    );
}

export default Updateprd;
