import LikeButtonImg from "./like-button"
import Button from '@material-ui/core/Button'
import CommentButtonImg from "./comment-button"
import ShareButtonImg from "./share-button"
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        background:'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0px'
    }
})

const theme = createMuiTheme({
    palette:{
        primary:{
            main: orange[500],
        }
    }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Test Styled Button</Button>
}

function ButtonContainer(){
    return(
        <ThemeProvider theme={theme}>
        <div className='button-container'>
        <ButtonStyled/>
        <ButtonGroup>
            <Button 
                className='like-button' 
                onClick={()=>alert('liked')}
                color='primary'
            />
            <Button
                color='primary'
                onClick={()=>prompt('My comment:', 'enter comment')}
            />
            <Button
                color='primary'
            />
        </ButtonGroup>
        </div>
        </ThemeProvider>
    )
}

export default ButtonContainer

