import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Card, CardMedia, CardContent, CircularProgress, Button
} from '@material-ui/core';
import Helmet from 'react-helmet';
import VerticalAds from '../../Components/VerticalAds';

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
    maincintainer: {
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        }
    },
    btnLoadMore: {
        marginTop: '15px',
        height: '48px',
        margin: '1rem',
        width: '95%',
        [theme.breakpoints.up('sm')]: {
            width: '136px',
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
    },
    mainimg: {
        width: '100%',
        height: 'auto'
    },
    rootcard: {
        minWidth: 340,
        height: 'auto',
        margin: '10px 4px',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        },
    }
}));

export default function Marvel() {
    const classes = useStyles();
    const [allChars, setAllChars] = React.useState([]);
    const [allComics, setComics] = React.useState([]);
    const [allEvets, setEvents] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    function getUrl(type, id) {
        return 'https://gateway.marvel.com/v1/public/' + type + '/' + id + '?ts=1&apikey=a76e4420bee50924890ee6425633932b&hash=1e8774a2170848870f6b3d2503a3ec25';
    }

    const GetAllChars = async (viewtype, id) => {
        try {
            setIsLoading(true);
            let url = getUrl(viewtype, id);
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            if (data.code === 200) {
                setAllChars(data.data.results);
                setIsLoading(false);
            }
            fetch(getUrl('characters', id + '/comics')).then(res => res.json()).then(data => { setComics(data.data.results); });
            fetch(getUrl('characters', id + '/events')).then(res => res.json()).then(data => { setEvents(data.data.results); });

        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }
    React.useEffect(() => {

        let params = new URLSearchParams(document.location.search);

        // eslint-disable-next-line
        GetAllChars(params.get('type'), params.get('id'));
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
            <Container className={classes.maincintainer} maxWidth="xl">
                <Box style={{ display: isLoading ? 'none' : 'block', position: 'relative', textAlign: 'center' }}>
                    {
                        allChars && allChars.length > 0 ? <>
                            {
                                <>
                                    <div class="hero-image" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + allChars[0].thumbnail.path + "." + allChars[0].thumbnail.extension + ')', height: '450px' }}>
                                        <div class="hero-text">
                                            <Typography variant="h6">
                                                &nbsp; {allChars[0].name}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                &nbsp; {allChars[0].description}
                                            </Typography>
                                        </div>
                                    </div>
                                </>
                            }
                        </> : <></>
                    }
                </Box>
                <Grid>
                    <Grid sm={12} md={9} lg={9}>
                        <Box>

                            {
                                allComics && allComics.length > 0 ? <>
                                    <Typography variant="h2" style={{ textAlign: 'center', width: '95%', background: '#f14668', fontFamily: 'fantasy !important', color: 'white', borderBottomRightRadius: '27px', borderTopLeftRadius: '27px', margin: '1rem' }}>Comics</Typography>
                                </> : <></>
                            }
                            <div style={{ margin: '1rem', display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', alignItems: 'center' }}>
                                {
                                    allComics && allComics.length > 0 ? <>
                                        {
                                            allComics.map((chars, i) => {
                                                return <>
                                                    <Card className={classes.rootcard}>
                                                        <CardMedia
                                                            component="img"
                                                            alt={chars.title}
                                                            style={{ maxHeight: 840, height: 'auto' }}
                                                            image={chars.thumbnail.path + "." + chars.thumbnail.extension}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h6" component="h6">
                                                                {chars.title}
                                                            </Typography>
                                                            <Typography gutterBottom variant="p" component="p">
                                                                {chars.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </>
                                            })
                                        }
                                    </> : <>

                                    </>
                                }
                            </div>
                            {
                                allEvets && allEvets.length > 0 ? <>
                                    <Typography variant="h2"
                                        style={{ textAlign: 'center', width: '95%', background: '#f14118', fontFamily: 'fantasy !important', color: 'white', borderBottomRightRadius: '27px', borderTopLeftRadius: '27px', margin: '1rem' }}>Events</Typography>
                                </> : <></>
                            }
                            <div style={{ margin: '1rem', display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', alignItems: 'center' }}>
                                {
                                    allEvets && allEvets.length > 0 ? <>
                                        {
                                            allEvets.map((chars, i) => {
                                                return <>
                                                    <Card className={classes.rootcard}>
                                                        <CardMedia
                                                            component="img"
                                                            alt="green iguana"
                                                            style={{ maxHeight: 840, height: 'auto' }}
                                                            image={chars.thumbnail.path + "." + chars.thumbnail.extension}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {chars.name}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {chars.description === "" ? "Description not available !! " : chars.description}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </>
                                            })
                                        }
                                    </> : <></>
                                }
                            </div>
                        </Box>
                        <Link
                            to='/marvels/' >
                            <Button style={{ textTransform: 'none' }} className={classes.btnLoadMore} id="btnLoadMore" variant="contained" color="secondary">Back</Button>
                        </Link>
                    </Grid>
                    <Grid sm={12} md={3} lg={3}>
                        <VerticalAds></VerticalAds>
                    </Grid>
                </Grid>
                <div style={{ display: isLoading ? 'block' : 'none', textAlign: 'center' }}>
                    <CircularProgress style={{ width: '80px', height: '82px', color: '#f44336' }} />
                </div>
            </Container >
        </div >
    )
}