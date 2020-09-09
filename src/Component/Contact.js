import React from 'react';
import {Grid,Cell} from 'react-mdl';
import '../App.css'


function Contact() {
    return(
        
            <div className ="bg-color" style={{height: '100%'}}>  
                <Grid className="contact-grid">
                    <Cell col={6} className="resume-img">
                        <h3>Saurabh Jadhav</h3>
                        <img src = "image/myAvatar.png" alt="myAvatar.png"/>
                        <p>Have been a learner and still learning to learn from many learners who wish to mak me learn whatever GOOD they have learnt.</p>
                        <p>Interested in Technology, Computer rograming, Artificial Intelligence, Cyber Security, and yes MUSIC is the CATALYST for me...</p>
                    </Cell>
                    <Cell col={6} >
                        <h3>Wanna  get in touch</h3>
                       
                        <div>
                        
                        <Grid className="demo-grid-2">
                            <Cell col={3}>
                                <i class="fa fa-phone-square fa-3x" aria-hidden="true"></i>
                            </Cell>
                            <Cell col={6}>
                                <b>(+91) 983-435-8980</b>
                            </Cell>
                        </Grid>

                        <Grid className="demo-grid-2">
                            <Cell col={3}>
                                <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                            </Cell>
                            <Cell col={6}>
                                <b>saurabhsj2711@gmail.com</b>
                            </Cell>
                        </Grid>

                        <Grid className="demo-grid-2">
                            <Cell col={3}>
                                <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                            </Cell>
                            <Cell col={6}>
                                <b>https://github.com/saurabhsj2711</b>
                            </Cell>
                        </Grid>
                        </div>
                    </Cell>
                    
                </Grid>
            </div>
        
    )
}

export default Contact