import * as React from 'react';
import "./Post.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Post() {

    const projects = [
        {
            title: 'Torrent to Google Drive',
            image_url: 'https://i.ibb.co/JRg3gjS/mqdefault.jpg',
            repo_url: 'https://github.com/gokuthecoder/torrent_2_drive',
            demo_url: 'https://netlify'
        },
        {
            title: 'Job Scout',
            image_url: 'https://i.ibb.co/JRg3gjS/mqdefault.jpg',
            repo_url: 'https://github.com/gokuthecoder/Job_scout',
            demo_url: 'https://netlify'
        },
    ];

    return (
        <>
            <div className="post__collection">
                {
                    projects?.map((e, index) => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={e.image_url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {e.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a href={e.repo_url}>repo link</a>
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        </>
    );
}
