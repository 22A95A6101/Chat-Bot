import React from 'react';
import './css/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        {/* <hr /> */}
                        <div className="col-md-3">
                            <h3><FaMapMarkerAlt /> Explore Japan</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Our Mission</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3><FaMapMarkerAlt /> Support</h3>
                            <ul>
                                <li>Help Center</li>
                                <li>FAQs</li>
                                <li>Feedback</li>
                                <li>Travel Tips</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3><FaMapMarkerAlt /> Visit Us</h3>
                            <ul>
                                <li>123 Sakura Street</li>
                                <li>Tokyo, Japan</li>
                                <li>Pin code: 100-0001</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3><FaMapMarkerAlt /> Contact</h3>
                            <ul>
                                <li>Email: info@japantravel.com</li>
                                <li>Phone: +81-3-1234-5678</li>
                                <li>WhatsApp: +81-90-1234-5678</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row" style={{ backgroundColor: "#172554" }}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4" id="icons">
                            <ul>
                                <li style={{ color: "white" }}><FaFacebook /></li>
                                <li style={{ color: "white" }}><FaInstagram /></li>
                                <li style={{ color: "white" }}><FaTwitter /></li>
                                <li style={{ color: "white" }}><FaPinterestP /></li>
                            </ul>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row" id="scroll">
                        <div className="col-md-12">
                            <h6><center>Copyright ©2024 reserved to <b>Nihon Navigator</b></center></h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
