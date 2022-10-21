import { makeStyles } from '@material-ui/core'
import React from 'react'
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
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme)=>({
    main:{
        marginLeft:"15px",
        marginTop:"30px",
        height:"88%",
        width:"220px",
        backgroundColor:"black",
        border:"1px solid black",
        borderRadius:"20px"
    }

}))

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.main}>
        <p style={{color:"white",marginTop:"40px"}}>Sales Revenue</p>
        <div>
            
        <ListItem>
                    <ListItemIcon>
                        <AlarmOffIcon style={{color:"white"}}/>
                    </ListItemIcon>
                    <ListItemText style={{color:"white"}}>230k</ListItemText>
                </ListItem>
                
                <ListItem>
                    <ListItemIcon>
                        <PersonOutlinedIcon style={{color:"white"}}/>
                    </ListItemIcon>
                    <ListItemText style={{color:"white",fontWeight:"700"}}>8.549k</ListItemText>
                </ListItem>
                
                <ListItem>
                    <ListItemIcon>
                        <AcUnitIcon style={{color:"white"}}/>
                    </ListItemIcon>
                    <ListItemText style={{color:"white"}}>1.423k</ListItemText>
                </ListItem>
                
                <ListItem>
                    <ListItemIcon>
                        <HomeOutlinedIcon style={{color:"white"}}/>
                    </ListItemIcon>
                    <ListItemText style={{color:"white"}}>$9745</ListItemText>
                </ListItem>
        </div>
    </div>
  )
}

export default Banner