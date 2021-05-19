import React from "react";
import Title from "../components/Title";
import {Link} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Manager Login" />
          <form
            className="mt-5"
            
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
                required
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="password"
                name="Password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
           
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Submit"
                className="form-control bg-primary text-white"
              />
            </div>

       
            <Link to ="/store" className="bf">
           <IoIosArrowBack > Back</IoIosArrowBack>
           Back
           </Link>

           <Link to ="/OptionPage" className="bf">
             Forward
             <IoIosArrowForward> Forward </IoIosArrowForward>
           </Link>   
              
          </form>
          
        </div>
      </div>
    </section>
  );
}




// import React from 'react'
// //import {useHistory} from "react-router-dom"
// import {Link} from 'react-router-dom'
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack} from "react-icons/io";

// export default function Login() {

//    // const history = useHistory();

//     //state values
//     const [email,setEmail] = React.useState('');
//     const [password,setPassword] = React.useState('');
//     const [username,setUsername] = React.useState('default');
//     const [isMember,setIsMember] = React.useState(true);

//     let isEmpty = !email || !password || !username;

//     const toggleMember = () => {
//         setIsMember((prevMember)=> {
//             let isMember = !prevMember
//             isMember?setUsername('default'):setUsername('')
//             return isMember;
//         });
//     }

//     const handleSubmit = async e => {
//         //alert
//         e.preventDefault();
//         let response;
//         if(isMember){
//             //response = await loginUser
//         }
//         else{
//             //response = await registerUser
//         }

//         if(response){
//             //

//         }else{
//             //show alert
//         }
//     }

//     return (
//         <section className="form-section">
//             <h2 className="section-title">
//                 {
//                     isMember ? "sign in" : "register"
//                 }
//             </h2>
//             <form className="login-form">

//                 {/*single input */}
//                 <div className="form-control">
//                     <form>
//                     <label htmlFor="email"> Email </label>
//                     <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
//                     </form>
//                 </div>

//                 {/*single input */}
//                 <div className="form-control"> 
//                     <label htmlFor="password"> Password </label>
//                     <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
//                 </div>

                
//                 {/*single input */}
//                 {!isMember && <div className="form-control"> 
//                     <label htmlFor="username"> Username </label>
//                     <input type="username" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>
//                 </div>
//                 }

//                 {/* empty form field */}
//                 {isEmpty && (<p className="form-empty">Please fill out all form fields</p>)}

//                 {/*submit button */}
//                 {!isEmpty && <button type="submit" className="btn 
//                 btn-block btn-primary" onClick={handleSubmit}> Submit</button>}

//                 {/*register link*/}
//                 <p className="register-link">
//                     {isMember?"Need to register ":"already a member"}
//                     <button type="button" onClick={toggleMember}> click here</button>
//                 </p>
                
//             </form>
//             <Link to ="/store">
          
//                 <IoIosArrowBack > Back</IoIosArrowBack>

//              </Link>

//             <Link to ="/manager">
//                 <IoIosArrowForward> Back </IoIosArrowForward>
//             </Link>        

//         </section>
//     )
// }
