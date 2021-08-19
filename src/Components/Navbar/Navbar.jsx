import React from 'react'
import { AppBar, Toolbar, Badge, MeneItem, Menu, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/czarshop.png';
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar postion="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Czar Shop" height ="25px" className={classes.image} />
                        Czar Shop
                    </Typography>
                    <div className={classes.grow} />
                     <div className={classes.button}>
                     <IconButton aria-label="show cart items" color='inherit'>
                        <Badge badgeContent={2} color='secondary' > 
                            <ShoppingCart />
                        </Badge>
                     </IconButton>
                   </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
