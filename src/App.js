import React, {Component} from 'react';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {theme} from '../src/theme/theme'
import Navigation from "./components/navigation/navigation";
import {Switch,Route,BrowserRouter} from "react-router-dom";
import FrontPage from "./components/frontPage/frontPage";
import SubscribedPage from "./components/subscribedPage/subscribedPage";
import TrendingPage from "./components/trendingPage/trendingPage";
import ScrollNavigation from "./components/navigation/scrollNavigation";
import {connect} from 'react-redux'
import * as action from './store/action/index'

class App extends Component {

    componentDidMount() {
        this.prev=window.scrollY
        window.addEventListener('scroll',(event)=>this.scrollHandler(event))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',(event)=>this.scrollHandler(event))
    }

    scrollHandler=(event)=>{
        const window = event.currentTarget;
        if(this.prev > window.scrollY){
            this.props.scrollUp()
        }else if(this.prev < window.scrollY){
            this.props.scrollDown()
        }
        this.prev = window.scrollY;
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        {this.props.scrolledNavigation?<ScrollNavigation/>:<Navigation/>}
                        <Switch>
                            <Route path={'/trending'} component={TrendingPage}/>
                            <Route path={'/subscribed'} component={SubscribedPage}/>
                            <Route path={'/'} component={FrontPage}/>
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        navigation:state.navigation.navigation,
        scrolledNavigation:state.navigation.scrolledNavigation
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        scrollUp:()=>{dispatch(action.scrollUp())},
        scrollDown:()=>{dispatch(action.scrollDown())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

