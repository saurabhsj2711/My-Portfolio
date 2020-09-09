import React,{useState} from 'react'
import '../App.css'
import {Tabs,Tab} from 'react-mdl'
import {Grid,Cell} from 'react-mdl'
import {Card,CardActions,CardText,CardTitle,Button} from 'react-mdl'

function Project() {

    const [state,setState] = useState(
        {
            activeTab : 0
        }
        
    )    

    const dataChange = () =>{
        if(state.activeTab === 0)
        {
            return(
                <div style={{display:'flex'}}>

                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand className='card' style={{background:'url(image/Gender-PNG-File_2.png) center no-repeat'}}>Gender Identifier</CardTitle>
                        <CardText>
                            Classify the gender based on the name of the person.
                        </CardText>
                        <CardActions border>
                            <a href="https://www.github.com"><Button colored>GitHub</Button></a>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{ background: 'url(image/call_classifier.png) center no-repeat'}}>Call Classifier</CardTitle>
                        <CardText>
                            Converting recordede call to text to identify the type of call whether it is for complaint or enquiry.
                        </CardText>
                        <CardActions border>
                            <a href="https://www.github.com"><Button colored>GitHub</Button></a>
                        </CardActions>
                    </Card>

                     
                </div>
            )
            
        }
        else if(state.activeTab === 1){
            return(
                <div style={{display:'flex'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{ background: 'url(image/Letter.png)' }}>Letter Generator</CardTitle>
                        <CardText>
                            Generate the letter of the students monthly report .
                        </CardText>
                        <CardActions border>
                            <a href="https://www.github.com"><Button colored>GitHub</Button></a>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{ background: 'url(image/Nss_1.png) 50% no-repeat'}}>College NSS</CardTitle>
                        <CardText>
                            NSS website of college where students can register for the events organised by college and see the info of NSS.
                        </CardText>
                        <CardActions border>
                            <a href="https://www.github.com"><Button colored>GitHub</Button></a>
                        </CardActions>
                    </Card>
               </div>
            )
        }
    }

    return(
       <div className = "bg-color" style={{height:'600px'}}>
        <div>
            <Tabs  className = "project" activeTab= {state.activeTab} onChange = {(tabID) => {setState({...state , activeTab:tabID} ) }} ripple>
            <Tab style={{fontSize : "22px", color: "pink"}}>Machine Learning</Tab>
            <Tab style={{fontSize : "22px", color: "pink"}}>Web Development</Tab>

            </Tabs>
            <section>
            <Grid>

                <Cell col={12}>
                    {dataChange()}
                </Cell>

            </Grid>
            </section>

        </div>
       </div>
    )
}

export default Project