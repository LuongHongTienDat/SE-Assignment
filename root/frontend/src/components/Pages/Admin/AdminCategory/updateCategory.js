import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";
import { cate } from "../../../../data/data";
import UpdateCate from "../../../Update/updateCate";

function UpdateCategory () {
    const navigate=useNavigate();
    const {id} = useParams();
    const cateID=id;
    let res = cate.find( ({ id }) => id === parseInt(cateID));

    return (
       <>
        <div className="min-h-screen md:flex md:flex-row bg-gray-100 ">
            <AdminHeader/>

            <UpdateCate res={res}/>
            
        </div>
        
     
       </>
    );
}

export default UpdateCategory;
