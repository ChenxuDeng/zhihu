import React,{useState,useEffect} from 'react';
import aurthor from '../../../../assets/aurthor.jpg'
import renzheng from '../../../../assets/renzheng.svg'
import img1 from '../../../../assets/img1.jpg'
import img2 from '../../../../assets/img2.jpg'
import titleImg from '../../../../assets/titleImg.jpg'
import img4 from '../../../../assets/img4.jpg'
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
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import * as action from '../../../../store/action/index'
import {connect} from 'react-redux'
import Slide from "@material-ui/core/Slide";
import {Divider} from "@material-ui/core";
import detailBackground from '../../../../assets/detailBackground.jpg'
import AddIcon from '@material-ui/icons/Add';

function FullArticle(props) {
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
        return ()=>{
            window.removeEventListener('scroll',scrollHandler)
        }
    },[])

    const scrollHandler=()=>{
        const article1=document.getElementById('article1')
        if(window.scrollY+726>=article1.offsetHeight){
            setBottomBar(false)
        }else if(window.scrollY+726<=article1.offsetHeight){
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
                marginLeft:'-22px',
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
                <Button className={classes.iconButton} disableRipple style={{marginLeft:'auto'}} onClick={()=>{props.closeFullArticle();}}>
                    收起
                    <ExpandLessIcon style={{fontSize:'15px',marginRight:'6px'}}/>
                </Button>
            </div>
        </Slide>
    </React.Fragment>

    return (
        <React.Fragment>
            <div id={'article1'}>
                <div style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                    <Tooltip title={
                        <List style={{padding:'0'}}>
                            <ListItem style={{width:'360px',padding:'0'}} disableGutters>
                                    <img src={detailBackground} alt='detailBackground' style={{width:'360px'}}/>
                            </ListItem>
                            <ListItem style={{width:'360px',height:'66px'}}>
                                <div style={{display:'flex',alignItems:'center',position:'relative'}}>
                                    <img src={aurthor} alt='aurthor' style={{height:'72px',width:'72px',position:'absolute',top:'-30px',borderRadius:'3px',border:'2px solid white'}}/>
                                    <div style={{marginLeft:'85px',lineHeight:1.5}}>
                                        <div style={{fontSize:'16px',color:'#121212'}}>堂主</div>
                                        <div style={{fontSize:'14px',color:'#121212'}}>不為苟且得意。不為黑暗辯護。</div>
                                    </div>
                                </div>
                            </ListItem>
                            <Divider style={{background:'#f0f2f7'}}/>
                            <ListItem style={{width:'360px',height:'46px'}}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <img src={renzheng} alt='renzheng' style={{height:'18px',width:'18px'}}/>
                                    <div style={{fontSize:'14px',color:'#444',fontWeight:'600'}}>科技盐究员</div>
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
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>1,470</span>
                                        </div>
                                    </div>
                                </Button>
                                <Button className={classes.detailButton} disableRipple>
                                    <div style={{lineHeight:'25px'}}>
                                        <div>
                                            <span style={{fontSize:'14px',color:'#8590a6'}}>文章</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>67</span>
                                        </div>
                                    </div>
                                </Button>
                                <Button className={classes.detailButton} disableRipple>
                                    <div style={{lineHeight:'25px'}}>
                                        <div>
                                            <span style={{fontSize:'14px',color:'#8590a6'}}>关注者</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:'19px',fontWeight:'700'}}>123,452</span>
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
                        <img src={aurthor} alt='aurthor' style={{height:'38px',width:'38px'}}/>
                    </Tooltip>
                    <div style={{marginLeft:'10px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{fontSize:'14px',color:'#444',fontWeight:'600'}}>堂主</div>
                            <img src={renzheng} alt='renzheng' style={{height:'18px',width:'18px'}}/>
                        </div>
                        <div style={{fontSize:'14px',color:'#646464'}}>科技盐究员</div>
                    </div>
                </div>
                <div style={{fontSize:'14px',color:'#8590a6',marginTop:'10px'}}>937 人赞同了该回答</div>
                <div style={{marginTop:'6px',fontSize:'15px'}}>
                    真的。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    而且不止7506，任何一款二三十年前上市的耳机型号，如果今天还在产在销，几乎无一例外都是很强的。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    最近连着在私信和值乎里面被问到7506的事情，我才发现原来7506真的已经热到不行，京东上都回到1200价位了。吃惊！
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    对于预算充裕点的朋友，我建议索性将逼格进一步提升，去玩CD900st，让那些刚刚追上7506的疯狂索粉再次傻眼～～
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    关于CD900st/7506/V6的关系，如果真的搞不清楚，其实也无所谓。反正你只要知道CD900st是Sony整个历史上最牛逼的监听耳机就够了。实在是关心音质差别的话，稍微去看一下这个 7506和CD900st的小讨论（英文）  和这个 家族史（英文） 增加些日常谈资也行。别人问你时就算答不上来，也可以轻蔑地一笑而过，表示不屑跟他们解释——你连CD900st跟7506的差别都不知道，也配来跟我聊天？
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    在整个MDR监听耳机家族里面，别的型号都是「Sony消费电子」的工程师团队负责声音调校，唯独只有CD900st这一只是「Sony娱乐/哥伦比亚唱片」的工程师团队负责声音调校的哦。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    然后日本几乎所有唱片公司、录音棚都有在用CD900st做监听哦。其实放眼全亚洲也是很多录音棚在用哦。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    那些听ACG/J-pop的，你听的音乐九成九就是用CD900st这副耳机混录制作的有没有！买了CD900st，你就跟音乐制作人、录音师、唱片歌手们在用同一副耳机有没有！！从此以后你听到的就是真正彻底百分百呈现音乐制作人、录音师、唱片歌手们原始创作意图的完美声音有没有！！！
                </div>
                <img src={img1} alt='img1' style={{width:'654px',marginTop:'20px'}}/>
                <div style={{marginTop:'6px',fontSize:'13.9px',color:'#999999',textAlign:'center'}}>
                    整个家族MDR-CD700, MDR-CD900, MDR-V6, MDR-V7, MDR-7506, MDR-CD900ST
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    而且我跟你讲哦，7506有日本产美国产中国产泰国产（现在基本上是泰国产），然鹅CD900st三十年来只有日本产哦，还只在日本本土销售哦，你只能去日亚买或者托人从日本人肉代购哦~
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    哇~那这么牛逼的耳机你说要多少钱？官方建议零售价18000日元，日本亚马逊/街边数码店大概15000日元，换成人民币一千块有找。
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    还在等什么？
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    你现在是不是觉得跟风去买一千两百块的京东7506有点不划算？
                </div>
                <div style={{marginTop:'20px',fontSize:'15px'}}>
                    再进阶的话，
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    还可以换一个小羊皮的BrainWavz Audio专为MDR系列耳机定制的小羊皮惰性海绵耳垫 。或许也可以试试同厂另一款打孔人造皮的耳垫，理论上更透气些……港真我还没试过哈哈
                </div>
                <img src={titleImg} alt='titleImg' style={{width:'654px',marginTop:'20px'}}/>
                <div style={{marginTop:'6px',fontSize:'13.9px',color:'#999999',textAlign:'center'}}>
                    BrainWavz Audio专为MDR系列耳机定制的小羊皮惰性海绵耳垫
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    以及毫无疑问随身必备的高级纯金属制6.35mm母转3.5mm公插——比方说Ranko RCP-200/2000，或者Furutech CF35g/r 和 F35g/r ——不然怎么能够插到你的DAP上呢是吧。
                </div>
                <img src={img2} alt='img2' style={{width:'654px',marginTop:'20px'}}/>
                <div style={{marginTop:'6px',fontSize:'13.9px',color:'#999999',textAlign:'center'}}>
                    Ranko转换插，高纯度OFHC磷青纯铜，镀5.5um厚铑，极温-196c冷冻固化处理
                </div>
                <img src={img4} alt='img4' style={{width:'654px',marginTop:'20px'}}/>
                <div style={{marginTop:'6px',fontSize:'13.9px',color:'#999999',textAlign:'center'}}>
                    Furutech 古河 CF35 Rhodium 镀铑转换插
                </div>
                <div style={{marginTop:'20px',fontSize:'15px'}}>
                    还要啥自行车！
                </div>
                <div style={{marginTop:'20px',fontSize:'15px'}}>
                    我不是在跟你开玩笑！
                </div>
                <div style={{marginTop:'20px',fontSize:'15px',lineHeight:1.6}}>
                    如果说一辈子只能买一副监听耳机，并且已经买不到DT48了的话，那唯一能买的就必定是CD900st啦！
                </div>
                <div style={{marginTop:'20px',fontSize:'15px'}}>
                    （友情提示：买耳机有风险，入手请谨慎。）
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
                    <Button className={classes.iconButton} disableRipple style={{marginLeft:'auto'}} onClick={()=>{props.closeFullArticle()}}>
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
        fullArticle:state.frontPage.fullArticle,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeFullArticle:()=>{dispatch(action.closeFullArticle())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FullArticle);