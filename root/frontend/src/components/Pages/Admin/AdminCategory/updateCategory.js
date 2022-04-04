import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../../../Header/adminHeader";
import {cate} from '../AdminPage/adminPage'

import UpdateCate from "../../../Update/updateCate";

function UpdateCategory () {
    const navigate=useNavigate();
    const {_id} = useParams();
    const cateID=_id;
    let res = cate.find( ({ _id }) => _id === cateID);

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
