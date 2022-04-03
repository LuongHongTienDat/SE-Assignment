import Card from "../../Contents/Cards/card";
import SelectCard from "../../Contents/ExampleCard/SelectCard";
import Footer from "../../Footer";
import Header from "../../Header";
// import foodList from '../../../data/data'
import {useState,useEffect} from 'react';
import getDish from "../../../api/dishApi";

const selectMenu = [
  {
      title:'Fast food',
      type:'fastfood',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Sushi',
      type:'sushi',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Fruit',
      type:'fruit',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Soups',
      type:'soups',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
  {
      title:'Drinks',
      type:'drinks',
      image:'https://www.seekpng.com/png/full/89-891255_fast-food-png-food.png'
  },
]

let cate ='all';
let foodList=[];
export default function Menu() {


    const [state, setState] = useState(cate);

    useEffect(()=>{
   
      // call api
      (async () => {
        // const res = await updateCart(food,localStorage.getItem('user')); 
        const res = await getDish();
        foodList=res;
      })()
    },[])


    return (
      <>
        <Header></Header>
        <SelectCard state={state} setState={setState}/>
        <Card foodList={foodList} state={state} setState={setState}/>
        <Footer/>
      </>
    )
}
  
