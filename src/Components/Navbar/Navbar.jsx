import React from 'react'
import { AppBar, Toolbar, Badge, MeneItem, Menu, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/czarshop.png';
import useStyles from './styles'
import { Link , useLocation } from 'react-router-dom';
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar postion="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Czar Shop" height ="25px" className={classes.image} />
                        Czar Shop
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (

                     <div className={classes.button}>
                     <IconButton component={Link} to="/cart" aria-label="show cart items" color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary' > 
                            <ShoppingCart />
                        </Badge>
                     </IconButton>
                   </div> 
                   )}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
