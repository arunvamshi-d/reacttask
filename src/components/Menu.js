import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

const useStyles = makeStyles((theme) => ({
    MenuMain: {
        height: "530px",
        width: "25%",
        // borderLeft:"1px solid black"
        border: "1px solid lightgray",
        borderLeft: "0px",
        bordeRight: "1px solid yellow",
        borderTop: "0px",
        borderBottom: "0px"
    },
    MenuList:{
        position:"absolute",
        top:"80px"
    },
    singleListIcon:{
       position:"absolute",
       top:"20px"
    }


}));

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.MenuMain}>
              <ListItem className={classes.singleListIcon}>
                    <ListItemIcon>
                        <ListOutlinedIcon/>
                    </ListItemIcon>
                </ListItem>
            <div className={classes.MenuList}>
          
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EventNoteOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Projects</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccountBalanceOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Billings</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Team Members</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EqualizerOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Stats</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SettingsOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                </ListItem>
            </div>
        </div>
    )
}

export default Menu