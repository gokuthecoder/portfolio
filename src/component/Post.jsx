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
            demo_url: 'https://netlify',
            description: "Download torrent file and upload it, but in future add automation with telegram"
        },
        {
            title: 'Job Scout',
            image_url: 'https://i.imgur.com/Ty1SuuJ.png',
            repo_url: 'https://github.com/gokuthecoder/Job_scout',
            demo_url: 'https://netlify',
            description: "Job portal web application admin add job post , job seeker apply job"
        },
        {
            title: 'Movies Downloading website',
            image_url: 'https://i.imgur.com/ruSrQMv.png',
            repo_url: 'https://github.com/gokuthecoder/reelflix',
            demo_url: 'https://netlify',
            description: "my deaming future project, from my college, i add much feature in thi website and automation"
        },
        {
            title: 'Forum web application',
            image_url: 'https://i.imgur.com/ZH5ZDn6.png',
            repo_url: 'https://github.com/gokuthecoder/forum_web_application',
            demo_url: 'https://netlify',
            description: "Forum web-applicatication, user able to add post and see post, frontend is on way.."
        },
        {
            title: 'Portfolio website',
            image_url: 'https://i.imgur.com/zQPEWQv.png',
            repo_url: 'https://github.com/gokuthecoder/portfolio',
            demo_url: 'https://netlify',
            description: "It highlights my professional journey and accomplishments, offering a glimpse into my capabilities and achievements."
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
                                        {e.description}
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
