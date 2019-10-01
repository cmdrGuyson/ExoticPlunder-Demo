import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {

    const style = {
        background : '#151319'
    };
    
    
    return(
        <div>
            <AppBar position="static" style={style}>
                <Toolbar >
                    <Typography variant="subtitle1" color="inherit">
                        ExoticPlunder
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;