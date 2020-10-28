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

import { useState } from 'react'

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



function ButtonStyled({response, onClick}) {
    const classes = useStyles();
    return <Button className={classes.root} onClick={onClick}>{response}</Button>
}

const ButtonContainer = ({ likes, comments, shares, onLiked, onUnliked, textInput, onCommentButtonClicked }) => {
    
    
    const [liked, setLiked] = useState(false);

    const likeButtonClick = (event) => {
        // event.target.style.backgroundColor = 'blue';
        if (onLiked && !liked) {
            onLiked();
            setLiked(prev => !prev);
        }
        if (onUnliked && liked) {
            onUnliked();
            setLiked(prev => !prev);
        }
    }

    function handleButtonClick() {
        // textInput.current.focus();
        if (onCommentButtonClicked) {
            onCommentButtonClicked();
        }
    }


    return(
            <div className='button-container'>
                <div>   
                <ButtonStyled className="like-button" onClick={likeButtonClick} response={liked ? 'Unlike' : 'Like'} />
                {likes}
                </div>
                <div>
                <ButtonStyled
                    onClick={handleButtonClick}
                    response='comment'
                />
                {comments}
                </div>
                <div>
                <ButtonStyled
                    color='primary'
                    response='share'
                    onClick={()=>{alert('pop out list of share options')}}
                />
                {shares}
                </div>
            </div>
    )
}

export default ButtonContainer

