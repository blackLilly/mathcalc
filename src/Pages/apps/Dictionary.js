import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Button, TextField, FormControl, FormControlLabel, Radio, RadioGroup,
    Card, CardMedia, CardContent, CardActions, CircularProgress
} from '@material-ui/core';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'inherit',
        textAlign: 'center',
        padding: '0.5rem 0px'
    },
    converter: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '2rem'
    },
    divConvertor: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '1rem',
    },
    divConvertorGrid: {
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        }
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
        width: '100%',
        height: '100%',
        minHeight: '48px',
        borderRadius: '0px',
    }
    , closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: '#fff',
    },
    searchInput: {
        width: '100%',
        borderRadius: '0px',
        backgroundColor: '#fff',
        "&> *": {
            borderRadius: '0px'
        }
    },
    griditem: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px'
        }
    },
    btnLoadMore: {
        left: '30%',
        right: '30%',
        minWidth: 254,
        width: '40%',
        marginTop: '15px',
        height: '48px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            left: '0',
            right: '0',
        }
    },
    divControls: {
        textAlign: 'left',
        paddingLeft: '1rem'
    },
    select: {
        width: '89%',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px 0 #48c774',
    },
    dialog: {
        '& .MuiBackdrop-root': {
            opacity: '0.8',
        }
    },
    dialogTitle: {
        backgroundColor: '#7a7a7a',
        color: '#fff'
    },
    paper: {
        minWidth: '254px',
        padding: '1rem',
        height: '100%'
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
    resetContainer: {
        padding: theme.spacing(3),
    },
    span: {
        position: 'absolute',
        justifyContent: 'center',
        right: '33%',
        bottom: '-5%',
        fontSize: 'x-large'
    },
    fignotfound: {
        maxWidth: '350px',
        height: 'auto',
    }
}));

export default function Dictionary() {
    const classes = useStyles();
    const [searchChars, setSearchChars] = React.useState('black');
    const [word, setWord] = React.useState('');
    const [origin, setOrigin] = React.useState('');
    const [phonetic, setPhonetic] = React.useState('');
    const [meanings, setMeanings] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const GetAllChars = async () => {
        try {
            debugger;
            setIsLoading(true);
            let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchChars;
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            if (data) {
                setWord(data[0].word);
                setOrigin(data[0].origin);
                setPhonetic(data[0].phonetic);
            }else{
                setWord('no defintions for this word');
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }
    React.useEffect(() => {
        // eslint-disable-next-line
        GetAllChars();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.root}  >
            <Helmet>
                <title>Modern marvel | find all your favourite marvel characters , episodes and movies |super heroes &amp; villains| mathcalc</title>
                <meta name="description" content="Learn about your favorite Marvel characters, super heroes, &amp; villains! Discover their powers, weaknesses, abilities, &amp; more!" />
                <meta name="keywords" content="modern marvels, marvel characters, super heroes, super villains list | marvel" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Box m={3} className={classes.appBar}>
                <Typography variant="h5">
                    &nbsp; Find the meaning of a word
                </Typography>
            </Box>
            <Box p={3} className={classes.divConvertor}>
                <Grid container className={classes.divConvertorGrid}>
                    <Grid className={classes.griditem} item sm={9} md={9} lg={9}>
                        <TextField variant="outlined" id="s_input" className={classes.searchInput}
                            type="search"
                            autoComplete='true'
                            onChange={e => {
                                setSearchChars(e.target.value)
                            }}
                            aria-label="Search" placeholder="Search your favourite characters" value={searchChars} />
                    </Grid>
                    <Grid className={classes.griditem} item sm={3} md={3} lg={3}>
                        <Button variant="contained" className={classes.btnInput} color="secondary"
                            onClick={GetAllChars}
                        >Search</Button>
                    </Grid>
                </Grid>
            </Box>
            <Container maxWidth="xl">
                <Box style={{ display: isLoading ? 'none' : 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <p>  <b> word:</b> {word} <br />
                        <b>Origin:</b> {origin} <br />
                        <b> Phonetic:</b> {phonetic} <br />
                    </p>
                </Box>
                <div style={{ display: isLoading ? 'block' : 'none', textAlign: 'center' }}>
                    <CircularProgress style={{ width: '80px', height: '82px', color: '#f44336' }} />
                </div>
            </Container >
        </div >
    )
}