import { useNavigate, useParams } from "react-router-dom";
import {foodList} from '../Product/product'
import AdminHeader from "../../../Header/adminHeader";
import Updateprd from "../../../Update/updatePrd";

function UpdateProduct() {
    const navigate=useNavigate();
    const {_id} = useParams();
    const foodID=_id;
    let res = foodList.find( ({ _id }) => _id === (foodID));
    return (
        <>
            <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
            <AdminHeader/>
            <Updateprd res={res}/>

            
            
        </div>
        </>
    );
}

export default UpdateProduct;
