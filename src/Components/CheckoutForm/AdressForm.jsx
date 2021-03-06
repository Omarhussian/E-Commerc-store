import React , {useState , useEffect} from 'react'
import {InputLabel , Select , MenuItem , Button , Grid , Typography} from '@material-ui/core';
import {useForm , FormProvider} from 'react-hook-form';
import { commerce } from '../../lib/commerce'; 
import FormInput from './CustomTextField';

const AdressForm = ({checkoutToken}) => {

    const [shippingCountries , setShippingCountries] = useState([]);
    const [shippingCountry , setShippingCountry] = useState('');
    const [shippingSubdivisions , setShippingSubdivisions] = useState([]);
    const [shippingSubdivision , setShippingSubdivision] = useState('');
    const [shippingOptions , setShippingOptions] = useState([]);
    const [shippingOption , setShippingOption] = useState('');
    const methods = useForm();
        
    const countries = Object.entries(shippingCountries).map(([code,name]) => ({id:code, label:name}))
    console.log(countries);

    const fetchShippingCountries  = async (CheckoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(CheckoutTokenId)
        setShippingCountries(countries);    
        setShippingCountry(Object.keys(countries)[0]) 
    }
    useEffect(()=> {
        fetchShippingCountries(checkoutToken.id)

    },[])
    return (
        <>

            <Typography variant="h6" gutterBottom> Shipping Adress </Typography>
            <FormProvider {...methods}>
                <form onSubmit='' >
                    <Grid container spacing={5} justify="center">
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Postal Code" /> 
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullwidth onChange={(e)=>setShippingCountry(e.target.value)}>
                                {countries.map((country)=> (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem> 
                                ))}
                                   
                                 </Select>  
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivison</InputLabel>
                            <Select value='' fullwidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping options</InputLabel>
                            <Select value='' fullwidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>

                  </Grid>
                </form>
            </FormProvider>

        </>

    )
}

export default AdressForm;
