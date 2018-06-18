import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

export default class Projects extends Component{
    render(){
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.cdn-cdpl.com/700x350/998b78e349061b4971c0a2b0e8d6be41/laravel55.jpg) center/ cover'}}>Laravel Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://teknologi.id/wp-content/uploads/2018/04/logo-og-1024x538.png) center/ cover'}}>React Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.cdn-cdpl.com/700x350/998b78e349061b4971c0a2b0e8d6be41/laravel55.jpg) center/ cover'}}>Laravel Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.cdn-cdpl.com/700x350/998b78e349061b4971c0a2b0e8d6be41/laravel55.jpg) center/ cover'}}>Laravel Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://teknologi.id/wp-content/uploads/2018/04/logo-og-1024x538.png) center/ cover'}}>React Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={3}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://teknologi.id/wp-content/uploads/2018/04/logo-og-1024x538.png) center/ cover'}}>React Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>See Project</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}