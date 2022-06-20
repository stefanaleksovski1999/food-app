import "./Footer.css"

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footercontainer">
                
            <div className="footeritem1">
                    <p className="logo11">Baby's</p>
                    <p className="logo22">food place</p>
                </div>
                <div className= "footeritem2">
                    <a className="categories" href="/breakfast">Breakfast</a>
                    <span class="dots"></span>
                    <a className="categories" href="/brunch">Brunch</a>
                    <span class="dots"></span>
                    <a className="categories" href="/lunch">Lunch</a>
                    <span class="dots"></span>
                    <a className="categories" href="/dinner">Dinner</a>
                </div>
               
                <div className="footeritem3">
                    <p className="footeritem3">Baby's Food Place copyright C 2022</p>
                </div>
                
            </div>
        </footer> 
    
     );
}
 
export default Footer;