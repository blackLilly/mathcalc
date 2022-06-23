import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, //Card, Typography,
    Dialog, DialogActions, DialogContent, DialogTitle,
    //DialogContentText, FormControl, FormControlLabel, TextField,
    Button, Slide
} from '@material-ui/core';
import Helmet from 'react-helmet';
import VerticalAds from '../../../Components/VerticalAds';

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

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Finance() {
    const classes = useStyles();

    // const [state, setState] = React.useState({});

    // const onInputChange = (e) => {

    // }

    // const ClearAll = (e) => {

    // }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (document.querySelector("#app > div > div:nth-child(2)") != null) {
            document.querySelector("#app > div > div:nth-child(2)").style.display = 'none';
        }
    }, []);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Net Income Finance Calculator - Calculate Net income by using our free calculator</title>
                <meta name="keywords" content="net income, salary,free online finance calculator, simple interest calculator, compound interest calculator, online calculator , free calculator" />
                <meta name="description" content="The net income calculator is a powerful tool that can help you determine if your company/start-up is profitable." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script async src="https://cdn.omnicalculator.com/sdk.js"></script>
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Finance Calculators
                            </h1>
                            <p className="  has-text-grey">
                            </p>
                        </div>
                    </div>
                </section>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">Net Income Calculator</DialogTitle>
                    <DialogContent>

                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', marginBottom: '30px', justifyContent: 'center' }}>
                            <div class="omni-calculator" style={{ width: '100vw' }} data-calculator="finance/net-income" data-config='' data-currency="USD" data-show-row-controls="false" data-version="3" data-t="1634612461992">
                                <div class="omni-calculator-header">Net Income Calculator</div>
                                <div class="omni-calculator-footer">
                                    <a href="https:mathcalc.xyz/finance/net-income-calculator" target="_blank" rel="noreferrer"  >
                                        <img alt="Omni" class="omni-calculator-logo" src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="secondary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Container>
                            <div class="jsx-3048476397 contentPart"><p>
                                <strong>The net income calculator is a powerful tool that can help you determine if your company/start-up is profitable.</strong> Of course, we all want to build a hyper profitable enterprise, but how to do it? <strong>One key point is to know how to calculate its net income.</strong>What has to happen if there is a net income loss, and much more, so keep reading!</p>
                            </div>
                            <br />
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Calculate Now !
                            </Button>
                            <div id="calculator-description" class="jsx-3880559791">
                                <div class="StyledHtml jsx-811426571 jsx-3666478912">
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h2 className='title is-4' id="what-is-net-income">What is net income?</h2>
                                        <p><strong>Net income is the end profit for the company owner</strong>, or in case there would be several owners, its shareholders. This value already discounts all the expenses, interest payments, and taxes related to the revenues made during a particular fiscal period.</p>
                                        <p>If net income is positive, we also call it "profit". If the net income is negative, we can call it "net income loss" or simply "net loss".</p>
                                        <p>From the profits earned, a company can decide to pay <a class="js-link" href="/finance/dividend">dividends</a> to its owner or shareholders. In that case, we should manage the <a class="js-link" href="/finance/dividend-payout-ratio">dividend payout ratio</a> in order to keep everything under control.</p></div><div class="jsx-3048476397 contentPart">
                                        <br />
                                        <h2 className='title is-4' id="how-to-calculate-the-net-income">How to calculate the net income?</h2>
                                        <p>According to what was mentioned above, we have to start with the primary source of money cash inflow: <strong>revenue</strong>. Revenue can include the money income of selling products and/or services provided.</p>
                                        <p>However, such products that were sold or services provided had directly related costs like materials and labor that were directly consumed to create the goods. Those directly related costs had to be subtracted. So:</p>
                                        <ol>
                                            <li>
                                                <p><strong>First, we subtract <code>Cost of sales</code></strong> (also known as COGS: cost of goods sold) from revenues. As a result, we get <code>Gross profit</code>.</p>
                                            </li>
                                            <li>
                                                <p><strong>Second, we take out all the <code>operating expenses</code></strong> such as distribution costs, sales force costs, administrative costs, among others. Accountants call it: <code>Operating profit</code>.</p>
                                            </li>
                                            <li>
                                                <p><strong>Third, we have to pay interest</strong> on our debts (<code>Interest paid</code>), if any.</p>
                                            </li>
                                            <li>
                                                <p><strong>Fourth, we have to discount the stake of the taxing authority.</strong> Here we discount <code>Profit taxes</code>.</p>
                                                <p>They want their money before you receive your part, so they will tax you on the profit after direct costs, operating expenses, and interests.</p>
                                            </li>
                                            <li>
                                                <p><strong>Finally, we have <code>net income</code></strong> if the result after all deductions is positive.</p>
                                            </li>
                                        </ol></div>
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h2 className='title is-4' id="the-formula-to-calculate-net-income">The formula to calculate net income</h2>
                                        <p>All that was mentioned above can be expressed in a mathematical equation:</p>
                                        <p><code>Net income = Operating income - Interest paid - Profit taxes</code>,</p>
                                        <p>where:</p>
                                        <p><code>Operating income = Gross profit - Operating expenses</code>; and</p>
                                        <p><code>Gross profit = Revenue - Cost of sales</code>.</p>
                                        <p>Remember that most of the time, companies, or businesses have to pay a corporate tax rate that is set by the government. In case you know your tax bracket, you can proceed this way:</p>
                                        <p><code>Net income before taxes = Operating income - Interest paid</code></p>
                                        <p><code>Net income = (1 - Tax bracket) * Net income before taxes</code></p>
                                        <p><code>Profit taxes = Net income before taxes * Tax bracket</code></p>
                                        <p>Here you can intuit that if you sell more, you will earn more profit. That's not quite right. Certainly, to have a great <a class="js-link" href="/finance/revenue-growth">revenue growth</a> can boost your net income, but if your variable costs increase as your revenue increases, the profit will be the same. Here is an important concept to check is the <a class="js-link" href="/finance/contribution-margin">contribution margin</a>.</p>
                                        <p>Another insight from the net income formula is that there are several gears you can shift for improving your <a class="js-link" href="/finance/net-profit-margin">net profit margin</a> such as liquidating your debt or reduce direct/indirect costs (lean structure).</p></div><div class="jsx-3048476397 contentPart"><h2 id="an-example-of-net-income-after-tax-calculator">An example of net income after tax calculator</h2>
                                        <p>We will consider a company with the following characteristics per quarter:</p>
                                        <ul>
                                            <li>
                                                <p><code>Total revenue = $100,000 USD.</code></p>
                                            </li>
                                            <li>
                                                <p><code>Cost of sales (COGS) = $40,000 USD.</code></p>
                                            </li>
                                            <li>
                                                <p><code>Operating expenses = $20,000 USD</code></p>
                                            </li>
                                            <li>
                                                <p><code>Interest paid = $5,000 USD</code></p>
                                            </li>
                                            <li>
                                                <p><code>Tax bracket = 30%</code></p>
                                            </li>
                                        </ul>
                                        <p>If we use the previous formula to calculate net income, we will have:</p>
                                        <ol>
                                            <li>
                                                <p><code>Gross profit = 100,000 - 40,000 = $60,000 USD.</code></p>
                                            </li>
                                            <li>
                                                <p><code>Operating income = 60,000 - 20,000 = $40,000 USD.</code></p>
                                            </li>
                                            <li>
                                                <p><code>Net income before taxes = 40,000 - 5,000 = $35,000 USD.</code></p>
                                            </li>
                                            <li>
                                                <p><code>Net income = 35,000 * (1 - 30%) = $24,500 USD</code></p>
                                            </li>
                                            <li>
                                                <p><code>Profit taxes = 30% *  35,000 = $10,500 USD</code></p>
                                            </li>
                                        </ol>
                                        <p>Note that if we had operating expenses more significant than 60,000, then we would have a net income loss. Thus, it is essential to consider not only our direct related costs but also all non-direct costs. We recommend you to check all our <a href="https://www.omnicalculator.com/finance">financial tools</a>, especially the <a href="https://www.omnicalculator.com/collections/startup">start-up calculators</a>.</p></div>
                                    <div class="jsx-3048476397 contentPart">
                                        <br />
                                        <h2 className='title is-4' id="faq">FAQ</h2></div>
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h3 className='title is-4'>How to use our tool as a net to gross income calculator?</h3>
                                        <p>
                                            <strong>The net income calculator</strong> is so powerful that it <strong>can calculate the gross income from the net income.</strong> You have to put the desired net income and built up the calculator in reverse.</p>
                                        <p>Once you know the corporate tax percentage, you can get the profit before taxes and continue estimating your gross income by adding the expected operating expenses and projected interest payments.</p>
                                    </div>
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h3 className='title is-4'>How to calculate net income loss?</h3>
                                        <ol>
                                            <li><strong>Find out all the costs</strong> that are directly related to the product you sell.</li>
                                            <li><strong>Subtract those costs</strong> from your total revenues.</li>
                                            <li>From the result in step 2, <strong>deduct the operating expenses and all interest payments</strong> you have to make to cover your debts.</li>
                                            <li>If you got a negative result, you have your net income loss.</li>
                                        </ol>
                                    </div>
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h3 className='title is-4'>How do you improve net income margins of a business?</h3>
                                        <ol>
                                            <li><strong>Reduce direct costs</strong> or <strong>increase the price of your product/service.</strong></li>
                                            <li><strong>Optimize all your operating expenses.</strong> Here is where you have more room for improvement. You can reduce your distribution costs by creating business partners with distributors, start advertising online, etc.</li>
                                            <li><strong>Liquidate your debt</strong> or <strong>renegotiate it.</strong></li>
                                        </ol>
                                    </div>
                                    <br />
                                    <div class="jsx-3048476397 contentPart">
                                        <h3 className='title is-4'>What is the difference between gross profit and operating income?</h3>
                                        <p><strong>The main difference between gross profit and operating income is the previous only discounts all costs directly related to the product sold.</strong> Such costs include raw material, direct manpower, among others.</p>
                                        <p><strong>Operating profits include indirect costs related to the operation of the business</strong> like sales force, business administration, R&amp;D (research and development), and marketing.</p>
                                    </div><div class="jsx-3048476397 contentPart"><h3>What is the difference between operating income and net income?</h3>
                                        <p><strong>Net income starts from operating income and then discounts debt interests and taxes from it.</strong> It represents all the available money for the company's new projects, dividends, and shares buybacks.</p>
                                    </div></div>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
