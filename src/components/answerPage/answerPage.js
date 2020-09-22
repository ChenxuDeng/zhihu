import React,{useEffect,useState} from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import StarIcon from '@material-ui/icons/Star';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import CreateIcon from '@material-ui/icons/Create';
import Divider from "@material-ui/core/Divider";
import SideBarTop from "../sideBarTop/sideBarTop";
import SideBarBottom from "../sideBarBottom/sideBarBottom";
import questionAvatar from '../../assets/questionAvatar.jpg'
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from '@material-ui/icons/Close';
import * as action from '../../store/action/index'
import {connect} from 'react-redux'
import {Facebook} from 'react-content-loader'

function AnswerPage(props) {
    useEffect(()=>{
        props.fetchQuestion()
    },[])

    const useStyle=makeStyles((theme)=>{
        return{
            container:{
                padding:'0',
                maxWidth:'1000px'
            },
            wrapper:{
                background:'#f6f6f6',
                paddingTop:'10px',
                marginTop:'-12px'
            },
            paper:{
                width:'694px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                borderRadius:'0'
            },
            topButton:{
                color:'#0084ff',
                background:'rgba(0,132,255,.08)',
                fontWeight:'500',
                fontSize:'14px',
                borderRadius:'16px',
                height:'32px',
                padding:'6px 12px',
                paddingTop:'4px',
                marginRight:'20px',
                '&:hover':{
                    background:'rgba(0,132,255,.08)'
                }
            },
            questionButton:{
                minWidth:'96px',
                height:'28px',
                borderRadius:'3px',
                color:'#fff',
                background:'#0084ff',
                border:'1px solid #0084ff',
                fontSize:'14px',
                padding:'0',
                '&:hover':{
                    background:'#0084ff'
                }
            },
            a:{
                fontSize:'18px',
                fontWeight:'600',
                color:'#121212',
                textDecoration:'none'
            },
            closeIcon:{
                position:'absolute',
                right:'16px',
                top:'6px',
                width:'20px',
                color:'rgb(133, 144, 166)',
                cursor:'pointer'
            }
        }
    })
    const classes=useStyle()

    const [closeIcon,setCloseIcon]=useState(false)

    const loader=<React.Fragment>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
        <Facebook style={{margin:'20px 20px -20px 20px'}}/>
    </React.Fragment>

    let questions=(props.questions || []).map((questions,index)=>{
            return <React.Fragment>
                <ListItem style={{position:'relative'}}>
                    <CloseIcon className={classes.closeIcon}/>
                    <div style={{width:'634px'}}>
                        <div style={{display:'flex'}}>
                            <Avatar style={{width:'20px',height:'20px',marginRight:'8px'}}>
                                <img src={questionAvatar} alt='questionAvatar' style={{width:'20px',height:'20px'}}/>
                            </Avatar>
                            <span style={{fontSize:'15px',color:'rgb(133, 144, 166)'}}>你可能感兴趣</span>
                        </div>
                        <div style={{marginTop:'12px'}}>
                            <a href={'#'} className={classes.a}>
                                {questions.title}
                            </a>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginTop:'18px',marginBottom:'7px'}}>
                            <Button className={classes.questionButton}>
                                <CreateIcon style={{width:'18px',marginRight:'3px'}}/>
                                写回答
                            </Button>
                            <div style={{marginLeft:'16px'}}>
                                <span style={{fontSize:'14px',color:'#8590a6'}}>{questions.answer} 回答 · {questions.subscribed} 关注</span>
                            </div>
                        </div>
                    </div>
                </ListItem>
                <Divider style={{background:'#f0f2f7',width:'95.5%',margin:'0 auto'}}/>
            </React.Fragment>
        })

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                    <div style={{display:'flex'}}>
                        <div>
                            <Paper style={{position:'fixed',top:'52px',borderRadius:'0',zIndex:'1000',width:'700px',background:'#f6f6f6',marginLeft:'-3px'}} elevation={0}>&nbsp;</Paper>
                            <Paper className={classes.paper} style={{height:'64px',position:'fixed',zIndex:'2000'}} elevation={0}>
                                <List>
                                    <ListItem>
                                        <Button className={classes.topButton}>
                                            <StarIcon style={{width:'19px',marginRight:'2px'}}/>
                                            为你推荐
                                        </Button>
                                        <Button className={classes.topButton} style={{background:'rgba(133,144,166,.12)',color:'#444'}}>
                                            <WhatshotIcon style={{width:'18px',marginRight:'2px',color:'#8590a6'}}/>
                                            人气问题
                                        </Button>
                                        <Button className={classes.topButton} style={{background:'rgba(133,144,166,.12)',color:'#444'}}>
                                            <FiberNewIcon style={{width:'18px',marginRight:'2px',color:'#8590a6'}}/>
                                            最新问题
                                        </Button>
                                        <Button className={classes.topButton} style={{background:'rgba(133,144,166,.12)',color:'#444'}}>
                                            <CreateIcon style={{width:'18px',marginRight:'2px',color:'#8590a6'}}/>
                                            邀请回答
                                        </Button>
                                    </ListItem>
                                </List>
                                <Divider style={{background:'#f0f2f7'}}/>
                            </Paper>
                        </div>
                        <Paper className={classes.paper} style={{marginTop:'64px'}}>
                            <List>
                                <ListItem style={{position:'relative'}}>
                                    <CloseIcon className={classes.closeIcon}/>
                                    <div style={{width:'634px'}}>
                                        <div style={{display:'flex'}}>
                                            <Avatar style={{width:'20px',height:'20px',marginRight:'8px'}}>
                                                <img src={questionAvatar} alt='questionAvatar' style={{width:'20px',height:'20px'}}/>
                                            </Avatar>
                                            <span style={{fontSize:'15px',color:'rgb(133, 144, 166)'}}>你可能感兴趣</span>
                                        </div>
                                        <div style={{marginTop:'12px'}}>
                                            <a href={'#'} className={classes.a}>
                                                高中初中一些不是很重要的班委（比如说纪律委员，劳动委员）安排给调皮的差生合适吗？
                                            </a>
                                        </div>
                                        <div style={{display:'flex',alignItems:'center',marginTop:'18px',marginBottom:'7px'}}>
                                            <Button className={classes.questionButton}>
                                                <CreateIcon style={{width:'18px',marginRight:'3px'}}/>
                                                写回答
                                            </Button>
                                            <div style={{marginLeft:'16px'}}>
                                                <span style={{fontSize:'14px',color:'#8590a6'}}>107 回答 · 121 关注</span>
                                            </div>
                                        </div>
                                    </div>
                                </ListItem>
                                <Divider style={{background:'#f0f2f7',width:'95.5%',margin:'0 auto'}}/>
                                {props.loading?loader:questions}
                            </List>
                        </Paper>
                        <div style={{marginLeft:'auto',marginRight:'8px'}}>
                            <SideBarTop/>
                            <SideBarBottom/>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        questions:state.questionData.questions,
        loading:state.questionData.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchQuestion:()=>{dispatch(action.fetchQuestion())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerPage);