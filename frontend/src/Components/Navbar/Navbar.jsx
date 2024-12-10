import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import Swal from 'sweetalert2';
import nav_dropdown from '../Assets/nav_dropdown.png'
import { NavLink ,Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useSelector,useDispatch } from 'react-redux';
import {toggle_true_and_false_on_login} from "../../app/CounterSlice/CounterSlice.js"
import Product from '../../Pages/Product.jsx';
import { useNavigate } from 'react-router-dom';
 import axios from "axios" 
const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  const navigator=useNavigate()
  const dispatch=useDispatch()
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();
   const [show_debounce_box,setshow_debounce_box]=useState(false)  //this is open  up for debouncing vlaue false mean close
   const [search_data, setsearch_data] = useState("")  //typeing by the user

   const [show_data,set_show_data]=useState([])

   console.log(show_data)
    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }


   const changes=(e)=>
    {
      setshow_debounce_box(false)
      setsearch_data(e.target.value)
    }


    
    useEffect(()=>
    {
    
     async function get_data_from_backend()
     {



      try {

      
        let res=await axios.post("http://localhost:8000/get_data_base",{
          data:search_data
        }

      );

   let c="../Assets/product_6.png"
  let d="../Assets/product_6.png"

      // /static/media/product_13.bc72a204347ba8637fc3.png
       let pr="../Assets"

      let demo=[] 
      // yaha per limit set ha only 5 data show karayga
      for(let i=0;i<5;i++)
        {
            let image=res.data[i].image.substring(13,res.data[i].image.length)
            let image2=image.split(".");
            let image3=pr+image2[0]+'.'+image2[2];
            console.log(image3)
            demo.push({image:image3,name:res.data[i].name,id:res.data[i].id})
        }

        set_show_data(demo)

      if(res.data.length>0)
      setshow_debounce_box(true)
        
      } catch (error) {
        // alert("can't connect")
        setshow_debounce_box(false)
        
      }
    
     

     }

     let ids=setTimeout(() => {
      get_data_from_backend()
     },800 );

     return ()=>clearTimeout(ids)

    },[search_data])
  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>SEVENTHSTORES</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li  onClick={()=>{setMenu("shop")}}><Link to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("mens")}}><Link  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link  to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link  to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      
      

      <div className="nav-login-cart">

        <div className='search_box'>
   
   <input className='search_box' onChange={changes} value={search_data} type='search' placeholder='Search Products...'></input>
        </div>
      

    
         
        {count?<>
          
          <div  name="logout"><button onClick={()=>
            {
              dispatch(toggle_true_and_false_on_login(false))
            }
          }>Logout</button></div>
          </>:<>
          <Link to='/register' name="register"><button>Register</button></Link>
          <Link to="/login" name="login"><button>Login</button></Link>
          </>}
       

        <Link to={count?"/cart":"/login"}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{count?getTotalCartItems():""}</div>
      </div>
     
    {show_debounce_box? <section className='debouncing_box'>
      
    {show_data.map((item,key)=>
    {
      return(
        <div className='name_and_picture' key={key} onClick={(e)=>
          {
            console.log("hii")

            navigator(`/product/${item.id}`,{state:{id:item.id}})
            set_show_data([])
            setshow_debounce_box(false)
          }
        }>
        <span onClick={()=>{}}>{item.name}</span>
        <img className='picture_debouncing' onClick={()=>{}} src="../Assets/banner_women.png"/>
       </div>
      )
    })}
  
     
     
       
      </section>:<></>}
     
    </div>
  )
}

export default Navbar
