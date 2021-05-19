
import Title from "../components/Title";

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { browserHistory } from 'react-router';


 import ReactDOM from "react-dom";
 import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from 'history'

import { Dropdown } from 'react-bootstrap';

export default function about() {
    return (
      <section>
             <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="Select an Option" />
              <div className="mt-5">

                  <Dropdown className="menu_button">

                    <Dropdown.Toggle  id="dropdown-basic">
                    Product List
                    </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="/Viewproduct">View Product</Dropdown.Item>
                            <Dropdown.Item href="/Insertproduct">Insert Product</Dropdown.Item>
                            <Dropdown.Item href="/Deleteproduct">Delete Product</Dropdown.Item>
                            <Dropdown.Item href="/Updateproduct">Update Product</Dropdown.Item>
                          </Dropdown.Menu>   
                          
                  </Dropdown>

                  <Dropdown className="menu_button">

                    <Dropdown.Toggle  id="dropdown-basic">
                    Sales Data List
                    </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="/Viewsale">View Sales-Data</Dropdown.Item>
                            <Dropdown.Item href="/Insertsale">Insert Sales-Data</Dropdown.Item>
                            <Dropdown.Item href="/Deletesale">Delete Sales-Data</Dropdown.Item>
                            <Dropdown.Item href="/Updatesale">Update Sales-Data</Dropdown.Item>
                          </Dropdown.Menu>   
                          
                  </Dropdown>


                  <Dropdown className="menu_button" >

                    <Dropdown.Toggle  id="dropdown-basic">
                    Retailer List
                    </Dropdown.Toggle>

                          <Dropdown.Menu  >
                            <Dropdown.Item href="/Addretailer">Add Retailer</Dropdown.Item>
                            <Dropdown.Item href="/Removeretailer">Remove Retailer</Dropdown.Item>
                            
                          </Dropdown.Menu>   
                          
                  </Dropdown>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>

 <Link to ="/ManagerPage" >
  <IoIosArrowBack size="3%"> Back</IoIosArrowBack> Back
</Link>


            </div>
          
                  </div>
                </div>
            </section>
        
        
    )
}



// export default class manager extends Component {  
//   onChange = (e) => {
//            this.props.history.push(`/${e.target.value}`);
//          }
        
//   render() {
//   return (
//     <section>
//       <div className="row">
//         <div className="col-10 mx-auto col-md-6 my-3">
//           <Title title="Select an Option" />
//           <div className="mt-5">
                              
//                                 <select onChange={this.onChange} className="menu_button">
                                    
//                                      <option value="" > * Product-list * </option>
//                                      <option value="Viewproduct" > View Product </option>
//                                      <option value="Insertproduct" > Insert Product </option>
//                                      <option value="Deleteproduct"> Delete Product </option>
//                                      <option value="Updateproduct"> Update Product </option> 
//                                  </select>
                                
                   
                                  
//                                  <select onChange={this.onChange} className="menu_button">
//                                      <option value="" >  * Sales-data list * </option>
//                                      <option value="Viewsale" > View Sales-data </option>
//                                      <option value="Insertsale" > Insert Sales-data </option>
//                                      <option value="Updatesale"> Update Sales-data </option>
//                                      <option value="Deletesale"> Delete Sales-data </option> 
//                                  </select>
                                 

                                 
//                                  <select onChange={this.onChange} className="menu_button">
//                                      <option value="" > * Retailer list * </option>
//                                      <option value="Addretailer" > Add Retailer </option>
//                                      <option value="Removeretailer" > Remove Retailer </option>
//                                  </select>
                                 
//                                 <br></br>
                              
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>

// <br></br>

//                                  <Link to ="/ManagerPage" >
//                                     <IoIosArrowBack size="3%"> Back</IoIosArrowBack> Back
//                                  </Link>
                              
                                   
//                                </div>
          
//         </div>
//       </div>
//     </section>
//   );
//   }
// }







// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import { IoIosArrowBack } from "react-icons/io";
// // import { browserHistory } from 'react-router';


// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, withRouter } from "react-router-dom";
// //import { createBrowserHistory } from 'history'

// export default class manager extends Component {
//     // onNavigateHome() {
//     //      browserHistory.push("/")
//     // onClick={this.onNavigateHome}
//     //     }

//     onChange = (e) => {
//         this.props.history.push(`/${e.target.value}`);
//       }
    

//     render() {
//         return (
//                 <div>
                   
//             <select onChange={this.onChange}>
                 
//                  <option value="" > * Product-list * </option>
//                  <option value="Viewproduct" > View Product </option>
//                  <option value="Insertproduct" > Insert Product </option>
//                  <option value="Deleteproduct"> Delete Product </option>
//                  <option value="Updateproduct"> Update Product </option> 
//              </select>

                
//              <select onChange={this.onChange}>
//                  <option value="" >  * Sales-data list * </option>
//                  <option value="Viewsale" > View Sales-data </option>
//                  <option value="Insertsale" > Insert Sales-data </option>
//                  <option value="Updatesale"> Update Sales-data </option>
//                  <option value="Deletesale"> Delete Sales-data </option> 
//              </select>

//              <select onChange={this.onChange}>
//                  <option value="" > * Retailer list * </option>
//                  <option value="Addretailer" > Add Retailer </option>
//                  <option value="Removeretailer" > Remove Retailer </option>
//              </select>

//              <h3>
//              <Link to ="/login">
//                 <IoIosArrowBack size="2%"> Back</IoIosArrowBack>
//              </Link>
//              </h3>
                
//             </div>
//         )
//     }
// }












// import React from 'react'
// import {BrowserRouter, Link} from 'react-router-dom';
// import { IoIosArrowBack } from "react-icons/io";
// import { brwoserHistory} from 'react-router';

// export default function manager() {
//     onNavigateHome() {
//         BrowserRouter.push("/home")

//     }
    
//     return (
//         <div>
//             <select>
//                 <option value="view-products" onClick={this.onNavigateHome}> View Product </option>
//                 <option value="insert-products" > Insert Product </option>
//                 <option value="update-products"> Delete Product </option>
//                 <option value="delete-products"> Update Product </option> 
//             </select>

                
//             <select>
//                 <option value="view-sale-data" > View Sales-data </option>
//                 <option value="insert-sale-data" > Insert Sales-data </option>
//                 <option value="update-sale-data"> Delete Sales-data </option>
//                 <option value="delete-sale-data"> Update Sales-data </option> 
//             </select>

//             <select>
//                 <option value="add-retailer" > Add Retailer </option>
//                 <option value="remove-retailer" > Remove Retailer </option>
//             </select>

//             <h3>
//             <Link to ="/login">
          
//                 <IoIosArrowBack size="2%"> Back</IoIosArrowBack>
    
//             </Link>
//             </h3>
//         </div>
//     )
// }
