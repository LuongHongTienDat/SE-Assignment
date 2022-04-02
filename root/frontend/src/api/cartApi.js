import axios from 'axios';


const getCart = async(formValue) => {

    if( formValue.userName==='' || formValue.password===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/api/cart",
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export const updateCart= async(formValue,token) => {

    if( formValue===undefined || formValue ===[]){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:5000/api/cart/update",
        data: formValue,
        headers: { authorization:token},
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export default getCart;