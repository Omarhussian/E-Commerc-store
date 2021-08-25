import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from './styles'
import CartItem from "./Cartitem/CartItem";
import {Link} from 'react-router-dom';
const Cart = ({ cart }) => {

 
  const classes=useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      you have no items on your shopping Cart 
      <Link to='/' className={classes.link}>start adding some!</Link>!
    </Typography>
  );

  const FilledCart = () => (
    <>
          <Grid Container spacing ={3}>
            {cart.line_items.map((item)=>(
              <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem item={item} />
              </Grid>

            ))}

          </Grid>
          <div className={classes.cardDetails}>
              <Typography variant="h4">
                Subtotal:{cart.subtotal.formatted_with_symbol}
              </Typography>
               <div>
                 <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">
                   Empty Cart
                 </Button>
                 <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                   Check out
                 </Button>
               </div>


          </div>
    </>
  );
  if(!cart.line_items) return 'loading ....';
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;