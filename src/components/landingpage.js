import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

export default class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        )
    }
}