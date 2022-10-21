import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import Home from './Home';
import Banner from './Banner';


const useStyles = makeStyles((theme) => ({
    main:{
        height:"600px",
        width:"80%",
        marginLeft:"10%",
        marginTop:"25px",
        backgroundColor:"lightgray"
    },
    InnerMain:{
        height:"530px",
        width:"70%",
        //border:"1px solid black"
        backgroundColor:"#F4F5F9",
       position:"absolute",
      top:"10%",
      left:"15%",
      display:"flex",
      flexWrap:"nowrap"

    }

  
  }));

const Screen = () => {
    const classes= useStyles();
  return (
    <div className={classes.main}>
     <div className={classes.InnerMain}>
        <Menu/>
        <Home/>
        <Banner/>
     </div>
    </div>
  )
}

export default Screen
