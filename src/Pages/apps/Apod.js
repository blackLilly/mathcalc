import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Button, Avatar,
    Card, CardMedia, CardContent, CardHeader, CircularProgress
} from '@material-ui/core';
import Helmet from 'react-helmet';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import CustomSnakbar from '../../Components/CustomSnakbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        backgroundImage: 'url("https://i.imgur.com/NSoz7ir.jpeg")',
        color: 'white',
    },
    divConvertor: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: '1.5rem 1.5rem 0rem 1.5rem'
    },
    divConvertorGrid: {
        marginTop: '1rem',
        "& *": {
            color: 'white !important',
            borderColor: 'white !important'
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        }
    },
    input: {
        width: '100%',
    },
    divResultGrid: {
        [theme.breakpoints.up('sm')]: {
            width: '85%'
        },
        margin: '0px 0 3rem',
        display: 'flex',
        padding: '20px',
        background: '#fafafa',
        textAlign: 'left',
        justifyContent: 'center',
    },
    btnInput: {
        width: '90%',
        backgroundColor: 'transparent !important',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        height: '100%',
        maxHeight: '54px',
        minHeight: '48px',
        borderRadius: '3px',
        border: '1px solid white !important'
    },
    griditem: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px'
        }
    },
    divControls: {
        textAlign: 'left',
        paddingLeft: '1rem'
    },
    gridLastRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cards: {
        height: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    rootcard: {
        margin: '1rem'
    },
    avatar: {
        backgroundColor: '#4a4a4a',
    }

}));

export default function Marvel() {
    const classes = useStyles();
    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [selectedFrom, setSelectedFrom] = React.useState(new Date().toLocaleDateString().substr(0, 10));
    const [selectedTo, setSelectedTo] = React.useState(new Date().toLocaleDateString().substr(0, 10));
    const [isLoading, setIsLoading] = React.useState(false);

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const [allComics, setAllComics] = React.useState([]);
    const GetAstronomyimages = async () => {
        setIsLoading(true);
        setAllComics([]);
        try {
            fetch('https://api.nasa.gov/planetary/apod?api_key=k8TAFlSmb2BuXEB36zcWCy4Td4J8gDNA6IViQJHQ&start_date=' + new MomentUtils().moment(selectedFrom).format('YYYY-MM-DD') + '&end_date=' + new MomentUtils().moment(selectedTo).format('YYYY-MM-DD')).then(res => res.json()).then(res => {
                setAllComics(res);
                setIsLoading(false);
            }).catch(er => {
                setIsLoading(false);
            });
        } catch (ex) {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        // eslint-disable-next-line
        GetAstronomyimages();
        // eslint-disable-next-line
    }, []);
    return (
        <div className={classes.root}  >
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Atronomy Picture of The Day| mathcalc astronomy | mathcalc</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="description" content="A different astronomy and space science related image is featured each day, along with a brief explanation." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="gravitational lens, Einstein cross, quasar" />
            </Helmet>
            <Box className={classes.divConvertor}>
                <Typography variant="h1" className="title is-3" style={{ color: 'white' }}>Astronomy Picture of the Day</Typography>
                <Typography variant="subtitle1" style={{ marginBottom: '2rem', borderBottom: '1px solid rebeccapurple', paddingBottom: '30px' }}>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</Typography>
                <Grid container className={classes.divConvertorGrid} style={{ paddingBottom: '30px' }}>
                    <Grid className={classes.griditem} item sm={12} md={9} lg={9}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <Grid container spacing={4} justify="center" style={{ marginRight: '5px' }}>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        autoOk
                                        label="From Date"
                                        inputVariant="outlined"
                                        variant="inline"
                                        id="selectedFrom"
                                        value={selectedFrom}
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        format='DD-MM-yyyy'
                                        onChange={(e) => {
                                            if (new Date(e) > new Date(selectedTo) || new Date(e) > new Date()) {
                                                setSnakOpen(true)
                                                setSelectedFrom(new Date().toLocaleDateString().substr(0, 10));
                                                setSnakMessage('Choose date less than To date or less than today date');
                                                setTimeout(() => {
                                                    setSnakOpen(false)
                                                }, 2000)
                                            }
                                            else { setSelectedFrom(e); }
                                        }}
                                        className={classes.input}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        autoOk
                                        label="To Date"
                                        inputVariant="outlined"
                                        variant="inline"
                                        value={selectedTo}
                                        id="selectedTo"
                                        openTo="year"
                                        views={["year", "month", "date"]}
                                        format='DD-MM-yyyy'
                                        onChange={(e) => {
                                            if (new Date(e) < new Date(selectedFrom) || new Date(e) > new Date()) {
                                                setSnakOpen(true)
                                                setSelectedTo(new Date().toLocaleDateString().substr(0, 10));
                                                setSnakMessage('Choose date less than today date or greater than from date');
                                                setTimeout(() => {
                                                    setSnakOpen(false)
                                                }, 2000)
                                            }
                                            else { setSelectedTo(e); }
                                        }}
                                        className={classes.input}
                                    />
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid className={classes.griditem} item sm={12} md={3} lg={3}>
                        <Button variant="contained" className={classes.btnInput} color="secondary"
                            onClick={GetAstronomyimages}
                        >Search</Button>
                    </Grid>
                </Grid>
            </Box>
            <Container style={{ padding: '0px' }}>
                <Box style={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', alignItems: 'center' }}>
                        {
                            allComics && allComics.length > 0 ? <>
                                {
                                    allComics.filter(chars => chars.media_type !== "video").map((chars, i) => {
                                        return <>
                                            <Card className={classes.rootcard}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                                            {chars.title.substring(0, 1)}
                                                        </Avatar>
                                                    }
                                                    title={chars.title}
                                                    subheader={new Date(chars.date).toUTCString().substring(0, 17)}
                                                />
                                                <CardMedia
                                                    component="img"
                                                    alt={chars.title}
                                                    style={{ maxHeight: 840, height: 'auto' }}
                                                    image={chars.url}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        {chars.title}
                                                    </Typography>
                                                    <Typography gutterBottom variant="subtitle1" component="p">
                                                        {chars.explanation}
                                                    </Typography>
                                                    <hr />
                                                    <b>Data: </b> {chars.date} <br />
                                                    {
                                                        chars.copyright ? <>
                                                            <b>Copyright: </b> {chars.copyright}
                                                        </> : <></>
                                                    }
                                                </CardContent>
                                            </Card>
                                        </>
                                    })
                                }
                            </> : <>
                            </>
                        }
                    </div>

                    <div style={{ display: isLoading ? 'block' : 'none', textAlign: 'center' }}>
                        <CircularProgress style={{ width: '80px', height: '82px', color: '#ffff' }} />
                    </div>

                </Box>
            </Container >
        </div >
    )
}