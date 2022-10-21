import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        marginLeft: "50px"
    },
    searchbar: {
        height: "30px",
        width: "270px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        marginTop: "30px"
    },
    searchicon: {
        //position:"absolute",
        color: "#000000",
        marginLeft: "-210px",
        marginTop: "2px"

    },
    caption: {
        color: "lightgray",
        marginTop: "-25px",
        marginLeft: "-55px"

    },
    intro: {
        marginTop: "30px",
        // height:"50px",
        // width:"160px",
        // border:"1px solid red",
        marginLeft: "-85px"
    },
    greeting: {
        marginTop: "-5px",
        marginLeft: "-70px",
        fontSize: "16px",
        fontWeight: "700"
    },
    greet: {
        marginTop: "-15px",
        fontSize: "12px",
        marginLeft: "-75px",
    },
    // cards:{
    //     marginBottom:"50px"
    // },
    firstCard: {
        marginTop: "20px",
        height: "140px",
        width: "400px",
        // border:"1px solid red",
        marginLeft: "7px",
        borderRadius: "15px",
        backgroundColor: "#E8E8E8"
    },
    icons: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5px"
    },
    views: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "0px"
    },
    numbers: {
        display: "flex",
        justifyContent: "space-around",
    },
    visibileIcon: {
        height: "25px",
        width: "30px",
        padding: "2px",
        // border:"1px solid red",
        borderRadius: "50%",
        backgroundColor: "#FFEEE2"
    },
    secondRow: {
        display: "flex",
        justifyContent: "space-between"

    },
    secondCard: {
        height: "80px",
        width: "180px",
        // border:"1px solid red",
        marginTop: "15px",
        borderRadius: "15px",
        backgroundColor: "#FFEEE2"
    },
    thirdCard: {
        height: "80px",
        width: "180px",
        //border:"1px solid red",
        marginTop: "15px",
        borderRadius: "15px",
        backgroundColor: "#EEFCEF"
    },
    circular:{
        marginTop:"-60px",
        marginLeft:"110px",
    },
    percentage:{
        marginTop:"-38px",
        fontWeight:"700",
        marginLeft:"-10px"
    }

}))

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <div className={classes.searchbar}>
                <SearchOutlinedIcon className={classes.searchicon} />
                <p className={classes.caption}>Search for stats</p>
            </div>
            <div className={classes.intro}>
                <p className={classes.greeting}>Hello David</p>
                <p className={classes.greet}>Welcome back!</p>
            </div>
            <div classNames={classes.cards}>
                <div className={classes.firstCard}>
                    <div className={classes.icons}>
                        <div className={classes.visibileIcon} style={{ marginTop: "10px" }}><VisibilityOutlinedIcon /></div>
                        <div className={classes.visibileIcon} style={{ marginTop: "10px" }}><VisibilityOutlinedIcon /></div>
                        <div className={classes.visibileIcon} style={{ marginTop: "10px" }}><VisibilityOutlinedIcon /></div>
                    </div>
                    <div className={classes.views}>
                        <p style={{ color: "#585858" }}>views</p>
                        <p style={{ color: "#585858" }}>visits</p>
                        <p style={{ color: "#585858" }}>orders</p>
                    </div>
                    <div className={classes.numbers}>
                        <p style={{ marginTop: "0px", fontWeight: "600", fontSize: "22px" }}>500</p>
                        <p style={{ marginTop: "0px", fontWeight: "600", fontSize: "22px" }}>2100</p>
                        <p style={{ marginTop: "0px", fontWeight: "600", fontSize: "22px" }}>5100</p>
                    </div>
                </div>
                <div className={classes.secondRow}>
                    <div className={classes.secondCard}>
                        <p style={{ marginTop: "2px", marginLeft: "-100px", fontWeight: "700" }}>Sales</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-60px", fontSize: "10px" }}>Total sales Today</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-100px", fontWeight: "700" }}>$500</p>
                        <div className={classes.circular}>
                        <CircularProgress variant="determinate" value={55} style={{color:"black"}}  />
                        <p className={classes.percentage}>55%</p>
                        </div>
                    </div>
                    <div className={classes.thirdCard}>
                    <p style={{ marginTop: "2px", marginLeft: "-100px", fontWeight: "700" }}>Profit</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-60px", fontSize: "10px" }}>per day ratio</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-100px", fontWeight: "700" }}>$150</p>
                        <div className={classes.circular}>
                        <CircularProgress variant="determinate" value={30} style={{color:"black"}}  />
                        <p className={classes.percentage}>30%</p>
                        </div>
                    </div>
                </div>
                <div className={classes.secondRow}>
                    <div className={classes.secondCard}>
                        <p style={{ marginTop: "2px", marginLeft: "-100px", fontWeight: "700" }}>orders</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-60px", fontSize: "10px" }}>Total Order Today</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-100px", fontWeight: "700" }}>1000</p>
                        <div className={classes.circular}>
                        <CircularProgress variant="determinate" value={80} style={{color:"black"}}  />
                        <p className={classes.percentage} style={{marginRight:"-15px"}}>80%</p>
                        </div>
                    </div>
                    <div className={classes.thirdCard}>
                    <p style={{ marginTop: "2px", marginLeft: "-100px", fontWeight: "700" }}>visits</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-60px", fontSize: "10px" }}>Total visits Today</p>
                        <p style={{ marginTop: "-12px", marginLeft: "-100px", fontWeight: "700" }}>$400</p>
                        <div className={classes.circular}>
                        <CircularProgress variant="determinate" value={70} style={{color:"black"}}  />
                        <p className={classes.percentage} >70%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home