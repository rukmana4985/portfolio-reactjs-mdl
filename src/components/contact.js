import React, {Component} from 'react';
import {Grid, Cell, Card, CardText, CardActions, Button, Icon, Textfield } from 'react-mdl';
export default class Contact extends Component{
    render(){
        return(
            <div style={{width:'80%' , margin:'auto'}}>
                <Grid>
                    <Cell col={4} tablet={12} phone={12}>
                        <Card shadow={3} style={{width:'100%', margin:'auto'}}>
                            <div className="center-block">
                                <img src={require('./../images/man.png')} className="custom-image" alt="Avatar"/>
                                <h3 className="my-title">About Me!</h3>
                            </div>
                            <CardText>
                            <p className="text-contact">Hi ! I'm a moslem and a programmer from Bogor West Java Indonesia, this is a simple web using reactJS. I'm a web developer specially on reactJS, laravel, css, sass. I have graduated from SMK Wikrama Bogor. Thank you for clone or download my code, I hope my code is helpfully for you. Aamiin</p>
                            </CardText>
                            <CardActions border>
                                <Button ripple>See More About Me </Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={6} tablet={12} phone={12}>
                        <Card shadow={3} style={{width:'100%', margin:'auto'}}>
                            <div className="center-block">
                            <h3 className="my-title">Contact Me!</h3>
                            <Textfield
                                onChange={() => {}}
                                label="Name..."
                                floatingLabel
                                required={true}
                                style={{width: '80%'}}
                            />
                            <Textfield
                                onChange={() => {}}
                                label="Email..."
                                floatingLabel
                                required={true}
                                style={{width: '80%'}}
                            />
                            <Textfield
                                onChange={() => {}}
                                label="Messages..."
                                rows={3}
                                required={true}
                                style={{width: '80%'}}
                            />
                            </div>
                            <CardActions>
                                <Button raised colored className="btn-send">Send <Icon name="send" className="right"></Icon></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}