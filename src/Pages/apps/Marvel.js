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

export default function Marvel() {
    const classes = useStyles();
    const [searchChars, setSearchChars] = React.useState('iron man');
    const [allChars, setAllChars] = React.useState([]);
    const [allComics, setComics] = React.useState([]);
    const [allSeries, setSeries] = React.useState([]);
    const [allEvets, setEvents] = React.useState([]);
    const [type, setType] = React.useState('characters');
    const [isLoading, setIsLoading] = React.useState(false);
    const [reloadUrl, setReloadUrl] = React.useState('');
    const [offset, setOffset] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    const LoadMore = async () => {

        if (offset * 21 <= total) {
            try {
                window.scrollTo(0, 0);
                setIsLoading(true);
                let url = reloadUrl + '&offset=' + (parseInt(offset + 1)).toString();
                setOffset(offset + 1);
                // Storing response
                const response = await fetch(url);
                // Storing data in form of JSON
                var data = await response.json();
                console.log(data.data.offset + ' - offset ', data.data.total + " = total");
                if (data.code === 200) {
                    switch (type) {
                        case 'characters':
                            setAllChars(data.data.results);
                            setComics([]); setEvents([]); setSeries([]);
                            break;
                        case 'comics':
                            setComics(data.data.results);
                            setEvents([]); setSeries([]); setAllChars([]);
                            break;
                        case 'events':
                            setEvents(data.data.results);
                            setComics([]); setSeries([]); setAllChars([]);
                            break;
                        case 'series':
                            setSeries(data.data.results);
                            setComics([]); setEvents([]); setAllChars([]);
                            break;
                        default:
                            break;
                    }
                    setIsLoading(false);
                }
            } catch (e) {
                console.log(e);
                setIsLoading(false);
            }
        } else {
            document.getElementById('btnLoadMore').style.display = 'none';
        }
    }
    const GetAllChars = async () => {
        try {
            setIsLoading(true);
            let searchQuery = '';
            if (searchChars !== '') {
                switch (type) {
                    case 'characters':
                        searchQuery = '&nameStartsWith=' + searchChars;
                        break;
                    case 'comics':
                        searchQuery = '&titleStartsWith=' + searchChars;
                        break;
                    case 'events':
                        searchQuery = '&nameStartsWith=' + searchChars;
                        break;
                    case 'series':
                        searchQuery = '&titleStartsWith=' + searchChars;
                        break;
                    default:
                        break;
                }
            }
            let url = 'https://gateway.marvel.com/v1/public/' + type + '?ts=1&apikey=a76e4420bee50924890ee6425633932b&hash=1e8774a2170848870f6b3d2503a3ec25&limit=21' + searchQuery;
            setReloadUrl(url);
            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            console.log(data.data.offset + ' - offset ', 'count : -' + data.data.count + " " + data.data.total + " = total");
            if (data.code === 200) {
                setOffset(data.data.offset);
                setTotal(data.data.total);
                console.log(data.data.results)
                if (total > 21 * offset) {
                    document.getElementById('btnLoadMore').style.display = 'block';
                } else {
                    document.getElementById('btnLoadMore').style.display = 'none';
                }
                switch (type) {
                    case 'characters':
                        setAllChars(data.data.results);
                        setComics([]); setEvents([]); setSeries([]);
                        break;
                    case 'comics':
                        setComics(data.data.results);
                        setEvents([]); setSeries([]); setAllChars([]);
                        break;
                    case 'events':
                        setEvents(data.data.results);
                        setComics([]); setSeries([]); setAllChars([]);
                        break;
                    case 'series':
                        setSeries(data.data.results);
                        setComics([]); setEvents([]); setAllChars([]);
                        break;
                    default:
                        break;
                }
                setIsLoading(false);
            }
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }
    React.useEffect(() => {
        // eslint-disable-next-line
        GetAllChars();
        // eslint-disable-next-line
    }, [type]);

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
                    &nbsp; Find all your favourite Marvel Characters
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
                <Grid style={{ marginTop: '2rem' }}>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="type" name="row-radio-buttons-group" value={type} onChange={e => {
                            setType(e.target.value);
                        }}>
                            <FormControlLabel value="characters" control={<Radio />} label="Characters" />
                            <FormControlLabel value="comics" control={<Radio />} label="Comics" />
                            <FormControlLabel value="events" control={<Radio />} label="Events" />
                            <FormControlLabel value="series" control={<Radio />} label="Series" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Box>
            <Container maxWidth="xl">
                <Box style={{ display: isLoading ? 'none' : 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

                    {
                        allChars && allChars.length > 0 ? <>
                            {
                                allChars.map((chars, i) => {
                                    return <>
                                        <Card style={{ minWidth: 340, maxWidth: 340, margin: '10px 4px' }}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height={140}
                                                style={{ maxHeight: 240 }}
                                                image={chars.thumbnail.path + "." + chars.thumbnail.extension}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {chars.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {chars.description === "" ? "Description not available !! " : chars.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={'/marvels/view?type=characters&id=' + chars.id} >
                                                    <Button variant="contained" color="secondary">View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </>
                                })
                            }
                        </> : <div style={{ textAlign: 'center' }}>
                            <figure className={classes.fignotfound} style={{ display: type === 'characters' ? 'block' : 'none' }}>
                                <img alt="no results found !" height="154px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-Qz1RbBhuHyiAeIrQlajkXGt2aPeFVPoA&usqp=CAU" />
                            </figure>
                        </div>
                    }

                    {
                        allComics && allComics.length > 0 ? <>
                            {
                                allComics.map((chars, i) => {
                                    return <>
                                        <Card style={{ minWidth: 340, maxWidth: 340, margin: '10px 4px' }}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height={140}
                                                style={{ maxHeight: 240 }}
                                                image={chars.thumbnail.path + "." + chars.thumbnail.extension}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {chars.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={'/marvels/view?type=comics&id=' + chars.id} >
                                                    <Button variant="contained" color="secondary">View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </>
                                })
                            }
                        </> : <>
                            <figure className={classes.fignotfound} style={{ display: type === 'comics' ? 'block' : 'none' }}>
                                <img alt="no results found !" height="154px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-Qz1RbBhuHyiAeIrQlajkXGt2aPeFVPoA&usqp=CAU" />
                            </figure>
                        </>
                    }

                    {
                        allSeries && allSeries.length > 0 ? <>
                            {
                                allSeries.map((chars, i) => {
                                    return <>
                                        <Card style={{ minWidth: 340, maxWidth: 340, margin: '10px 4px' }}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height={140}
                                                style={{ maxHeight: 240 }}
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
                                            <CardActions>
                                                <Link to={'/marvels/view?type=series&id=' + chars.id} >
                                                    <Button variant="contained" color="secondary">View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </>
                                })
                            }
                        </> : <>
                            <figure className={classes.fignotfound} style={{ display: type === 'series' ? 'block' : 'none' }}>
                                <img alt="no results found !" height="154px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-Qz1RbBhuHyiAeIrQlajkXGt2aPeFVPoA&usqp=CAU" />
                            </figure>
                        </>
                    }

                    {
                        allEvets && allEvets.length > 0 ? <>
                            {
                                allEvets.map((chars, i) => {
                                    return <>
                                        <Card style={{ minWidth: 340, maxWidth: 340, margin: '10px 4px' }}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height={140}
                                                style={{ maxHeight: 240 }}
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
                                            <CardActions>
                                                <Link to={'/marvels/view?type=events&id=' + chars.id} >
                                                    <Button variant="contained" color="secondary">View</Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </>
                                })
                            }
                        </> : <>
                            <figure className={classes.fignotfound} style={{ display: type === 'events' ? 'block' : 'none' }}>
                                <img alt="no results found !" height="154px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-Qz1RbBhuHyiAeIrQlajkXGt2aPeFVPoA&usqp=CAU" />
                            </figure>
                        </>
                    }
                </Box>
                <Button style={{ display: isLoading ? 'none' : 'block', textTransform: 'none' }} onClick={LoadMore}
                    className={classes.btnLoadMore} id="btnLoadMore" variant="contained" color="secondary">Load More</Button>
                <div style={{ display: isLoading ? 'block' : 'none', textAlign: 'center' }}>
                    <CircularProgress style={{ width: '80px', height: '82px', color: '#f44336' }} />
                </div>
            </Container >
        </div >
    )
}