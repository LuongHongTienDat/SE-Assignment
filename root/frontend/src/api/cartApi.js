import axios from 'axios';


const getCart = async(token) => {

    if( token === undefined){
        return undefined;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "https://luna-eatery.herokuapp.com/api/cart",
        headers: {authorization:token},
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
        url: "https://luna-eatery.herokuapp.com/api/cart/update",
        data: formValue,
        headers: { authorization:token},
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export default getCart;