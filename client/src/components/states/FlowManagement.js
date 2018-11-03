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
import { addState, changeStateOrder, deleteState } from '../../actions/states'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
      }
})

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

    displayState = (state) => {
        let {classes} = this.props;
        return ( <li key={state.name}>
           <div className="state-container">

                {state.name}<Button variant="outlined" className={classes.button} color="primary" onClick={this.props.deleteState.bind(this, state.name)}>X</Button> 
                <br />
                <Link to={`/edit-state/${state.name}/${state.position}`} ><Button  variant="outlined" color="primary">edit state</Button></Link>
                < br/>
                               
            </div>
            <Button variant="fab" color="primary" aria-label="Add" className="sortButton"  onClick={this.props.changeStateOrder}>
                     <RightIcon />
            </Button>
            {/* <input className="sortButton" type="button" value="<>"/> */}
        </li>)
    }
    render () {

        let {classes} = this.props;
        console.log(this.props.states.length)
        let states = this.props.states;
        let isDialogOpen = this.state.open;
        return (
            <Paper>
                <h4>Configure State Flow </h4>
                <div className="statebox">
                    
                   {/* {this.props.states.length? this.props.states[this.props.states.length - 1].name : <Button name="addStateButton" onClick={this.handleClick}>+</Button>}  */}
                    <Button variant="fab" color="primary"  className={classes.button} onClick={this.handleClick}>
                     <AddIcon />
                    </Button>
                    
                   {/* <Button color="primary" name="addStateButton" >+</Button> */}
                   <ul>
                       {states.map(this.displayState)}
                   </ul>

                </div>
               
                { isDialogOpen? this.renderDialog() : null}

            </Paper>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        states: state.states
    }
}

let FlowManagementWrapper = withStyles(styles)(FlowManagement);
export default connect( mapStateToProps, { addState, changeStateOrder, deleteState })(FlowManagementWrapper)   
