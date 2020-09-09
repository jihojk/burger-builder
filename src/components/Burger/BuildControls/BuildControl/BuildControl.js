import React from 'react';
import classes from './BuildControl.css';



const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label}</div>
        <button className={classes.Add} onClick={props.added}> Add </button>
        <button  className={classes.Remove}> Remove </button>
        
    </div>


);

export default buildControl;