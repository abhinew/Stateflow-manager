import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {editState} from '../../actions/states'
import { Button } from '@material-ui/core';
  



class EditStateForm extends PureComponent {
   
    state={}

    componentDidMount(){
        
      let stateid = this.props.match.params.stateid;
        let state = this.props.states.find((state) => state.stateid === stateid);
    

      this.setState({
        stateid
      })
    }

    handleStateSubmit = () => {
        this.props.editState(this.state);
        this.props.history.push('/');
    }

    render() {
        
        let { states } = this.props;

        return(
            <Paper>
                
                <h1>Edit State Form</h1>
                <h1>Edit State Form</h1>
                Enter new state: <input type="text" onChange={(event) => {this.setState({ name: event.target.value })}} value ={this.state.name}/>
                <Button onClick={this.handleStateSubmit}>Submit</Button>
                <Button> Cancel</Button>
            </Paper>
        )
        
    }

}

const mapStateToProps = (state,props) => {
    
    return {
         states: state.states,
    }
}

export default connect( mapStateToProps , { editState })(EditStateForm)   
