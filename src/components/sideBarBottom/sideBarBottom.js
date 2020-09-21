import React,{useState,useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import StarIcon from '@material-ui/icons/Star';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import CopyrightIcon from '@material-ui/icons/Copyright';
import badgeImg from '../../assets/badge.png'
import {connect} from 'react-redux'
import * as action from '../../store/action/index'

function SideBarBottom(props) {
    useEffect(()=>{
        const scrollHandler=()=>{
            if(window.scrollY>=463){
                props.hideSideBar()
            }else if(window.scrollY<463){
                props.showSideBar()
            }
        }
        window.addEventListener('scroll',scrollHandler)
        return ()=>{
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const useStyle=makeStyles((theme)=>{
        return{
            paper:{
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                width:'100%',
                borderRadius:'0',
                marginLeft:'10px',
                marginTop:'10px'
            },
            div:{
                width:'27px',
                height:'28px',
                fontSize:'12px',
                background:'#f6f6f6',
                color:'#8590a6',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'auto'
            },
            hoverDiv:{
                width:'27px',
                height:'28px',
                fontSize:'12px',
                background:'white',
                color:'#8590a6',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'auto'
            },
            a:{
                textDecoration:'none',
                fontSize:'13px',
                color:'#8590a6',
                '&:hover':{
                    color:'#175199'
                }
            },
            fixed:{
                position:'fixed',
                top:'50px',
                width:'298px'
            }
        }
    })
    const classes=useStyle()
    const [hover,setHover]=useState(false)
    const [hover1,setHover1]=useState(false)
    const [hover2,setHover2]=useState(false)

    return (
        <React.Fragment>
            <div className={props.sideBar?classes.fixed:null}>
                <Paper className={classes.paper}>
                    <List>
                        <ListItem button onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} disableRipple>
                            <StarIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>我的收藏</span>
                            <div className={hover?classes.hoverDiv:classes.div}>
                                0
                            </div>
                        </ListItem>
                        <ListItem button onMouseOver={()=>{setHover1(true)}} onMouseLeave={()=>{setHover1(false)}} disableRipple>
                            <LiveHelpIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>我关注的问题</span>
                            <div className={hover1?classes.hoverDiv:classes.div}>
                                0
                            </div>
                        </ListItem>
                        <ListItem button onMouseOver={()=>{setHover2(true)}} onMouseLeave={()=>{setHover2(false)}} disableRipple>
                            <PersonAddIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>我的邀请</span>
                            <div className={hover2?classes.hoverDiv:classes.div}>
                                31
                            </div>
                        </ListItem>
                        <ListItem button disableRipple>
                            <AccountBalanceWalletIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>我的余额</span>
                        </ListItem>
                        <ListItem button disableRipple>
                            <AssignmentIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>站务中心</span>
                        </ListItem>
                        <ListItem button disableRipple>
                            <HeadsetMicIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>帮助中心</span>
                        </ListItem>
                        <ListItem button disableRipple>
                            <CopyrightIcon style={{width:'20px',color:'#8590a6'}}/>
                            <span style={{fontSize:'14px',color:'#8590a6',marginLeft:'10px'}}>版权服务中心</span>
                        </ListItem>
                    </List>
                </Paper>
                <div style={{marginTop:'10px',width:'100%',marginLeft:'10px'}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <a href='/' className={classes.a}>刘看山</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>知乎指南</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>知乎协议</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>知乎隐私保护指引</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>应用</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>工作</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>申请开通知乎机构号</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>侵权举报</a><span style={{color:'#8590a6'}}>&nbsp;·&nbsp;</span>
                        <a href='/' className={classes.a}>网上有害信息举报专区</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>京 ICP 证 110745 号</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>京 ICP 备 13052560 号 - 1</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <img src={badgeImg} alt={'badgeImg'}/>
                        <a href='/' className={classes.a}>&nbsp;京公网安备 11010802010035 号</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>互联网药品信息服务资格证书</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>（京）- 非经营性 - 2017 - 0067</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>违法和不良信息举报：010-82716601</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>儿童色情信息举报专区</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>互联网药品信息服务资格证书</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>证照中心</a>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginTop:'6px'}}>
                        <a href='/' className={classes.a}>联系我们 © 2020 知乎</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        sideBar:state.frontPage.sideBar
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        showSideBar:()=>{dispatch(action.sideBarShow())},
        hideSideBar:()=>{dispatch(action.sideBarHide())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBarBottom);