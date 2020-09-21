import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/zhihu.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import * as action from "../../store/action";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Slide from "@material-ui/core/Slide";

function ScrollNavigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            appbar:{
                height:'52px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                minWidth:'1100px'
            },
            toolbar:{
                minHeight:'52px'
            },
            container:{
                padding:'0',
                maxWidth:'1000px'
            },
            logo:{
                padding:'0',
                width:'80px',
                marginLeft:'-7px'
            },
            tab:{
                minWidth:'auto',
                height:'52px',
                padding:'0',
                margin:'0 20px',
                marginLeft:'32px',
                fontSize:'16px',
                color:'#121212'
            },
            tabWrapper:{
                padding:'0',
                width:'auto'
            },
            indicator:{
                height:'3px'
            },
            selected:{
                color:'#444',
                fontWeight:'600'
            },
            paper:{
                display:'flex',
                alignItems:'center',
                background:'#f6f6f6',
                width:'200px',
                border:'1px solid #ebebeb',
                padding:'4px 10px',
                height:'24px',
                marginLeft:'auto',
                transition:'0.3s'
            },
            focusPaper:{
                display:'flex',
                alignItems:'center',
                background:'#f6f6f6',
                width:'200px',
                border:'1px solid #999',
                padding:'4px 10px',
                height:'24px',
                marginLeft:'auto',
                transition:'0.3s'
            },
            inputBase:{
                width:'326px',
                fontSize:'14px'
            },
            searchIcon:{
                marginLeft:'auto',
                height:'23px',
                width:'23px',
                color:'#8590a6',
                cursor:'pointer'
            },
            button:{
                background:'#0084ff',
                color:'white',
                fontSize:'14px',
                marginLeft:'16px',
                fontWeight:'400',
                minWidth:'58px',
                height:'34px',
                '&:hover':{
                    background:'#0084ff'
                }
            },
            selectedTab:{
                minWidth:'auto',
                height:'52px',
                padding:'0',
                margin:'0 20px',
                marginLeft:'32px',
                fontSize:'16px',
                color:'#0084ff'
            },
            toolBar:theme.mixins.toolbar,
            logoButton:{
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            }
        }
    })
    const classes=useStyle()

    const [focus,setFocus]=useState(false)

    return (
        <React.Fragment>
            <AppBar position={'fixed'} className={classes.appbar} elevation={0} style={{overflow:'hidden'}}>
                <Slide in={!props.navigation} direction={'up'}>
                    <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                        <Toolbar classes={{regular:classes.toolbar}} disableGutters>
                            <Button className={classes.logoButton} disableRipple component={Link} to={'/'} onClick={props.recommendOnClick}>
                                <img src={logo} alt='logo' className={classes.logo}/>
                            </Button>
                            <Tabs indicatorColor={'none'} value={props.index}>
                                <Tab label={'推荐'}
                                     className={classes.tab}
                                     classes={{selected:classes.selectedTab}}
                                     disableRipple
                                     component={Link}
                                     to={'/'}
                                     onClick={props.recommendOnClick}
                                />
                                <Tab label={'关注'}
                                     className={classes.tab}
                                     classes={{selected:classes.selectedTab}}
                                     style={{marginLeft:'20px'}}
                                     disableRipple
                                     component={Link}
                                     to={'/subscribed'}
                                     onClick={props.subscribedOnClick}
                                />
                                <Tab label={'热榜'}
                                     className={classes.tab}
                                     classes={{selected:classes.selectedTab}}
                                     style={{marginLeft:'20px'}}
                                     disableRipple
                                     component={Link}
                                     to={'/trending'}
                                     onClick={props.trendingOnClick}
                                />
                            </Tabs>
                            <ClickAwayListener onClickAway={()=>{setFocus(false)}}>
                                <Paper elevation={0} className={focus?classes.focusPaper:classes.paper}>
                                    <InputBase className={classes.inputBase} placeholder={'搜索你感兴趣的内容...'} onFocus={()=>{setFocus(true)}}/>
                                    <SearchIcon className={classes.searchIcon}/>
                                </Paper>
                            </ClickAwayListener>
                            <Button className={classes.button}>
                                提问
                            </Button>
                        </Toolbar>
                    </Container>
                </Slide>
            </AppBar>
            <div className={classes.toolBar}/>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        question:state.navigation.question,
        message:state.navigation.message,
        like:state.navigation.like,
        notification:state.navigation.notification,
        messageIcon:state.navigation.messageIcon,
        likeIcon:state.navigation.likeIcon,
        index:state.frontPage.index,
        navigation:state.navigation.navigation,
        scrolledNavigation:state.navigation.scrolledNavigation
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openQuestion:()=>{dispatch(action.openQuestion())},
        openMessage:()=>{dispatch(action.openMessage())},
        openLike:()=>{dispatch(action.openLike())},
        openNotification:()=>{dispatch(action.openNotification())},
        closeNotification:()=>{dispatch(action.closeNotification())},
        openMessageIcon:()=>{dispatch(action.openMessageIcon())},
        closeMessageIcon:()=>{dispatch(action.closeMessageIcon())},
        openLikeIcon:()=>{dispatch(action.openLikeIcon())},
        closeLikeIcon:()=>{dispatch(action.closeLikeIcon())},
        recommendOnClick:()=>{dispatch(action.recommendOnClick())},
        subscribedOnClick:()=>{dispatch(action.subscribedOnClick())},
        trendingOnClick:()=>{dispatch(action.trendingOnClick())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScrollNavigation);