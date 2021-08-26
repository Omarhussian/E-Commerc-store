import React , {useState} from 'react'
import {Paper , Stepper , Step , StepLabel , Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles.js'
import AdressForm from '../AdressForm.jsx';
import PaymentForm from '../PaymentForm.jsx';
const steps = ['Shipping adress' , 'Payment details'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep , setActiveStep] = useState(2); 
    const Confrimation =() => (
        <div>Conform</div>
    )
    const Form = () => activeStep === 0
            ? <AdressForm />
            : <PaymentForm />

    return (
            <div>
                <div className={classes.toolbar} />
                <main className={classes.layout}>
                    <Paper className={classes.Paper}>
                        <Typography variant="h3" align="center" > Checkout </Typography>
                        <Stepper activeStep={0} className={classes.stepper}>
                            {steps.map(step => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confrimation /> : <Form />}
                    </Paper>
                     
                </main> 
           </div>

    )
}

export default Checkout;
