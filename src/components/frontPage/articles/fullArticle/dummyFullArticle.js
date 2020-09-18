import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SendIcon from "@material-ui/icons/Send";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import renzheng from "../../../../assets/renzheng.svg";
import author2 from '../../../../assets/author2.jpg'
import * as action from "../../../../store/action";
import {connect} from 'react-redux'
import {Divider} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function DummyFullArticle(props) {
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
        return ()=>{
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const scrollHandler=()=>{
        const article2=document.getElementById('article2')
        if(window.scrollY+726>=article2.offsetHeight){
            setBottomBar(false)
        }else if(window.scrollY+726<=article2.offsetHeight){
            setBottomBar(true)
        }
    }

    const useStyle=makeStyles((theme)=>{
        return{
            container:{
                padding:'0',
                maxWidth:'1000px'
            },
            paper:{
                width:'694px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                borderRadius:'0',
                marginBottom:'6px'
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
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                maxWidth:'600px'
            },
            arrow:{
                color:'white'
            },
            fixedBar:{
                display:'flex',
                alignItems:'center',
                marginTop:'20px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                background:'white',
                width:'654px',
                padding:'10px 20px',
                marginLeft:'-16px',
                position:'fixed',
                bottom:'0'
            },
            detailButton:{
                minWidth:'100px',
                paddingTop:'0',
                '&:hover':{
                    background:'transparent'
                }
            }
        }
    })
    const classes=useStyle()

    const [toolTip,setToolTip]=useState(false)
    const [fixedTooltip,setFixedTooltip]=useState(false)
    const [bottomBar,setBottomBar]=useState(true)

    const bar=<React.Fragment>
        <Slide in={props.fullArticle} direction={'up'}>
            <div className={classes.fixedBar}>
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
                <ClickAwayListener onClickAway={()=>{setFixedTooltip(false)}}>
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
                                 open={fixedTooltip}
                                 classes={{tooltip:classes.toolTip,arrow:classes.arrow}}
                        >
                            <Button className={classes.iconButton} style={{minWidth:'36px'}} disableRipple onClick={()=>{setFixedTooltip(!fixedTooltip)}}>
                                <MoreHorizIcon style={{fontSize:'15px'}}/>
                            </Button>
                        </Tooltip>
                    </div>
                </ClickAwayListener>
                <Button className={classes.iconButton} disableRipple style={{marginLeft:'auto'}} onClick={()=>{props.closeDummyArticle();}}>
                    收起
                    <ExpandLessIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                </Button>
            </div>
        </Slide>
    </React.Fragment>

    return (
        <React.Fragment>
            <div id={'article2'}>
                <div style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                    <Tooltip title={
                        <List style={{padding:'0'}}>
                            <ListItem style={{width:'360px',height:'66px'}}>
                                <div style={{display:'flex',alignItems:'center',position:'relative'}}>
                                    <img src={author2} alt='author2' style={{height:'72px',width:'72px',position:'absolute',top:'-30px',borderRadius:'3px',border:'2px solid white'}}/>
                                    <div style={{marginLeft:'85px',lineHeight:1.5}}>
                                        <div style={{fontSize:'16px',color:'#121212'}}>孟德尔</div>
                                        <div style={{fontSize:'14px',color:'#121212'}}>氷山一角</div>
                                    </div>
                                </div>
                            </ListItem>
                            <Divider style={{background:'#f0f2f7'}}/>
                            <ListItem style={{width:'360px',height:'46px'}}>
                                <div style={{display:'flex'}}>
                                    <img src={renzheng} alt='renzheng' style={{height:'18px',width:'18px',marginRight:'6px'}}/>
                                    <div style={{fontSize:'14px',color:'#444',fontWeight:'600'}}>单机游戏、家用游戏机、游戏 等 6 个话题的优秀回答者</div>
                                </div>
                            </ListItem>
                            <Divider style={{background:'#f0f2f7'}}/>
                            <ListItem style={{width:'360px',justifyContent:'center'}}>
                                <Button className={classes.detailButton} disableRipple>
                                    <div style={{lineHeight:'25px'}}>
                                        <div>
                                            <span style={{fontSize:'14px',color:'#8590a6'}}>回答</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>10,078</span>
                                        </div>
                                    </div>
                                </Button>
                                <Button className={classes.detailButton} disableRipple>
                                    <div style={{lineHeight:'25px'}}>
                                        <div>
                                            <span style={{fontSize:'14px',color:'#8590a6'}}>文章</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>154</span>
                                        </div>
                                    </div>
                                </Button>
                                <Button className={classes.detailButton} disableRipple>
                                    <div style={{lineHeight:'25px'}}>
                                        <div>
                                            <span style={{fontSize:'14px',color:'#8590a6'}}>关注者</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>879,297</span>
                                        </div>
                                    </div>
                                </Button>
                            </ListItem>
                            <ListItem style={{width:'360px',justifyContent:'center',paddingTop:'0',paddingBottom:'20px'}} disableGutters>
                                <Button style={{fontSize:'14px',color:'white',background:'#0084ff',minWidth:'140px'}} variant={'contained'} disableElevation>
                                    <AddIcon/>
                                    关注他
                                </Button>
                                <Button variant={'outlined'} style={{fontSize:'14px',color:'#8590a6',minWidth:'140px',marginLeft:'16px'}}>
                                    <ChatBubbleIcon style={{fontSize:'16px',marginRight:'3px'}}/>
                                    发私信
                                </Button>
                            </ListItem>
                        </List>
                    }
                             interactive
                             classes={{tooltip:classes.toolTip}}
                             placement={'bottom-start'}
                    >
                    <img src={author2} alt='author2' style={{height:'38px',width:'38px'}}/>
                    </Tooltip>
                    <div style={{marginLeft:'10px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{fontSize:'14px',color:'#444',fontWeight:'600'}}>孟德尔</div>
                            <img src={renzheng} alt='renzheng' style={{height:'18px',width:'18px'}}/>
                        </div>
                        <div style={{fontSize:'14px',color:'#646464'}}>氷山一角</div>
                    </div>
                </div>
                <div style={{fontSize:'14px',color:'#8590a6',marginTop:'10px'}}>937 人赞同了该回答</div>
                <div style={{marginTop:'6px',fontSize:'15px'}}>
                    算上神游，这是大陆玩家被骗的第4次了。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    不管国行有没有后门，国行永远是劣于外版的残废主机，这个现实无法改变。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    最大的悲剧是，受益于国行的人都是买外版主机，因为国行让外版降价了，因为建立了大陆服务器。而买国行的人全都吃亏了。没游戏，没网络，被厂商涮，被外版用户嘲笑。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    我觉得，不管国行有没有意义，这种靠牺牲大部分来服务少数人的模式，是不应该存在的。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    最好是国行出了但是不卖。这样就没人会受害。外版该有的好处大部分还有。
                </div>
                <div style={{display:'flex',alignItems:'center',marginTop:'20px',marginBottom:'10px'}}>
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
                    <Button className={classes.iconButton} disableRipple style={{marginLeft:'auto'}} onClick={()=>{props.closeDummyArticle()}}>
                        收起
                        <ExpandLessIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                    </Button>
                </div>
            </div>
            {bottomBar?bar:null}
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        dummyArticle:state.frontPage.dummyArticle
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeDummyArticle:()=>{dispatch(action.closeDummyArticle())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DummyFullArticle);