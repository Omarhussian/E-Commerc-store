import React , {useState , useEffect} from 'react'
import {Paper , Stepper , Step , StepLabel , Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles.js'
import AdressForm from '../AdressForm.jsx';
import PaymentForm from '../PaymentForm.jsx';
import { commerce } from '../../../lib/commerce.js';
const steps = ['Shipping adress' , 'Payment details'];

const Checkout = ({cart}) => {
    const classes = useStyles();
    const [activeStep , setActiveStep] = useState(0); 
    const [checkoutToken,setCheckoutToken]=useState(null);
    useEffect(()=> {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
                console.log(token);
                setCheckoutToken(token);
            }
            catch (error) {
                 
            }
        }
        generateToken(); 
    },[cart])
   
   
   
   
   
    const Confrimation =() => (
        <div>Conform</div>
    )
    const Form = () => activeStep === 0
            ? <AdressForm checkoutToken={checkoutToken} />
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
                        {activeStep === steps.length ? <Confrimation /> : checkoutToken && <Form />}
                    </Paper>
                     
                </main> 
           </div>

    )
}

export default Checkout;
