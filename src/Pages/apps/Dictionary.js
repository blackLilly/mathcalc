import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Button, TextField, CircularProgress
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
    const [searchChars, setSearchChars] = React.useState('universe');
    const [isLoading, setIsLoading] = React.useState(false);
    const [ResultWords, setResultWords] = React.useState([]);

    const GetAllChars = async (searchword) => {
        try {
            //debugger;
            console.log(searchChars);
            setIsLoading(true);
            setResultWords([]);
            let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
            if (typeof (searchword) == 'string') {
                url += searchword;
            } else {
                url += searchChars;
            }

            // Storing response
            const response = await fetch(url);
            // Storing data in form of JSON
            var data = await response.json();
            if (data) {
                console.log(data);
                setResultWords(data);
            } else {
                setResultWords([]);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }
    React.useEffect(() => {
        // eslint-disable-next-line
        let params = new URLSearchParams(document.location.search);
        // eslint-disable-next-line
        GetAllChars(params.get('word'));
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.root}  >
            <Helmet>
                <title>Free English Dictionary | find the menings, definitions, parts of speech of all your words</title>
                <meta name="description" content="find the menings, definitions, parts of speech of all your words" />
                <meta name="keywords" content="find the menings, definitions, parts of speech of all your words" />
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
                            aria-label="Search" placeholder="Search your favourite word" value={searchChars} />
                    </Grid>
                    <Grid className={classes.griditem} item sm={3} md={3} lg={3}>
                        <Button variant="contained" className={classes.btnInput} color="secondary"
                            onClick={GetAllChars}
                        >Search</Button>
                    </Grid>
                </Grid>
            </Box>
            <Container maxWidth={'md'} p={3} style={{ display: isLoading ? 'none' : 'block', textAlign: 'left' }} >
                {
                    ResultWords && ResultWords.length > 0 ?
                        ResultWords.map((wrd, i) => {
                            return <>
                                <h1 className={"title is-1 m-0"}>{wrd.word}</h1>
                                <b> Phonetic:</b> {wrd.phonetic} <br />

                                {
                                    wrd.phonetics.filter(p => p.audio.length > 0).map((phn) => {
                                        return <>
                                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                                <span>{phn.text} &nbsp; :- &nbsp;</span>
                                                <audio controls title={phn.text}>
                                                    <source src={phn.audio} type="audio/mpeg"></source>
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>
                                        </>
                                    })
                                }
                                <br />
                                <h2 className="title is-2">Meanings (Parts Of Speech)</h2>
                                <div style={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        {
                                            wrd.meanings.map((mngs) => {
                                                return <>
                                                    <Grid item md={4} lg={4} style={{ minWidth: 340, maxWidth: 340, margin: '10px 4px' }}>
                                                        <Typography component={"h3"} className={"title is-3"}>: {mngs.partOfSpeech}</Typography>

                                                        {
                                                            mngs.antonyms && mngs.antonyms.length > 0 ?
                                                                mngs.antonyms.map((ant => {
                                                                    return <>
                                                                        <Typography >  <b>Antonyms :</b> {mngs.antonyms.join(',')}</Typography>
                                                                    </>
                                                                })) : <></>
                                                        }

                                                        {
                                                            mngs.synonyms && mngs.synonyms.length > 0 ?
                                                                mngs.synonyms.map((ant => {
                                                                    return <>
                                                                        <Typography> <b> Synonyms :</b> {mngs.synonyms.join(',')}</Typography>
                                                                    </>
                                                                })) : <></>
                                                        }

                                                        <br />
                                                        <Typography component={"h5"} className="title is-5"> Definitions </Typography>
                                                        <ul>
                                                            {
                                                                mngs.definitions.map((def) => {
                                                                    return <>
                                                                        <li style={{ 'list-style-type': 'disc', marginLeft: '20px' }}>{def.definition}</li>
                                                                    </>
                                                                })
                                                            }
                                                        </ul>
                                                    </Grid>
                                                </>
                                            })
                                        }

                                    </Grid>

                                    <p>
                                        <b> Source :</b>
                                        <ul>
                                            {
                                                wrd.sourceUrls && wrd.sourceUrls.length > 0 ?
                                                    wrd.sourceUrls.map((src => {
                                                        return <>

                                                            <li><a style={{ 'list-style-type': 'disc', marginLeft: '20px', color: 'blue' }} href={src} target="_blank" rel="noreferrer">{src}</a></li>
                                                        </>
                                                    })) : <></>
                                            }

                                        </ul>
                                    </p>

                                </div>

                            </>
                        }
                        ) : <></>
                }


                <div style={{ display: isLoading ? 'block' : 'none', textAlign: 'center' }}>
                    <CircularProgress style={{ width: '80px', height: '82px', color: '#f44336' }} />
                </div>
            </Container>
        </div >
    )
}