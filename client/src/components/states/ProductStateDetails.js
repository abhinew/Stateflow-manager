import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getProducts, moveToNextState } from '../../actions/products'
import { getStates } from '../../actions/states'
const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class ProductStateDetails extends PureComponent {
   
    componentDidMount() {
        this.props.getProducts();
        this.props.getStates();
    }

    handleClick = (productid) => {
        this.props.moveToNextState(productid);
    }

    displayProductDetails = (product) => {
        let {classes, states } = this.props
         let currentState = states.find(states => states.stateid === product.stateid )
        return (
            <li>
                <Card className={classes.card}>
        <CardContent>
        
        <Typography variant="h5" component="h2">
          Product ID: {product.productid}
        </Typography>
        <Typography component="p">
          Current State : {currentState.name}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={this.handleClick.bind(this, product.productid)} >Move to next</Button>
      </CardActions>
        </Card>
            </li>
        )
    }

    render() {
        let { products, states} = this.props
       
        return(
            <div>
                { states.length &&  <ul>
                <h2>Product Status Details</h2>
                    {products.map(this.displayProductDetails)}
                </ul> }
            </div>
         
        )
    }

}

const mapStateToProps = (state) => {
    
    return {
        products: state.products,
        states: state.states
    }
}

let ProductStateDetailsWrapper =   withStyles(styles)(ProductStateDetails);

export default connect( mapStateToProps, { getProducts, moveToNextState, getStates })(ProductStateDetailsWrapper);  
