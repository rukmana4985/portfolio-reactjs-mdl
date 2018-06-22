import React, {Component} from 'react';
import { Grid, Cell } from "react-mdl";
export default class AboutMe extends Component{
    render(){
        return(
            <div style={{width:'80%', margin: 'auto'}}>
                <Grid>
                    <Cell col={12}>
                        <div className="center-block">
                        
                        </div>
                    </Cell>
                    <Cell col={4} phone={12} tablet={12}>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}