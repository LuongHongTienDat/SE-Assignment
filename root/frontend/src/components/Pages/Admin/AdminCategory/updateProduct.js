import { useNavigate, useParams } from "react-router-dom";
import foodList from "../../../../data/data";
import AdminHeader from "../../../Header/adminHeader";
import Updateprd from "../../../Update/updatePrd";

function UpdateProduct() {
    const navigate=useNavigate();
    const {id} = useParams();
    const foodID=id;
    let res = foodList.find( ({ id }) => id === parseInt(foodID));
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
