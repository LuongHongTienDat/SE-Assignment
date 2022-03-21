import { useNavigate } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";

const AddProduct = () => {
    const navigate=useNavigate();
    return (
        <>
        <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
        <AdminHeader/>

        <div className="flex justify-center items-center py-8 w-full">
            <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Creat Product</h1>
                <form action="/" method="post">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_name">Name</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_name" id="cate_name"></input>
                    </div>
                
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Image Link</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Category</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Price</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Product detail</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Product Description</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" name="cate_img" id="cate_img" />
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="cate_img">Is Best Seller</label>
                        <input className="border py-2 px-3 text-grey-800 w-4 h-4 ml-4" type="checkbox" name="cate_img" id="cate_img" />
                    </div>

                    <div className="flex flex-wrap gap-2">

                    <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create</button>
                    </div>

                </form>
                <div className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer" type="submit"
                onClick={()=>{navigate('/admin/product')}}>Back to Dishfood</div>
            </div>
            
        </div>

        

       
        
    </div>
    </>
    );
}

export default AddProduct;
