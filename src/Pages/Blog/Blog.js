import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Typography, Card, CardMedia, CardContent
} from '@material-ui/core';
import Helmet from 'react-helmet';
import VerticalAds from '../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    maincintainer: {
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        }
    }
}));

export default function Marvel() {
    const classes = useStyles();

    const [allComics, setAllComics] = React.useState([]);

    React.useEffect(() => {

        fetch('https://api.nasa.gov/planetary/apod?api_key=k8TAFlSmb2BuXEB36zcWCy4Td4J8gDNA6IViQJHQ&count=10').then(res => res.json()).then(res => {
            console.log(res);
            setAllComics(res)
        })


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
                <Grid>
                    <Grid item sm={12} md={9} lg={9}>
                        <div>


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
                                                            image={chars.url}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h6" component="h6">
                                                                {chars.title}
                                                            </Typography>
                                                            <Typography gutterBottom variant="p" component="p">
                                                                {chars.explanation}
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


                        </div>
                    </Grid>
                    <Grid item sm={12} md={3} lg={3}>
                        <VerticalAds></VerticalAds>
                    </Grid>
                </Grid>

            </Container >
        </div >
    )
}