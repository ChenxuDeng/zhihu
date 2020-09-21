import React from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Articles from "./articles/articles";
import SideBarTop from "../sideBarTop/sideBarTop";
import SideBarBottom from "../sideBarBottom/sideBarBottom";

function FrontPage(props) {

    const useStyle=makeStyles((theme)=>{
        return{
            container:{
                padding:'0',
                maxWidth:'1000px'
            },
            paper:{
                width:'694px',
                marginTop:'10px',
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
            wrapper:{
                background:'#f6f6f6',
                paddingTop:'10px',
                marginTop:'-12px'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Container maxWidth={'md'} classes={{maxWidthMd:classes.container}}>
                    <div style={{display:'flex'}}>
                        <Articles/>
                        <div>
                            <SideBarTop/>
                            <SideBarBottom/>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FrontPage;