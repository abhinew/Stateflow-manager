import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import './FlowManagement.css'
import { Dialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { addState, changeStateOrder } from '../../actions/states'
import { Link } from 'react-router-dom'



class FlowManagement extends PureComponent {


    state = {
        open: false,
        state: null
    }
    handleClick = () => {
        this.setState({open : true})
    }
    handleSubmit = () => {
        
        this.setState({open: false })
        this.props.addState(this.state.state)
       
       
    }
    handleClose = () => {
        this.setState({open: false })
    }
    handleChange = (event) => {
        this.setState({state: event.target.value})    
    } 
    renderDialog = () => {
       
        return (<Dialog open={true}
            onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">Create state</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="State"
                label="Enter new state"
                type="text"
                fullWidth
                onChange={this.handleChange.bind(this)}
                />
                
            </DialogContent>
            <DialogActions>
                <Button  onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button  onClick={this.handleSubmit.bind(this)} color="primary">
                Submit
                </Button>
            </DialogActions>
        </Dialog>)
        
    }



    renderEditDialog = () => {
       
        return (<Dialog open={true}
            onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">Create state</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="State"
                label="Enter new state"
                type="text"
                fullWidth
                onChange={this.handleChange.bind(this)}
                />
                
            </DialogContent>
            <DialogActions>
                <Button  onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button  onClick={this.handleSubmit.bind(this)} color="primary">
                Submit
                </Button>
            </DialogActions>
        </Dialog>)
        
    }




    displayState = (state) => {
        return ( <li key={state.name}>
           <div className="state-container">
                {state.name}
                <Button color="primary">edit state</Button>
                <Button color="primary">delete state</Button>
            </div>
        </li>)
    }
    render () {
        console.log(this.props.states.length)
        let states = this.props.states;
        let isDialogOpen = this.state.open;
        return (
            <Paper>
                <h4>Configure State Flow </h4>
                <div className="statebox">
                    
                   {/* {this.props.states.length? this.props.states[this.props.states.length - 1].name : <Button name="addStateButton" onClick={this.handleClick}>+</Button>}  */}
                   <Button color="primary" name="addStateButton" onClick={this.handleClick}>create state</Button>
                   
                   

                   <ul>
                       {states.map(this.displayState)}
                   </ul>

                </div>
               
                { isDialogOpen? this.renderDialog() : null}
                { isDialogOpen? this.renderEditDialog() : null}

            </Paper>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        states: state.states
    }
}
export default connect( mapStateToProps, { addState, changeStateOrder })(FlowManagement)   
