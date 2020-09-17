import React,{useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import titleImg from '../../../assets/titleImg.jpg'
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FullArticle from "./fullArticle/fullArticle";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function Articles(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            container:{
                padding:'0',
                maxWidth:'1000px'
            },
            paper:{
                width:'694px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                borderRadius:'0'
            },
            listNav:{
                height:'59px',
                padding:'0'
            },
            tab:{
                minWidth:'58px',
                fontSize:'16px',
                fontWeight:'500',
                color:'#121212',
                margin:'0 10px'
            },
            tabSelected:{
                minWidth:'58px',
                fontSize:'16px',
                fontWeight:'500',
                color:'#0084ff',
                margin:'0 10px'
            },
            title:{
                fontSize:'18px',
                fontWeight:'600',
                lineHeight:1.6
            },
            titleContent:{
                display:'flex',
                fontSize:'15px',
                alignItems:'center'
            },
            titleImg:{
                height:'105px',
                width:'190px',
                objectFit:'cover',
                borderRadius:'3px',
                margin:'10px 0'
            },
            titleText:{
                height:'100px',
                width:'446px',
                lineHeight:1.67,
                marginLeft:'16px'
            },
            button:{
                color:'#175199',
                fontSize:'14px',
                padding:'0',
                marginTop:'-2px',
                marginLeft:'3px',
                '&:hover':{
                    color:'#8590a6',
                    background:'transparent'
                }
            },
            textButton:{
                padding:'0',
                textAlign:'left',
                fontSize:'15px',
                '&:hover':{
                    background:'transparent',
                    color:'#8590a6'
                }
            },
            iconButton:{
                fontSize:'14px',
                color:'#8590a6',
                '&:hover':{
                    background:'transparent',
                    color:'#646464'
                }
            },
            agreeButton:{
                color:'#0084ff',
                background:'rgba(0,132,255,.1)',
                paddingLeft:'7px',
                height:'32px',
                paddingTop:'4px',
                '&:hover':{
                    background:'rgba(0,132,255,.2)'
                }
            },
            disagreeButton:{
                color:'#0084ff',
                background:'rgba(0,132,255,.1)',
                minWidth:'32px',
                padding:'6px 6px',
                marginLeft:'5px',
                height:'32px',
                paddingTop:'4px',
                '&:hover':{
                    background:'rgba(0,132,255,.2)'
                }
            },
            toolTip:{
                padding:'0',
                background:'white',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)'
            },
            arrow:{
                color:'white'
            }
        }
    })
    const classes=useStyle()

    const [toolTip,setToolTip]=useState(false)

    const fullContent=<FullArticle/>
    const titleContent=<React.Fragment>
        <div className={classes.titleContent}>
            <img src={titleImg} alt='titleImg' className={classes.titleImg}/>
            <Button className={classes.textButton} disableRipple onClick={props.openFullArticle}>
                <div className={classes.titleText}>
                    {'堂主：真的。而且不止7506，任何一款二三十年前上市的耳机型号，如果今天还在产在销，几乎无一例外都是很强的。最近连着在私信和值乎里面被问到7506的事情，我才发现原来7506真的已经热到不行，京东上都回到1200价位了。吃惊！'.substring(0,100)+'...'}
                    <Button className={classes.button} disableRipple onClick={props.openFullArticle}>
                        阅读全文
                        <KeyboardArrowDownIcon/>
                    </Button>
                </div>
            </Button>
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:'3px',marginBottom:'10px'}}>
            <Button variant={'contained'} disableElevation className={classes.agreeButton} disableRipple>
                <ArrowDropUpIcon/>
                赞同 937
            </Button>
            <Button variant={'contained'} disableElevation className={classes.disagreeButton} disableRipple>
                <ArrowDropDownIcon/>
            </Button>
            <Button className={classes.iconButton} style={{marginLeft:'16px'}} disableRipple>
                <ChatBubbleIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                添加评论
            </Button>
            <Button className={classes.iconButton} disableRipple>
                <SendIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                分享
            </Button>
            <Button className={classes.iconButton} disableRipple>
                <StarIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                收藏
            </Button>
            <Button className={classes.iconButton} disableRipple>
                <FavoriteIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                喜欢
            </Button>
            <ClickAwayListener onClickAway={()=>{setToolTip(false)}}>
                <div>
                    <Tooltip title={
                        <List style={{padding:'0'}}>
                            <ListItem style={{fontSize:'14px',color:'#8590a6'}} button>
                                没有帮助
                            </ListItem>
                            <ListItem style={{fontSize:'14px',color:'#8590a6'}} button>
                                举报
                            </ListItem>
                            <ListItem style={{fontSize:'14px',color:'#8590a6'}} button>
                                不感兴趣
                            </ListItem>
                        </List>
                    }
                             interactive
                             arrow
                             open={toolTip}
                             classes={{tooltip:classes.toolTip,arrow:classes.arrow}}
                    >
                        <Button className={classes.iconButton} style={{minWidth:'36px'}} disableRipple onClick={()=>{setToolTip(!toolTip)}}>
                            <MoreHorizIcon style={{fontSize:'15px'}}/>
                        </Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </div>
    </React.Fragment>

    return (
        <React.Fragment>
            <Paper className={classes.paper} elevation={0}>
                <List style={{padding:'0'}}>
                    <ListItem className={classes.listNav}>
                        <Tabs value={0} indicatorColor={'none'}>
                            <Tab label={'推荐'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}}/>
                            <Tab label={'关注'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}}/>
                            <Tab label={'热榜'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}}/>
                        </Tabs>
                    </ListItem>
                    <Divider style={{background:'#f0f2f7'}}/>
                    <ListItem>
                        <div style={{marginTop:'6px'}}>
                            <div className={classes.title}>索尼 7506 耳机真的那么棒吗？</div>
                            {props.fullArticle?fullContent:titleContent}
                        </div>
                    </ListItem>
                    <Divider/>
                </List>
            </Paper>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        fullArticle:state.frontPage.fullArticle
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openFullArticle:()=>{dispatch(action.openFullArticle())},
        closeFullArticle:()=>{dispatch(action.closeFullArticle())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);