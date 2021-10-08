import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Divider, Button, TextField, Paper,
    Dialog, DialogTitle, DialogContent, Card, CardMedia, CardContent, CardActionArea, IconButton
} from '@material-ui/core';
import Helmet from 'react-helmet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import CloseIcon from '@material-ui/icons/Close';

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
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '4rem',
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
}));

export default function Ytvideo() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const [searchChars, setSearchChars] = React.useState('');
    const [allChars, setAllChars] = React.useState([]);

    const downloadFile = async () => {

    }

    const GetAllChars = async () => {
        try {
            let url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=a76e4420bee50924890ee6425633932b&hash=1e8774a2170848870f6b3d2503a3ec25';
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            console.log(data);
            if (data.code == 200) {
                setAllChars(data.data.results)
            }
        } catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        GetAllChars();
    }, []);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Youtube video downloader - Online Youtube Video Downloader | mathcalc</title>
                <meta name="description" content="Convert,preview and download Youtube videos to MP3, MP4, 3GP for free with our Youtube video downloader. The downloading is very quick and simple, just wait a few seconds for the file to be ready on your device." />
                <meta name="keywords" content="youtube, convert video, mp4, mp3, webm, varius quality,medium, low, high quality,youtube video downloader, youtube downloader/" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Box m={3} className={classes.appBar}>
                <Typography variant="h5">
                    &nbsp; Find all your favourite Marvel Characters
                </Typography>
            </Box>
            <Box p={3} className={classes.divConvertor}>
                <Grid container className={classes.divConvertorGrid}>
                    <Grid className={classes.griditem} item sm={9} md={9} lg={9}>
                        <TextField variant="outlined" id="s_input" className={classes.searchInput}
                            type="search"
                            autoComplete='true'
                            autoFocus
                            onChange={e => {
                                setSearchChars(e.target.value)
                            }}
                            aria-label="Search" placeholder="Search your favourite characters" value={searchChars} />
                    </Grid>
                    <Grid className={classes.griditem} item sm={3} md={3} lg={3}>
                        <Button variant="contained" className={classes.btnInput} color="secondary"

                        >Search</Button>
                    </Grid>
                </Grid>
            </Box>
            <Container maxWidth="xl">
                {
                    allChars && allChars.length > 0 ? <>
                        {
                            allChars.map((chars, i) => {
                                return <div key={i}><img src={chars.thumbnail.path + "." + chars.thumbnail.extension} /></div>
                            })
                        }
                    </> : <></>
                }
            </Container >
        </div >
    )
}
