import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper';
import './CreateFlow.css'
export default class CreateFlow extends PureComponent {
    render () {
        return (
            <Paper>
               <h3>Create new State</h3>
                Enter new State: <input type="text" />
                <button>Save</button>
                <button>Save</button>
            </Paper>
            
        )
    }
}