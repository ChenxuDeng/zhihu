import React from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListAltIcon from '@material-ui/icons/ListAlt';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import discoverImg1 from '../../assets/discover1.png'
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import discoverImg2 from '../../assets/discover2.png'
import discoverImg3 from '../../assets/discover3.png'
import discoverImg4 from '../../assets/discover4.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function DiscoverPage(props) {
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
                width:'490px',
                height:'450px',
                boxShadow:'0 1px 3px rgba(18,18,18,.1)'
            },
            img:{
                width:'490px',
                height:'200px',
                objectFit:'cover'
            },
            button:{
                '&:hover':{
                    background:'transparent'
                }
            },
            a:{
                fontSize:'20px',
                fontWeight:'600',
                color:'#121212',
                textDecoration:'none'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Container classes={{maxWidthMd:classes.container}} maxWidth={'md'}>
                    <div style={{display:'flex',fontSize:'25px',fontWeight:'600',marginTop:'20px'}}>
                        <ListAltIcon style={{width:'36px',height:'36px',color:'#0084ff'}}/>
                        <span style={{marginLeft:'12px'}}>最新专题</span>
                    </div>
                    <Grid container style={{marginTop:'24px'}}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <List style={{padding:'0'}}>
                                    <ListItem style={{padding:'0'}} button>
                                        <img src={discoverImg1} alt='discoverImg1' className={classes.img}/>
                                    </ListItem>
                                    <ListItem style={{marginTop:'7px',marginBottom:'7px'}}>
                                        <div style={{width:'330px'}}>
                                            <a href={'/discover'} className={classes.a}>知乎科技盐究员第二季丨带电装备硬核玩家</a>
                                            <div style={{marginTop:'3px'}}>
                                                <span style={{fontSize:'12px',color:'#999'}}>09-17 更新 · 4,758,593 浏览</span>
                                            </div>
                                        </div>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#0084ff',
                                                    background:'rgba(0,132,255,.08)',
                                                    fontWeight:'600',
                                                    minWidth:'102px',
                                                    marginTop:'10px',
                                                    marginLeft:'auto'
                                                }}>
                                            关注主题
                                        </Button>
                                    </ListItem>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Divider style={{width:'93%'}}/>
                                    </div>
                                    <ListItem style={{marginTop:'14px'}}>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @王波 | 痴迷光影十余载
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>探寻摄影的意义 - 山海星月创作记</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @堂主 | 专业的声音玩家
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>入耳式耳机应该怎么戴以避免不适？</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @李明殊 | 科技狂人
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>制作 Vlog 时有哪些必须了解的拍摄方法？</span>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item style={{marginLeft:'auto'}}>
                            <Paper className={classes.paper}>
                                <List style={{padding:'0'}}>
                                    <ListItem style={{padding:'0'}} button>
                                        <img src={discoverImg2} alt='discoverImg2' className={classes.img}/>
                                    </ListItem>
                                    <ListItem style={{marginTop:'7px',marginBottom:'7px'}}>
                                        <div style={{width:'330px'}}>
                                            <a href={'/discover'} className={classes.a}>知乎科技盐究员第二季丨带电装备硬核玩家</a>
                                            <div style={{marginTop:'3px'}}>
                                                <span style={{fontSize:'12px',color:'#999'}}>09-17 更新 · 4,758,593 浏览</span>
                                            </div>
                                        </div>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#0084ff',
                                                    background:'rgba(0,132,255,.08)',
                                                    fontWeight:'600',
                                                    minWidth:'102px',
                                                    marginTop:'10px',
                                                    marginLeft:'auto'
                                                }}>
                                            关注主题
                                        </Button>
                                    </ListItem>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Divider style={{width:'93%'}}/>
                                    </div>
                                    <ListItem style={{marginTop:'14px'}}>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @王波 | 痴迷光影十余载
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>探寻摄影的意义 - 山海星月创作记</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @堂主 | 专业的声音玩家
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>入耳式耳机应该怎么戴以避免不适？</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @李明殊 | 科技狂人
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>制作 Vlog 时有哪些必须了解的拍摄方法？</span>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop:'24px'}}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <List style={{padding:'0'}}>
                                    <ListItem style={{padding:'0'}} button>
                                        <img src={discoverImg3} alt='discoverImg3' className={classes.img}/>
                                    </ListItem>
                                    <ListItem style={{marginTop:'7px',marginBottom:'7px'}}>
                                        <div style={{width:'330px'}}>
                                            <a href={'/discover'} className={classes.a}>知乎科技盐究员第二季丨带电装备硬核玩家</a>
                                            <div style={{marginTop:'3px'}}>
                                                <span style={{fontSize:'12px',color:'#999'}}>09-17 更新 · 4,758,593 浏览</span>
                                            </div>
                                        </div>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#0084ff',
                                                    background:'rgba(0,132,255,.08)',
                                                    fontWeight:'600',
                                                    minWidth:'102px',
                                                    marginTop:'10px',
                                                    marginLeft:'auto'
                                                }}>
                                            关注主题
                                        </Button>
                                    </ListItem>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Divider style={{width:'93%'}}/>
                                    </div>
                                    <ListItem style={{marginTop:'14px'}}>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @王波 | 痴迷光影十余载
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>探寻摄影的意义 - 山海星月创作记</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @堂主 | 专业的声音玩家
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>入耳式耳机应该怎么戴以避免不适？</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @李明殊 | 科技狂人
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>制作 Vlog 时有哪些必须了解的拍摄方法？</span>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item style={{marginLeft:'auto'}}>
                            <Paper className={classes.paper}>
                                <List style={{padding:'0'}}>
                                    <ListItem style={{padding:'0'}} button>
                                        <img src={discoverImg4} alt='discoverImg4' className={classes.img}/>
                                    </ListItem>
                                    <ListItem style={{marginTop:'7px',marginBottom:'7px'}}>
                                        <div style={{width:'330px'}}>
                                            <a href={'/discover'} className={classes.a}>知乎科技盐究员第二季丨带电装备硬核玩家</a>
                                            <div style={{marginTop:'3px'}}>
                                                <span style={{fontSize:'12px',color:'#999'}}>09-17 更新 · 4,758,593 浏览</span>
                                            </div>
                                        </div>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#0084ff',
                                                    background:'rgba(0,132,255,.08)',
                                                    fontWeight:'600',
                                                    minWidth:'102px',
                                                    marginTop:'10px',
                                                    marginLeft:'auto'
                                                }}>
                                            关注主题
                                        </Button>
                                    </ListItem>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <Divider style={{width:'93%'}}/>
                                    </div>
                                    <ListItem style={{marginTop:'14px'}}>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @王波 | 痴迷光影十余载
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>探寻摄影的意义 - 山海星月创作记</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @堂主 | 专业的声音玩家
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>入耳式耳机应该怎么戴以避免不适？</span>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant={'contained'}
                                                className={classes.button}
                                                disableElevation
                                                disableRipple
                                                style={{
                                                    color:'#8590a6',
                                                    background:'#f6f6f6',
                                                    padding:'0 8px',
                                                    fontSize:'12px'
                                                }}
                                        >
                                            @李明殊 | 科技狂人
                                        </Button>
                                        <span style={{fontSize:'15px',marginLeft:'12px'}}>制作 Vlog 时有哪些必须了解的拍摄方法？</span>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{textAlign:'center',height:'48px',padding:'48px 0'}}>
                        <Button className={classes.button}
                                variant={'contained'}
                                disableElevation
                                disableRipple
                                style={{
                                    color:'#8590a6',
                                    background:'#fff',
                                    borderRadius:'25px',
                                    fontWeight:'600',
                                    height:'48px',
                                    padding:'0 14px 0 24px'
                                }}
                        >
                            查看更多专题
                            <ArrowForwardIosIcon style={{width:'15px'}}/>
                        </Button>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default DiscoverPage;