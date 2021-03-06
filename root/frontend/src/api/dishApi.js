import axios from 'axios';

const getDish = async() => {


    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/api/dish",
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

 export const getCate = async() => {


    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/api/dish/cate",

      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export const deleteDish = async(id,token) => {

    if(id===undefined) return;

    const url = "http://localhost:5000/api/dish/"+ id;
    try {
      // make axios post request
      const res = await axios({
        method: "delete",
        url: url,
        headers: {authorization:token}
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export const updateDish= async(formValue,token,id) => {

    if( formValue===undefined || formValue ===[] || id === undefined){
        return;
    }

    const url ="http://localhost:5000/api/dish/" + id;
    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url:url,
        data: formValue,
        headers: { authorization:token},
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

export default getDish;