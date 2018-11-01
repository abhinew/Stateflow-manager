import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import './FlowManagement.css'




export default class FlowManagement extends PureComponent {


    state = {
        open: false
    }
    handleclick = () => {
        this.setState({open : true})
    }
    

    render () {
        let isDialogOpen = this.state.open;

        return (
            <Paper>
                <h4>Configure State Flow </h4>
                <div className="statebox"><button onClick={this.handleclick()}>+</button></div>
                <input type="button" value="<" />
                <button> > </button>
                <div className="statebox"><button>+</button></div>
                <input type="button" value="<" />
                <button> > </button>
                <div className="statebox"><button>+</button></div>
                <input type="button" value="<" />
                <button> > </button>
                <div className="statebox"><button>+</button></div>
            </Paper>
            
        )
    }
}