import LikeButtonImg from "./like-button"
import Button from '@material-ui/core/Button'
import CommentButtonImg from "./comment-button"
import ShareButtonImg from "./share-button"
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        background:'rgb(93, 208, 243)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '3px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10px',
    }
})

const theme = createMuiTheme({
    palette:{
        primary:{
            main: blue[500],
        }
    }
})

function LikeButtonClick(event){
        event.target.style.backgroundColor = 'blue';
}



function ButtonStyled({response, onClick}) {
    const classes = useStyles();
    return <Button className={classes.root} onClick={onClick}>{response}</Button>
}

function ButtonContainer({likes, comments, shares}){
    return(
        <ThemeProvider theme={theme}>
            <div className='button-container'>
                <div>   
                <ButtonStyled  
                    className='like-button' 
                    onClick={LikeButtonClick}
                    response='like'
                />
                {likes}
                </div>
                <div>
                <ButtonStyled
                    onClick={()=>{alert('direct page to comments')}}
                    response='comment'
                />
                {comments}
                </div>
                <div>
                <ButtonStyled
                    color='primary'
                    response='share'
                    onClick={()=>{alert('shared!')}}
                />
                {shares}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default ButtonContainer

