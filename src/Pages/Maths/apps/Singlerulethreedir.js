import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings';
import Ruleofthree from '../../../Assets/images/ruleofthree.png';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        '& > *': {
            margin: '10px 0px 10px 0px',
        },
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
}));

export default function Singlerulethreedir() {
    const [state, setState] = React.useState({
        result: '0',
        fielda: 0,
        fieldb: 0,
        fieldc: 0,
        decimalPlace: 5,
    });

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line 
    }, [state.fielda, state.fieldb, state.fieldc, state.decimalPlace]);

    const onClickCalculate = () => {

        let a = state.fielda === '' ? 0 : parseFloat(state.fielda);
        let b = state.fieldb === '' ? 0 : parseFloat(state.fieldb);
        let c = state.fieldc === '' ? 0 : parseFloat(state.fieldc);

        let res = ((c * b) / a).toFixed(state.decimalPlace);
        setState({
            ...state,
            result: res,
        })
    }
    const onInputChange = (e) => {
        if (e.target.id === 'decimalPlace') {
            if (e.target.value < 100)
                setState({
                    ...state, [e.target.id]: e.target.value
                })
        } else
            setState({
                ...state, [e.target.id]: e.target.value
            })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Single rule of three direct online | mathcalc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">SINGLE RULE OF THREE DIRECT ONLINE
          </h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Find out x, in such proportion to c as b is to a.
          </p>
                        <br />    <div className="box">
                            <h3 className="title is-5">  For example:
                          </h3>
                            <img src={Ruleofthree} alt="rule of three"></img>
                            <p>    If 4 kg of a product cost $36, how much would be the cost of 18 kg?
                               &nbsp; <strong>Answer:</strong> a: 4, b: 36, c: 18, x: 162 ($162)
                        </p><br />
                            <p>
                                If 2 liters of paint are required to paint 5 rooms, how many liters are required to paint 7 rooms?
                               &nbsp; <strong>Answer:</strong> a: 5, b: 2, c: 7, x: 2.8 (liters)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container" data-v-14591542>
                <div class="columns" data-v-14591542>
                    <div class="column is-6" data-v-14591542>
                        <div class="box" data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Options</Typography>
                                <br />
                                <span> <strong>Value of a</strong></span><br />
                                <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fielda} id="fielda" variant="outlined" type="number"></TextField><br />
                                <span> <strong>Value of b</strong></span><br />
                                <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fieldb} id="fieldb" variant="outlined" type="number"></TextField><br />
                                <span><strong>value of c</strong></span><br />
                                <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fieldc} id="fieldc" variant="outlined" type="number"></TextField><br />
                                <span> <strong>Number of decimal places</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange}
                                    inputProps={{
                                        maxLength: 2,
                                    }}
                                    value={state.decimalPlace} id="decimalPlace" variant="outlined" type="number"></TextField>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6" data-v-14591542>
                        <div class="box" data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Result</Typography>
                                <div className={'resultDiv'}>
                                    <span>{state.result}</span>
                                </div>
                                <br />
                                <Button variant="contained" className={"button is-info"}
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Calculate</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
