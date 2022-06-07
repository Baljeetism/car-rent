import React from "react";
function Header(){
    return(<div className="header">
        <div className="text">
            <h4 >Enter Pickup Point</h4>  
            

        </div>
      
        <div className="button">
            <input type="text" placeholder="Location" />
            <button>FIND CARS</button>
        </div>
    </div>)
};
export default Header;