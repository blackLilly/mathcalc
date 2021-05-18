import React from 'react';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Compress from '../../Assets/icons/Compress';
import Footer from '../../Components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    calcHeader: {
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    row: {
        margin: '2px'
    },
    calcContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        margin: '0px',
        justifyContent: 'center'
    },
}));

export default function Maths() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/shapes/', title: 'Shapes' },
        { url: '/maths/graphs/', title: 'Graphs' },
        { url: '/maths/percentage-calculator/', title: 'Percentage calculator' },
        { url: '/maths/single-rule-of-three-direct/', title: 'Single rule of three direct' },
        { url: '/maths/single-rule-of-three-inverse/', title: 'Single rule of three inverse' },
        // { url: '/maths/Trigonometric-functions/', title: 'Trigonometric functions' },
        { url: '/maths/radians-and-degrees-converter/', title: 'Radians and degrees converter' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Math Calculator - Calculate all  Mathamatical calculations</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">Mathamatics
          </h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Various mathematical tasks, such as calculate percentages, simple shapes, graph fnctions and more..
          </p>
                    </div>
                </div>
            </section>
            <Grid direction="row" justify="center" alignItems="center">
                <Grid item lg={8} md={8} sm={12}>
                    <div className={classes.calcContent}>
                        {
                            urls.map((ur, i) => {
                                return (<a href={ur.url} className={'divLink'} key={i} >
                                    <Compress style={{
                                        width: '30px',
                                        margin: '0px 16px 0px 16px'
                                    }} /> <span>{ur.title}</span></a>
                                )
                            })
                        }
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={false}></Grid>
            </Grid>
            <Footer />
        </div >
    );
}
