import React from 'react'

export default function ContactForm() {
  return ( 
    <div className="mainwrapper">
        <div id="section-d">
            <div className="page-column">
                <h2>Want to Get <mark>Your</mark> Brand Moving?</h2>
            </div>
            <div className="seperator">
                <div className="form">
                    <form action="functions/dbsend.php" method="POST" className="form-grid">
                        <div className="column-formL">
                            <label>WHAT'S YOUR NAME?</label>
                            <span className="full-name">
                                <input type="text" name="name" size="40" required/>
                            </span>
                            <p>
                                <label>WHAT'S YOUR COMPANY NAME?</label>
                                <span className="Company-Name">
                                    <input type="text" name="companyname" size="40" required/>
                                </span>
                            </p>
                            <p>
                                <label>WHAT'S YOUR PHONE NUMBER?</label>
                                <span className="Phone-number">
                                    <input type="tel" name="phone" size="40" required/>
                                </span>
                            </p>
                            <p>
                                <label>WHAT'S YOUR EMAIL?</label>
                                <span className="email">
                                    <input type="email" name="email" size="40" required/>
                                </span>
                            </p>
                        </div>
                        <div className="column-formR">
                            <label>WHAT ARE YOUR PROJECT NEEDS?</label>
                            <span className="your-needs">
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">ADVERTISING</span>
                                        </label>
                                    </span>
                                </span>
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">BRANDING</span>
                                        </label>
                                    </span>
                                </span>
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">OPTIMIZATION</span>
                                        </label>
                                    </span>
                                </span>
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">STRATEGY</span>
                                        </label>
                                    </span>
                                </span>
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">DESIGN</span>
                                        </label>
                                    </span>
                                </span>
                                <span className="checkbox">
                                    <span>
                                        <label>
                                            <input type="checkbox" name="checkBox[]"/>
                                            <span className="span-header">DEVELOPMENT</span>
                                        </label>
                                    </span>
                                </span>
                            </span>
                            <p>
                                <label>ADDITIONAL WORDS</label>
                                <span className="your-notes">
                                    <textarea name="textarea" cols="40" rows="10"></textarea>
                                </span>
                            </p>
                            <p>
                                <label className="submit">
                                    <input type="submit" value="SEND" name="submit"/>
                                </label>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  );
}