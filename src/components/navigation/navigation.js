import React,{useState} from 'react';
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
import ForumIcon from '@material-ui/icons/Forum';
import Avatar from "@material-ui/core/Avatar";
import avatar from '../../assets/avatar.jpg'
import Badge from "@material-ui/core/Badge";
import SvgIcon from "@material-ui/icons/Search";
import message from '../../assets/message.svg'

function Navigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            appbar:{
                height:'52px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
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
                top:'3px'
            }
        }
    })
    const classes=useStyle()

    const [index,setIndex]=useState(0)
    const [focus,setFocus]=useState(false)

    return (
        <React.Fragment>
            <AppBar position={'sticky'} className={classes.appbar} elevation={0}>
                <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                    <Toolbar classes={{regular:classes.toolbar}} disableGutters>
                        <img src={logo} alt='logo' className={classes.logo}/>
                        <Tabs className={classes.tabs} value={index} classes={{indicator:classes.indicator}}>
                            <Tab label={'首页'}
                                 className={classes.tab}
                                 classes={{wrapper:classes.tabWrapper,selected:classes.selected}}
                                 onClick={()=>{setIndex(0)}}
                                 disableRipple
                            />
                            <Tab label={'发现'}
                                 className={classes.tab}
                                 classes={{wrapper:classes.tabWrapper,selected:classes.selected}}
                                 style={{marginLeft:'20px'}}
                                 onClick={()=>{setIndex(1)}}
                                 disableRipple
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
                                <InputBase className={classes.inputBase} placeholder={'搜索...'} onFocus={()=>{setFocus(true)}}/>
                                <SearchIcon className={classes.searchIcon}/>
                            </Paper>
                        </ClickAwayListener>
                        <Grow in={!focus}>
                            <Button className={classes.button}>
                                提问
                            </Button>
                        </Grow>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'auto'}}>
                            <Badge badgeContent={1} color={'error'} classes={{badge:classes.badge}}>
                                <NotificationsIcon className={classes.rightIcons}/>
                            </Badge>
                            <img src={message} alt={'message'} className={classes.rightIcons} style={{marginRight:'36px',height:'21px',width:'21px'}}/>
                            <Avatar variant={'square'} style={{height:'30px',width:'30px',cursor:'pointer'}}>
                                <img src={avatar} alt='avatar' style={{height:'30px',width:'30px'}}/>
                            </Avatar>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}

export default Navigation;