import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const video = (props) => {
    return(
        <div>
            { props.video ? (
                <Card style={{height: 350}}>
                    <CardMedia style={{height:0, padding: '30%'}} image={props.video.thumb} />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="h2">
                           <b>{props.video.name}</b>
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="small" color="secondary" variant="contained" href={props.video.link} target="_blank">
                            WATCH
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    );
}

export default video;