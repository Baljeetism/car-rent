import React from "react";
var date = new Date();
var year=date.getFullYear();
function Footer(){
    return(
        <footer className="footer">
            <p>© Copyright Baljeet Singh {year}</p>
        </footer>
    );
}
export default Footer;
