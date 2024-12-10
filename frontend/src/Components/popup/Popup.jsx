// import React from 'react'
// import { RxCross2 } from "react-icons/rx";
// import {useNavigate} from "react-router-dom"
// import "./popup.css"
// // import footer_logo from "../Assets/logo_big.png"
// const Popup = ({setdata}) => {
//   const navigate=useNavigate()
//     const toggle=(e)=>
//     {
//       e.stopPropagation()
//         setdata((old)=>!old)
//     }

//     const clicked=(e)=>   {
//       const {id,name}=e.target;

//       console.log(name)
//       if(name=="men")
//       {
//         navigate("/mens")
//       }

//       else if(name=='women')
//       {
//          navigate("/womens")
//       }

//       else
//       {
//           navigate("/kids")
//       }
//     }
//   return (


//     <>
//     <RxCross2 className='cros_icons' onClick={toggle} />
//     <div className="popups">
//     <div className="footer-logo">
//     <p >SEVENTHSTORES</p>

//   </div>
//   <hr/>
//   <section className='chat_bot_main_box'>
//   <div className='message1'>Hii There i am SEVENTHSTORES assistant</div>

//   <div className='message2' > what are  you looking for ?</div>
// <section className='select_option'>
//   <div className='select'  name="men"  id="men">
//   Men <input type="checkbox"  name="men"  id="men" onClick={clicked} />
//   </div>
//   <div  className='select' id='select_wowmen' name="women" >
//   Women <input type="checkbox" name="women" id="women" onClick={clicked}/>
//   </div>
//   <div  className='select' name="kids" id="kids" >
//   Kids <input type="checkbox"  name="kids" id="kids" onClick={clicked}/>
//   </div>
// </section>

 





//   </section>
 
//     </div>
//     </>
   
//   )
// }

// export default Popup



