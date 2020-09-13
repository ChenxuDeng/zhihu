import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const white='#fff'
const blue='#0084ff'

export const theme=createMuiTheme({
    palette:{
        common:{
            white:white,
            blue:blue
        },
        primary:{
            main:white
        },
        secondary:{
            main:blue
        }
    }
})