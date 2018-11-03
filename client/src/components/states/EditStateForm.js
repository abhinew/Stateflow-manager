import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {updateState} from '../../actions/states'
import {Redirect} from 'react-router-dom'
 
class EditStateForm extends PureComponent {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            name: props.match.params.stateName,
            position: parseInt(props.match.params.position, 10)
        }
    }
    handleStateSubmit = () => {
        this.props.updateState(this.state);
        this.props.history.push('/');
    }

    render() {
        return(
            <Paper>
                Enter new state: <input type="text" onChange={(event) => {this.setState({ name: event.target.value })}} value ={this.state.name}/>
                <Button onClick={this.handleStateSubmit}>Submit</Button>
                <Button> Cancel</Button>
            </Paper>
        )
    }

}

export default connect( null, { updateState })(EditStateForm)   
