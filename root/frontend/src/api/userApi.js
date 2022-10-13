
import axios from 'axios';

const register = async(formValue) => {

    if(formValue.name==='' || formValue.userName==='' || formValue.password==='' || formValue.email===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/user/register",
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch(error) {
    //   console.log(error.response.data)
        return error.response.data;
    }
    
    // const res = await axios({
    //         method: "post",
    //         url: "http://localhost:5000/api/user/register",
    //         data: formValue,
    //         headers: { "Content-Type": "application/json" },
    //       })
    //     .then(response =>{
    //     // console.log(response.data);
    //     return response.data;
    //   })
    //   .catch(error=> {
    //     //   console.log(error.response.data)
    //       return error.response.data;
    //     })
   
  }


 export const login = async(formValue) => {

    if( formValue.userName==='' || formValue.password===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/user/auth",
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export const userInfo = async(token) => {

    if(token === undefined){
        return 
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url: "http://localhost:5000/api/user",
        headers: {authorization:token },
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }


  export const updateInfo = async(formValue,token) => {

    if( formValue.name===''){
        return;
    }

    try {
      // make axios post request
      const res = await axios({
        method: "patch",
        url: "http://localhost:5000/api/user/update",
        data: formValue,
        headers: {authorization:token},
      });
      return res.data;
    } catch(error) {
        return error.response.data;
    }
    
   
  }

  export default register;


