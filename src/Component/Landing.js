import React from 'react'
import '../App.css'
import {Grid,Cell} from 'react-mdl';
                
                
function Landing() {
    return(
       <div style={{width: '100%'}} className ="bg-color">
            <Grid className="demo-grid-1">
                
                <Cell col={12}>

                    <img src="image/myAvatar (1).png" alt="My Avatar"  />
                    <p className="signature">Saurabh Jadhav</p>
                
                
                </Cell> 
            </Grid>

            <Grid >
                
                <Cell col={3}>

                </Cell> 
                <Cell col={6} className="demo-grid-3">

                
                    <h1>Student</h1>
                        <hr/>

                        <p>Python | C++ | HTML | CSS</p>
                        <a href="github.com"><i class="fa fa-github fa-4x" aria-hidden="true"></i></a>
                        <a href = "linkedin.com"><i class="fa fa-linkedin fa-4x" aria-hidden="true"></i></a>
                        <a href = "instagram.com"><i class="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
                        <a href = "facebook.com"><i class="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a>
                
                </Cell> 
                <Cell col={2}>

                </Cell>

                
                
            </Grid>
                 
       </div>
    )
}

export default Landing