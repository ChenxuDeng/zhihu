import React from 'react';
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListAltIcon from '@material-ui/icons/ListAlt';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider"
import Badge from "@material-ui/core/Badge";
import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import sideBarImg from '../../assets/sideBarImg.png'
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

function SideBarTop(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            paper:{
                height:'156px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)',
                width:'100%',
                borderRadius:'0',
                marginLeft:'10px'
            },
            icon:{
                width:'26px',
                height:'26px',
                marginTop:'-5px'
            },
            iconButton:{
                padding:'0',
                marginTop:'3px',
                '&:hover':{
                    background:'transparent'
                }
            },
            bottomButton:{
                width:'100%',
                height:'55px',
                borderRadius:'0',
                color:'#8590a6',
                '&:hover':{
                    background:'transparent',
                    color:'black'
                }
            },
            badge:{
                background:'#f6f6f6',
                color:'#0084ff',
                marginTop:'18px',
                position:'relative',
                padding:'0',
                height:'17px',
                width:'17px'
            },
            button:{
                '&:hover':{
                    background:'transparent'
                }
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <div style={{display:'block'}}>
                <Paper className={classes.paper}>
                    <List>
                        <ListItem style={{justifyContent:'space-between',marginBottom:'6px'}}>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <IconButton style={{background:'#e1f1ff',height:'40px',width:'40px'}} disableRipple>
                                        <ListAltIcon className={classes.icon} style={{color:'#0084ff'}}/>
                                    </IconButton>
                                    <div style={{fontSize:'12px',color:'#444',marginTop:'6px'}}>
                                        回答问题
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <IconButton style={{background:'#fff3e2',height:'40px',width:'40px'}} disableRipple>
                                        <VideocamOutlinedIcon className={classes.icon} style={{color:'#ff9607'}}/>
                                    </IconButton>
                                    <div style={{fontSize:'12px',color:'#444',marginTop:'6px'}}>
                                        发视频
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <IconButton style={{background:'#fef9e2',height:'40px',width:'40px'}} disableRipple>
                                        <CreateOutlinedIcon className={classes.icon} style={{color:'#f4c807'}}/>
                                    </IconButton>
                                    <div style={{fontSize:'12px',color:'#444',marginTop:'6px'}}>
                                        写文章
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <IconButton style={{background:'#e5f7f7',height:'40px',width:'40px'}} disableRipple>
                                        <PostAddOutlinedIcon className={classes.icon} style={{color:'#26bfbf'}}/>
                                    </IconButton>
                                    <div style={{fontSize:'12px',color:'#444',marginTop:'6px'}}>
                                        写想法
                                    </div>
                                </div>
                            </Button>
                        </ListItem>
                        <Divider style={{background:'#f0f2f7'}}/>
                        <ListItem disableGutters style={{padding:'0'}}>
                            <Button className={classes.bottomButton} style={{borderRight:'1px solid #f0f2f7'}} disableRipple>
                                稍后答
                            </Button>
                            <Button className={classes.bottomButton} disableRipple>
                                <div>
                                    草稿箱
                                </div>
                                <Badge badgeContent={1} classes={{badge:classes.badge}}/>
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
                <Paper className={classes.paper} style={{marginTop:'10px',height:'52px'}}>
                    <List style={{padding:'0'}}>
                        <ListItem>
                            <Button className={classes.button} style={{fontSize:'14px',color:'#444'}} disableRipple>
                                <LibraryAddCheckOutlinedIcon style={{width:'17px',marginRight:'6px'}}/>
                                创作中心
                            </Button>
                            <Button className={classes.button} style={{marginLeft:'auto',fontSize:'14px',color:'#0084ff'}} disableRipple>
                                    去开通
                                <ArrowForwardIosOutlinedIcon style={{width:'14px',marginLeft:'6px',color:'#8590a6'}}/>
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
                <Paper className={classes.paper} style={{marginTop:'10px',height:'225px'}}>
                    <List style={{padding:'0'}}>
                        <ListItem disableGutters style={{justifyContent:'center'}}>
                            <img src={sideBarImg} alt='sideBarImg' style={{width:'276px'}}/>
                        </ListItem>
                        <ListItem style={{justifyContent:'space-between',marginBottom:'6px',padding:'8px 25px',marginTop:'6px'}}>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <FlashOnOutlinedIcon className={classes.icon} style={{color:'rgb(255, 207, 0)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6',textTransform:'none'}}>
                                        Live
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <LocalLibraryOutlinedIcon className={classes.icon} style={{color:'rgb(67, 212, 128)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6'}}>
                                        书店
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <FilterVintageOutlinedIcon className={classes.icon} style={{color:'rgb(0, 132, 255)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6'}}>
                                        圆桌
                                    </div>
                                </div>
                            </Button>
                        </ListItem>
                        <ListItem style={{justifyContent:'space-between',marginBottom:'6px',padding:'8px 25px'}}>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <CreateOutlinedIcon className={classes.icon} style={{color:'rgb(15, 136, 235)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6',textTransform:'none'}}>
                                        专栏
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <MonetizationOnOutlinedIcon className={classes.icon} style={{color:'rgb(84, 120, 240)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6'}}>
                                        付费咨询
                                    </div>
                                </div>
                            </Button>
                            <Button className={classes.iconButton} disableRipple>
                                <div>
                                    <MenuBookOutlinedIcon className={classes.icon} style={{color:'rgb(88, 104, 209)'}}/>
                                    <div style={{fontSize:'14px',color:'#8590a6'}}>
                                        百科
                                    </div>
                                </div>
                            </Button>
                        </ListItem>
                    </List>
                </Paper>
            </div>
        </React.Fragment>
    );
}

export default SideBarTop;