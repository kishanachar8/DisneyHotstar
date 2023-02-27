import "../css/footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src="images/NavLogo.svg" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Send Us Feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
            <div className="desc">
                <p>
                    © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
                    channel and programming logos are service marks of, and all related
                    programming visuals and elements are the property of, Home Box Office,
                    Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
