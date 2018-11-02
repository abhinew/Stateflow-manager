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
import { addState } from '../../actions/states'



class FlowManagement extends PureComponent {


    state = {
        open: false,
        firstState: "+",
        secondState: "+",
        thirdState: "+",
        fourthState: "+",
        clickedButton: null
    }
    handleClick = (event) => {
        this.setState({open : true, clickedButton: event.target.name})
    }
    handleSubmit = () => {
        this.setState({open: false })
        if (this.state.clickedButton === "first") {
            this.props.addState({
                name: this.state.firstState,
                position: 1
            })
        }
        else if (this.state.clickedButton === "second") {
            this.props.addState({
                name: this.state.secondState,
                position: 2
            })
        }
        else if (this.state.clickedButton === "third") {
            this.props.addState({
                name: this.state.thirdState,
                position: 3
            })
        }
        else  {
            this.props.addState({
                name: this.state.fourthState,
                position: 4
            })
        }
       
    }
    handleClose = () => {
        this.setState({open: false })
    }
    handleChange = (event) => {
        if (this.state.clickedButton === "first") {
            this.setState({firstState: event.target.value})
        }
        else if (this.state.clickedButton === "second") {
            this.setState({secondState: event.target.value})
        }
        else if (this.state.clickedButton === "third") {
            this.setState({thirdState: event.target.value})
        }
        else {
            this.setState({fourthState: event.target.value})
        }
        
    } 
    renderDialog = () => {
        // let a;
        // if (this.state.clickedButton === "first") { a = "firstState"}
        // else if (this.state.clickedButton === "second") { a = "secondState"} 
        // else if (this.state.clickedButton === "third") { a = "thirdState"} 
        // else { a = "fourthState"}

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
                // value={ this.state[a] }
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
    render () {
        let isDialogOpen = this.state.open;
        
        return (
            <Paper>
                <h4>Configure State Flow </h4>
                <div className="statebox"><button name="first" onClick={this.handleClick}>{this.state.firstState}</button></div>
                <input type="button" value="< >" />
                <div className="statebox"><button name="second" onClick={this.handleClick}>{this.state.secondState}</button></div>
                <input type="button" value="< >" />
                <div className="statebox"><button name="third" onClick={this.handleClick}>{this.state.thirdState}</button></div>
                <input type="button" value="< >" />
                <div className="statebox"><button name="fourth" onClick={this.handleClick}>{this.state.fourthState}</button></div>
                { isDialogOpen? this.renderDialog() : null}
            </Paper>
            
        )
    }
}
// const mapStateToProps = 
export default connect( null, { addState })(FlowManagement)   
