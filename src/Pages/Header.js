import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/index.css'
import { FaTwitter,FaFacebook, FaLinkedinIn,FaIdBadge } from 'react-icons/fa';

class NavigationBar extends Component{
    render(){
        return(
            <>
            
           <div className="navbar main_navbar_1">
              <div className="logo_part"></div>
              <div className="Contact_part">
                  <div className="row Contact_inner">
                      <div className="col-6 content_wrap">
                          <ul className="list_social">
                             <li><FaFacebook /></li>
                             <li><FaLinkedinIn /></li>
                             <li><FaTwitter /></li>
                          </ul>
                      </div>
                      <div className="col-3">
                        <div className="row d-flex">
                            <div className="col-4 text_right">
                            <FaIdBadge />
                            </div>
                            <div className="col-8">
                            9833683580
</div>
                        </div>
                      </div>
                      <div className="col-3">dfd</div>
                  </div>
              </div>

           </div>
           <div className="navbar main_navbar_2 d-flex">
            <div className="menu_bar d-flex ">
            <span className="menu">HOME</span>
            <span className="menu">PRODUCT</span>
            <span className="menu">ABOUT COMPOSTING</span>
            <span className="menu">SERVICE</span>
            <span className="menu">CLIENT</span>
            <span className="menu">CONTACT</span>

            


            </div>

           </div>
          
          
         
</>
        )
    }
}
export default NavigationBar;