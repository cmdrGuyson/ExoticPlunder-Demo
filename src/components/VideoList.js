import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
//import TextFild from "@material-ui/core/TextField";
import Video from "./Video";
import axios from "axios";

class VideoList extends Component {

    state = {
        videos: [],
        searchString: ""
    }

    constructor() {
        super()
        this.getVideos();
    }

    getVideos = async () => {

        try{
            const res = await axios(
                `http://localhost:6969/site/pornhub/most-viewed/1`
            );
            this.setState({videos: res.data.video});
            console.log(this.state.videos)
        }catch(e){
            console.log(e);
        }
    }

    render() {
        return(
            <div>
                {this.state.videos ? (
                    <div>
                        <Grid container spacing={5} style={{padding: 24}}>
                            {this.state.videos.map((currentVideo) => (
                                <Grid item xs={12} sm={6} lg={3} xl={3} key={currentVideo.link}>
                                    <Video video={currentVideo} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>    
                ) : "No videos found"}
            </div>
        )
    }
}

export default VideoList;