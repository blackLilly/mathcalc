import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, FormControl, InputLabel, RadioGroup, Radio, Select, MenuItem, FormControlLabel } from '@material-ui/core';
import { TextField, Button, Divider } from '@material-ui/core';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    irupee: {
        content: "\f156"
    },
    formelems: {
        display: 'grid',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
        },
    },
    resultDiv: {
        width: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '15px 20px',
        background: '#51d3b5',
        backgroundImage: 'linear-gradient(90deg,#51d3b5,#9be263)',
        borderRadius: '6px',
        textAlign: 'center'
    },
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    }
}));

export default function Gstcalc() {
    const [state, setState] = React.useState({
        principleAmount: 100,
        gstRate: 5,
        gstValue: 5,
        finalValue: 105,
    });

    const [value, setValue] = React.useState('ex');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const onChangeInput = (e) => {

        setState({
            ...state, [e.target.id]: e.target.value,
        })
    };

    const fnCalcGst = (e) => {

        let postvale = 0;
        let gst = 0;

        if (value === 'ex') {
            gst = (state.principleAmount * (state.gstRate / 100));
            postvale = parseFloat(state.principleAmount) + parseFloat(state.principleAmount * (state.gstRate / 100));
        } else if (value === 'in') {
            gst = state.principleAmount - (state.principleAmount * (100 / (state.gstRate + 100)));
            postvale = state.principleAmount - gst;
        }
        setState({
            ...state,
            gstValue: gst.toFixed(2),
            finalValue: postvale.toFixed(2)
        });
    }

    React.useEffect(() => {
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <meta charset="UTF-8" />
                <title>GST Calculator: Calculate Your GST Amount Online under different Tax Slabs</title>
                <link rel="canonical" href="https://mathcalc.xyz/finance/gst-calculator" ></link>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="GST Calculator: Calculate Your GST Amount Online under different Tax Slabs" />
                <meta property="og:description" content="03-10-2021 10:53:30 AM AM What is GST? Goods and Services Tax or GST refers to the indirect tax levied on the supply of goods and services. From July 1, 2017, GST came up as single taxation system in&nbsp; India and replaced all the indirect taxes in the country. The Central Government passed the GST Act..." />
                <meta property="og:url" content="https://mathcalc.xyz/finance/gst-calculator/" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content="Updated: 03-10-2021 10:53:30 AM What is GST? Goods and Services Tax or GST refers to the indirect tax levied on the supply of goods and services. From July 1, 2017, GST came up as single taxation system in&nbsp; India and replaced all the indirect taxes in the country. The Central Government passed the GST Act..." />
                <meta name="twitter:title" content="GST Calculator: Calculate Your GST Amount Online under different Tax Slabs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="GST Calculator"
                            links={[{
                                url: "/finance/",
                                urlName: "Finance"
                            }]}
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        GST Calculator</h1>
                                    <p className="  has-text-grey">
                                        Calculate Your GST Amount Online</p>
                                </div>
                            </div>
                        </section>
                        <Card raised elevation={1} className="box" >
                            <h2 className={'title is-5'}>
                                GST Calculator: Calculate Your GST Amount Online</h2>
                            <p>
                                GST calculator enables you to find pre-GST and post-GST amounts based on specific GST rates.
                            </p>
                            <br />
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="no" row={true} name="gstType" value={value} onChange={handleChange}>
                                    <FormControlLabel value="ex" control={<Radio />} label="GST Enclusive" />
                                    <FormControlLabel value="in" control={<Radio />} label="GST Inclusive" />
                                </RadioGroup>
                            </FormControl>
                            <br />
                            <br />
                            <div className={classes.formelems} noValidate autoComplete="off">
                                <TextField id="principleAmount" label="Principle Amount"
                                    value={state.principleAmount}
                                    type={'number'}
                                    onChange={onChangeInput}
                                    placeholder="Please enter your amount"
                                /><br />
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">GST</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="gstRate"
                                        value={state.gstRate}
                                        required
                                        onChange={
                                            (e) => {
                                                setState({
                                                    ...state,
                                                    gstRate: e.target.value
                                                })
                                            }
                                        }
                                    >
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={12}>12</MenuItem>
                                        <MenuItem value={18}>18</MenuItem>
                                        <MenuItem value={28}>28</MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Button type="submit" onClick={fnCalcGst} style={{ textTransform: 'none', minWidth: '255px' }} variant="contained" color="primary">Calculate</Button>
                                <br />
                                <div className={classes.resultDiv} >
                                    <div>
                                        <Typography component='label' >Total GST : &nbsp; <strong> ₹{state.gstValue}</strong></Typography>
                                    </div>
                                    <div> <Divider style={{ width: '1px', height: '68px' }} /> </div>
                                    <div>
                                        <Typography component='label' >Post-GST Amount: &nbsp;<strong> ₹{state.finalValue}</strong></Typography>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="box" elevation={1}>
                            <h1 className="title is-5">
                                GST Calculator: Calculate Your GST Amount Online
                            </h1>
                            <p>
                                GST calculator enables you to find pre-GST and post-GST amounts based on specific GST rates.
                                <br />
                                Updated: 20-04-2021 10:23:30 AM
                            </p>
                            <br />
                            <h2 className="title is-5">What is GST?</h2>
                            <p>Goods and Services Tax or GST refers to the indirect tax levied on the supply of goods and services. From July 1, 2017, GST came up as single taxation system in  India and replaced all the indirect taxes in the country. The Central Government passed the GST Act in the Budget Session in 2017 that was approved by the Parliament on March 29, 2017. Some of the indirect taxes that were abolished were Central Excise Duty, VAT, Entry Tax and Octroi.
                            </p><br />
                            <p> GST is a comprehensive tax levied on the manufacture, sale and consumption of goods and services in the country.  Different small and large organizations are required to have a GST Identification Number to get registered under GST policy. When any kind of sales transaction is made within states (Inter-state), Integrated GST is charged. And for any intra-state sales, Central GST and State GST are levied.
                            </p>
                            <br />
                            <h2 className="title is-5"> Different forms of GST collected by the government are:
                            </h2>
                            <p>
                                <b> State GST (SGST)</b>: It is collected by State Government
                                <br /><br />
                                <b>Central GST (CGST) </b>: It is collected by Central Government
                                <br /><br />
                                <b>Integrated GST (IGST) </b>: It is collected by Central Government for inter-state transactions and imports
                                <br /><br />
                                <b>Union Territory GST (UTGST)</b>: It is collected by Union Territory Government
                            </p><br />
                            <h2 className="title is-5">How is GST calculated?</h2>

                            <p>With the unified system of taxation, it is now possible for taxpayers to know the tax levied at different points for various goods and services under the GST regimen. For the calculation of GST, the taxpayer should know the GST rate applicable to various categories. The different slabs for GST are 5%, 12%, 18% and 28%.
                            </p>
                            <br />

                            <h2 className="title is-5"> GST calculation can be explained by simple illustration :</h2>
                            <p>
                                If a goods or services is sold at Rs. 1,000 and the GST rate applicable is 18%, then the net price calculated will be = 1,000+ (1,000X(18/100)) = 1,000+180 = Rs. 1,180.
                            </p><br />
                            <h2 className="title is-5">GST Calculation Formula
                            </h2>

                            <p> For calculating GST, a taxpayer can use the below mentioned formula:
                            </p><br />
                            <p>In order to add GST to base amount,
                            </p>
                            <code>Add GST
                                <br />
                                GST Amount = (Original Cost * GST%) / 100
                                <br />
                                Net Price = Original Cost + GST Amount
                            </code>
                            <br />
                            <br />
                            <p> In order to remove GST from base amount,
                            </p>
                            <code>Remove GST
                                <br />
                                GST Amount = Original Cost – (Original Cost * (100 / (100 + GST%)))
                                <br />
                                Net Price = Original Cost – GST Amount
                            </code>
                            <br />
                            <br />
                            <h2 className="title is-5">How to use our GST Calculation Tool?</h2>

                            <p>At Mathcalc offer to taxpayers a dedicated and professional GST Calculator tool that helps in easy calculation of GST.Taxpayers who want to calculate GST with the differential GST rate can use our tool.
                            </p><br />
                            <p>
                                <b>
                                    Mentioned below are steps to be followed for calculating GST through GST Calculation Tool:
                                </b>
                            </p>
                            <p> Step 1: Select GST Inclusive/GST Exclusive as per the requirement
                                <br /><br />
                                Step 2: Enter the original amount
                                <br /><br />
                                Step 3: Select the GST rate from the drop down menu list
                                <br /><br />
                                Step 4: Click on Calculate to check the result.The result will show the total GST amount and Pre-GST/Post-GST amount as per your original requirement.
                            </p><br />
                            <h2 className="title is-5"> What is GST Inclusive amount?</h2>
                            <p> GST inclusive amount refers to the total value of the product after including the GST amount in the original value of the product.The tax is not charged separately from the customer.
                            </p><br />
                            <h2 className="title is-5">What is GST Exclusive amount?
                            </h2>
                            <p>GST Exclusive amount refers to the value of the product by subtracting the GST amount from the GST Inclusive value of the product.
                            </p>
                            <br />
                            <p> For more information about Goods and service tax (GST), please visit <a rel="noreferrer" style={{ col0r: 'blue !important', textDecoration: 'underline' }} href="http://www.gstcouncil.gov.in/" target="_blank">GST Council</a> .</p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds /></Grid>
                </Grid>
            </Container>
        </div >
    );
}
