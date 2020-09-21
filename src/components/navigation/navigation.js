import React,{useState,useEffect} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import logo from '../../assets/zhihu.svg'
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow"
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import avatar from '../../assets/avatar.jpg'
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Divider from "@material-ui/core/Divider";
import guanjia from '../../assets/guanjia.jpg'
import renzheng from '../../assets/renzheng.svg'
import CreateIcon from '@material-ui/icons/Create';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {connect} from 'react-redux'
import * as action from '../../store/action/index'
import Slide from "@material-ui/core/Slide";
import {Link} from 'react-router-dom'

function Navigation(props) {
    useEffect(()=>{
        if(window.location.pathname==='/'){
            setIndex(0)
        }else if(window.location.pathname==='/discover'){
            setIndex(1)
        }
    },[])

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
            tabs:{
                color:'#8590a6',
            },
            tab:{
                minWidth:'auto',
                height:'52px',
                padding:'0',
                margin:'0 15px',
                marginLeft:'32px',
                fontSize:'15px',
                '&:hover':{
                    color:'black'
                }
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
                width:'305px',
                border:'1px solid #ebebeb',
                padding:'4px 10px',
                height:'24px',
                marginLeft:'23px',
                transition:'0.3s'
            },
            focusPaper:{
                display:'flex',
                alignItems:'center',
                background:'#f6f6f6',
                width:'380px',
                border:'1px solid #999',
                padding:'4px 10px',
                height:'24px',
                marginLeft:'23px',
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
            rightIcons:{
                color:'#8590a6',
                height:'26px',
                width:'26px',
                margin:'0 17px',
                cursor:'pointer'
            },
            badge:{
                right:'20px',
                top:'3px',
                padding:'0 3px',
                height:'19px',
                minWidth:'19px',
                border:'2px solid white'
            },
            listItem:{
                fontSize:'14px',
                color:'#8590a6'
            },
            msgListItem:{
                fontSize:'14px',
                width:'360px',
                justifyContent:'center',
                height:'48px',
                color:'#121212',
                '&:hover':{
                    color:'#8590a6'
                }
            },
            tooltip:{
                padding:'0',
                background:'white',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)'
            },
            msgTooltip:{
                padding:'0',
                background:'white',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                maxWidth:'360px'
            },
            tooltipArrow:{
                color:'white'
            },
            msgButton:{
                padding:'0',
                '&:hover':{
                    background:'transparent'
                },
                fontSize:'14px',
                color:'#8590a6'
            },
            bellIcon1:{
                color:'#8590a6'
            },
            bellIcon2:{
                color:'#8590a6'
            },
            bellIcon3:{
                color:'#8590a6'
            },
            bellIconSelected:{
                color:'#0084ff'
            },
            bellButton1:{
                minWidth:'120px',
                borderRadius:'0',
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            },
            bellButton2:{
                minWidth:'120px',
                borderLeft:'1px solid #ebebeb',
                borderRight:'1px solid #ebebeb',
                borderRadius:'0',
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            },
            bellButton3:{
                minWidth:'120px',
                borderRadius:'0',
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            },
            a:{
                textDecoration:'none',
                fontSize:'14px',
                color:'#175199',
                '&:visited':{
                    color:'#175199'
                }
            },
            chatBubbleIcon:{
                marginRight:'42px',
                marginTop:'6px',
                height:'21px',
                width:'21px',
                color:'#8590a6',
                marginLeft:'23px',
                cursor:'pointer'
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

    const [index,setIndex]=useState(0)
    const [focus,setFocus]=useState(false)

    const question=<React.Fragment>
        <List style={{padding:'0',height:'350px',overflowY:'scroll'}}>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;邀请你回答&nbsp;</span>
                    <a href='#' className={classes.a}>人类如何减少身体的痛苦?</a>
                </div>
            </ListItem>
            <Divider style={{width:'90%',margin:'0 auto'}}/>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <a href='#' className={classes.a}>夏夜晚风</a>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;的提问等你来答&nbsp;</span>
                    <a href='#' className={classes.a}>任豪和林彦俊你更吃谁的颜？</a>
                </div>
            </ListItem>
            <Divider style={{width:'90%',margin:'0 auto'}}/>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <a href='#' className={classes.a}>青春无敌</a>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;的提问等你来答&nbsp;</span>
                    <a href='#' className={classes.a}>上初一后每天早起晚睡，上课总是很困，该怎么办？</a>
                </div>
            </ListItem>
            <Divider style={{width:'90%',margin:'0 auto'}}/>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <a href='#' className={classes.a}>最后的轻语</a>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;的提问等你来答&nbsp;</span>
                    <a href='#' className={classes.a}> 怎么看大街上戴耳机走路的人？</a>
                </div>
            </ListItem>
            <Divider style={{width:'90%',margin:'0 auto'}}/>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <a href='#' className={classes.a}></a>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;邀请你回答&nbsp;</span>
                    <a href='#' className={classes.a}>  宅家的你是如何与自己自处的1？</a>
                </div>
            </ListItem>
            <Divider style={{width:'90%',margin:'0 auto'}}/>
            <ListItem disableRipple style={{padding:'15px',paddingTop:'18px'}}>
                <div style={{lineHeight:'24px'}}>
                    <a href='#' className={classes.a}></a>
                    <span style={{fontSize:'14px',color:'#121212'}}>&nbsp;邀请你回答&nbsp;</span>
                    <a href='#' className={classes.a}>  你们养猫都多长时间了？</a>
                </div>
            </ListItem>
        </List>
    </React.Fragment>

    const message=<React.Fragment>
        <div style={{height:'350px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div>
                <NotificationsNoneIcon style={{color:'#ebeef5',width:'130px',height:'100px'}}/>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <span style={{fontSize:'15px',color:'#8590a6'}}>还没有消息</span>
                </div>
            </div>
        </div>
    </React.Fragment>

    const like=<React.Fragment>
        <div style={{height:'350px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div>
                <NotificationsNoneIcon style={{color:'#ebeef5',width:'130px',height:'100px'}}/>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <span style={{fontSize:'15px',color:'#8590a6'}}>还没有消息</span>
                </div>
            </div>
        </div>
    </React.Fragment>

    let content=null
    if(props.question){
        content=question
    }else if(props.message){
        content=message
    }else if(props.like){
        content=like
    }else{
        content=null
    }

    return (
        <React.Fragment>
            <AppBar position={'fixed'} className={classes.appbar} elevation={0}>
                <Slide in={props.navigation}>
                    <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                        <Toolbar classes={{regular:classes.toolbar}} disableGutters>
                            <Button className={classes.logoButton} disableRipple component={Link} to={'/'} onClick={props.recommendOnClick}>
                                <img src={logo} alt='logo' className={classes.logo}/>
                            </Button>
                            <Tabs className={classes.tabs} value={index} classes={{indicator:classes.indicator}}>
                                <Tab label={'首页'}
                                     className={classes.tab}
                                     classes={{wrapper:classes.tabWrapper,selected:classes.selected}}
                                     onClick={()=>{setIndex(0);props.recommendOnClick()}}
                                     disableRipple
                                     component={Link}
                                     to={'/'}
                                />
                                <Tab label={'发现'}
                                     className={classes.tab}
                                     classes={{wrapper:classes.tabWrapper,selected:classes.selected}}
                                     style={{marginLeft:'20px'}}
                                     onClick={()=>{setIndex(1)}}
                                     disableRipple
                                     component={Link}
                                     to={'/discover'}
                                />
                                <Tab label={'等你回答'}
                                     className={classes.tab}
                                     classes={{wrapper:classes.tabWrapper,selected:classes.selected}}
                                     style={{marginLeft:'20px'}}
                                     onClick={()=>{setIndex(2)}}
                                     disableRipple
                                />
                            </Tabs>
                            <ClickAwayListener onClickAway={()=>{setFocus(false)}}>
                                <Paper elevation={0} className={focus?classes.focusPaper:classes.paper}>
                                    <InputBase className={classes.inputBase} placeholder={'搜索你感兴趣的内容...'} onFocus={()=>{setFocus(true)}}/>
                                    <SearchIcon className={classes.searchIcon}/>
                                </Paper>
                            </ClickAwayListener>
                            <Grow in={!focus}>
                                <Button className={classes.button}>
                                    提问
                                </Button>
                            </Grow>
                            <div style={{display:'flex',alignItems:'center',marginLeft:'auto'}}>
                                <ClickAwayListener onClickAway={props.closeNotification}>
                                    <div>
                                        <Tooltip title={
                                            <React.Fragment>
                                                <List style={{padding:'0',height:'50px'}}>
                                                    <ListItem className={classes.msgListItem} disableRipple>
                                                        <Button className={classes.bellButton1} disableRipple onClick={props.openQuestion}>
                                                            <FormatListBulletedIcon className={props.question?classes.bellIconSelected:classes.bellIcon1}/>
                                                        </Button>
                                                        <Button className={classes.bellButton2} disableRipple onClick={props.openMessage}>
                                                            <GroupIcon className={props.message?classes.bellIconSelected:classes.bellIcon2}/>
                                                        </Button>
                                                        <Button className={classes.bellButton3} disableRipple onClick={props.openLike}>
                                                            <FavoriteIcon className={props.like?classes.bellIconSelected:classes.bellIcon3}/>
                                                        </Button>
                                                    </ListItem>
                                                    <Divider/>
                                                </List>
                                                {content}
                                                <Divider/>
                                                <List style={{padding:'0'}}>
                                                    <ListItem style={{height:'40px'}}>
                                                        <Button className={classes.msgButton} disableRipple style={{marginLeft:'-10px'}}>
                                                            <SettingsIcon style={{fontSize:'16px',marginRight:'3px',marginBottom:'2px'}}/>
                                                            设置
                                                        </Button>
                                                        <Button className={classes.msgButton} disableRipple style={{marginLeft:'auto',marginRight:'-2px'}}>
                                                            查看全部通知
                                                        </Button>
                                                    </ListItem>
                                                </List>
                                            </React.Fragment>
                                        }
                                                 interactive
                                                 arrow
                                                 disableFocusListener
                                                 disableHoverListener
                                                 disableTouchListener
                                                 open={props.notification}
                                                 classes={{tooltip:classes.msgTooltip,arrow:classes.tooltipArrow}}
                                        >
                                            <Badge badgeContent={1} color={'error'} classes={{badge:classes.badge}}>
                                                <NotificationsIcon className={classes.rightIcons} onClick={props.openNotification}/>
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                </ClickAwayListener>
                                <ClickAwayListener onClickAway={props.closeMessageIcon}>
                                    <div>
                                        <Tooltip title={
                                            <React.Fragment>
                                                <List style={{padding:'0',height:'400px'}}>
                                                    <ListItem className={classes.msgListItem} button disableRipple>
                                                        我的私信
                                                    </ListItem>
                                                    <Divider/>
                                                    <ListItem button disableRipple>
                                                        <img src={guanjia} alt='guanjia' style={{height:'40px',width:'40px',padding:'10px 0'}}/>
                                                        <div style={{marginLeft:'15px',marginTop:'3px'}}>
                                                            <div style={{display:'flex',alignItems:'center'}}>
                                                                <span style={{color:'#121212',fontSize:'15px'}}>知乎小管家</span>
                                                                <img src={renzheng} alt='renzheng' style={{height:'20px',width:'20px'}}/>
                                                            </div>
                                                            <span style={{color:'#8590a6',fontSize:'14px',lineHeight:'23px'}}>亲爱的 知乎用户 你好: 欢迎你来到知乎...</span>
                                                        </div>
                                                    </ListItem>
                                                </List>
                                                <Divider/>
                                                <List style={{padding:'0'}}>
                                                    <ListItem style={{height:'40px'}}>
                                                        <Button className={classes.msgButton} disableRipple style={{marginLeft:'-2px'}}>
                                                            <CreateIcon style={{fontSize:'16px',marginRight:'3px',marginBottom:'2px'}}/>
                                                            写新私信
                                                        </Button>
                                                        <Button className={classes.msgButton} disableRipple style={{marginLeft:'auto',marginRight:'-2px'}}>
                                                            查看全部私信
                                                        </Button>
                                                    </ListItem>
                                                </List>
                                            </React.Fragment>
                                        }
                                                 interactive
                                                 arrow
                                                 open={props.messageIcon}
                                                 classes={{tooltip:classes.msgTooltip,arrow:classes.tooltipArrow}}
                                        >
                                            <ChatBubbleIcon className={classes.chatBubbleIcon} onClick={props.openMessageIcon}/>
                                        </Tooltip>
                                    </div>
                                </ClickAwayListener>
                                <ClickAwayListener onClickAway={props.closeLikeIcon}>
                                    <div>
                                        <Tooltip title={
                                            <List style={{padding:'0'}}>
                                                <ListItem className={classes.listItem} button>
                                                    <PersonIcon style={{fontSize:'20px',marginRight:'3px'}}/>
                                                    <span style={{paddingTop:'2px'}}>我的主页</span>
                                                </ListItem>
                                                <ListItem className={classes.listItem} button>
                                                    <SettingsIcon style={{fontSize:'18px',marginRight:'3px',marginLeft:'1px'}}/>
                                                    <span style={{paddingTop:'2px'}}>设置</span>
                                                </ListItem>
                                                <ListItem className={classes.listItem} button>
                                                    <PowerSettingsNewIcon style={{fontSize:'18px',marginRight:'3px',marginLeft:'1px'}}/>
                                                    <span style={{paddingTop:'2px'}}>退出</span>
                                                </ListItem>
                                            </List>
                                        }
                                                 interactive
                                                 arrow
                                                 open={props.likeIcon}
                                                 classes={{tooltip:classes.tooltip,arrow:classes.tooltipArrow}}
                                        >
                                            <Avatar variant={'square'} style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={props.openLikeIcon}>
                                                <img src={avatar} alt='avatar' style={{height:'30px',width:'30px'}}/>
                                            </Avatar>
                                        </Tooltip>
                                    </div>
                                </ClickAwayListener>
                            </div>
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
        recommendOnClick:()=>{dispatch(action.recommendOnClick())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);