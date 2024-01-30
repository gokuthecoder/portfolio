import './Post.css'
import { Helmet } from 'react-helmet';

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

    // Additional projects can be added as needed


    return (
        <>
            < Helmet >
                <title>project collection</title>
            </Helmet >
            <div className="post__collection">
                {
                    projects?.map((element) => (
                        <div className="outer__box">
                            <div className="inner__box">
                                <img src={element.image_url} alt="" className='image__url' />
                            </div>
                            <div className='content_box'>
                                <p >{element.title}</p>
                                <div className="btn__group">
                                    <a href={element.repo_url}>Project</a>
                                    {/* <a href={element.demo_url}>Views</a> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


