import React, {Component} from 'react'
import {Grid, Cell, Card, Button} from 'react-mdl'

export default class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid >
                    <Cell col={3} hideTablet={true}></Cell>
                    <Cell col={6} style={{paddingBottom:'10%'}}>
                        <div className="center-block">
                            <h3 className="bold text-banner grey-text">Let's <span className="blue-text code-text">code</span> live!</h3>
                            <img className="img-responsive img-banner" src={require('./../images/banner.png')} alt="task" />
                            <h4  className="bold grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores aspernatur consequuntur doloribus. </h4>
                            <Button className="blue btn-subscribe" raised>Subscribe Me</Button>
                        </div>
                    </Cell>
                    <Cell col={4} phone={12} tablet={12}>
                        <Card  style={{width:'100%', margin:'auto'}} className="hover-card">
                            <div className="center-block" style={{paddingBottom:'10%'}}>
                                <img src={require('./../images/if_Asset_79_3298595.svg')} className="icon" alt="icon"/>
                                <h4 className="bold grey-text">
                                    Communication
                                </h4>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam beatae, commodi consequatur dolor eaque fugiat fugit hic, illum impedit magni nam placeat quaerat quasi qui quibusdam quod quos reiciendis.</p>
                            </div>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} tablet={12}>
                        <Card  style={{width:'100%', margin:'auto'}} className="hover-card">
                            <div className="center-block" style={{paddingBottom:'10%'}}>
                                <img src={require('./../images/if_Asset_85_3298601.svg')} className="icon" alt="icon"/>
                                <h4 className="bold grey-text">
                                    Task List
                                </h4>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam beatae, commodi consequatur dolor eaque fugiat fugit hic, illum impedit magni nam placeat quaerat quasi qui quibusdam quod quos reiciendis.</p>
                            </div>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} tablet={12}>
                        <Card  style={{width:'100%', margin:'auto'}} className="hover-card">
                            <div className="center-block" style={{paddingBottom:'10%'}}>
                                <img src={require('./../images/if_Asset_88_3298604.svg')} className="icon" alt="icon"/>
                                <h4 className="bold grey-text">
                                    Implementation
                                </h4>
                                <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam beatae, commodi consequatur dolor eaque fugiat fugit hic, illum impedit magni nam placeat quaerat quasi qui quibusdam quod quos reiciendis.</p>
                            </div>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}