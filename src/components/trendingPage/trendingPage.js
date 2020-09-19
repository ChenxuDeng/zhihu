import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import * as action from "../../store/action";
import {connect} from 'react-redux'
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import SideBarTop from "../sideBarTop/sideBarTop";

function TrendingPage(props) {
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
            agreedButton:{
                color:'white',
                background:'#0084ff',
                paddingLeft:'7px',
                height:'32px',
                paddingTop:'4px',
                '&:hover':{
                    background:'#0084ff'
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
            disagreedButton:{
                color:'white',
                background:'#0084ff',
                minWidth:'32px',
                padding:'6px 6px',
                marginLeft:'5px',
                height:'32px',
                paddingTop:'4px',
                '&:hover':{
                    background:'#0084ff'
                }
            },
            toolTip:{
                padding:'0',
                background:'white',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)'
            },
            arrow:{
                color:'white'
            },
            wrapper:{
                background:'#f6f6f6',
                paddingTop:'10px',
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                    <div style={{display:'flex'}}>
                        <Paper className={classes.paper} elevation={0}>
                            <List style={{padding:'0'}}>
                                <ListItem className={classes.listNav}>
                                    <Tabs value={2} indicatorColor={'none'}>
                                        <Tab label={'推荐'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}} component={Link} to={'/'}/>
                                        <Tab label={'关注'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}} component={Link} to={'/subscribed'}/>
                                        <Tab label={'热榜'} className={classes.tab} disableRipple classes={{selected:classes.tabSelected}} component={Link} to={'trending'}/>
                                    </Tabs>
                                </ListItem>
                                <Divider style={{background:'#f0f2f7'}}/>
                                <ListItem style={{justifyContent:'center'}}>
                                    <div style={{textAlign:'center'}}>
                                        <BatteryAlertIcon style={{width:'130px',height:'100px',color:'rgb(235, 238, 245)'}}/>
                                        <div style={{fontSize:'15px',color:'grey'}}>
                                            这网站 <span style={{fontWeight:'bold',fontSize:'17px'}}>好难啊...</span>
                                        </div>
                                    </div>
                                </ListItem>
                            </List>
                        </Paper>
                        <SideBarTop/>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        fullArticle:state.frontPage.fullArticle,
        dummyArticle:state.frontPage.dummyArticle,
        agree:state.frontPage.agree,
        disagree:state.frontPage.disagree,
        dummyAgree:state.frontPage.dummyAgree,
        dummyDisagree:state.frontPage.dummyDisagree
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openFullArticle:()=>{dispatch(action.openFullArticle())},
        closeFullArticle:()=>{dispatch(action.closeFullArticle())},
        openDummyArticle:()=>{dispatch(action.openDummyArticle())},
        agreePressed:()=>{dispatch(action.agree())},
        disagreePressed:()=>{dispatch(action.disagree())},
        dummyAgreePressed:()=>{dispatch(action.dummyAgree())},
        dummyDisagreePressed:()=>{dispatch(action.dummyDisagree())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage);