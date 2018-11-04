import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getProducts, moveToNextState } from '../../actions/products'

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
    }

    onChangeState = (product) => {
        this.props.moveToNextState(product);
    }

    displayProductDetails = (product) => {
        let {classes } = this.props

        return (
            <li>
                <Card className={classes.card}>
        <CardContent>
        
        <Typography variant="h5" component="h2">
          Product ID: {product.id}
        </Typography>
        <Typography component="p">
          Current State : {product.currentState}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={this.onChangeState.bind(this, product.currentState)} >Move to next</Button>
      </CardActions>
        </Card>
            </li>
        )
    }

    render() {
        let {classes, products} = this.props
        return(
         <ul>
             <h2>Product Status Details</h2>
             {products.map(this.displayProductDetails)}
         </ul>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

let ProductStateDetailsWrapper =   withStyles(styles)(ProductStateDetails);

export default connect( mapStateToProps, { getProducts, moveToNextState })(ProductStateDetailsWrapper);  
