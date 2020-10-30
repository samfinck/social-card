import { TextField } from "@material-ui/core"
import ButtonContainer from "./button-container"
import TopContainer from "./top-container"
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion';
import SimpleAccordion from "./accordion-component";
import Container from "@material-ui/core/Container"


import { useRef, useState } from 'react';

function Card({ username, handle, image, description, profilePic, date, likes, comments = [], shares, picture }) {
    const [numlikes, setNumlikes] = useState(likes);
    const [numcomments, setNumcomments] = useState(comments.length);
    const textInput = useRef(null);

    const liked = () => {
        setNumlikes(prev => prev + 1);
    }

    const unliked = () => {
        setNumlikes(prev => prev - 1);
    }

    

    const commentButtonClicked = () => {
        if (textInput && textInput.current) {
            textInput.current.focus();
        }
    }

    const commented = () => {
        comments.push({
                        commenter: 'Jakie Boy',
                        picture: 'https://ae01.alicdn.com/kf/HTB1z98DQFXXXXXMaXXXq6xXFXXXf/Realistic-Fiberglass-Male-Mannequin-Head-For-Wig-And-Sunglasses-Display.jpg',
                        comment: textInput.current.value,
                        id: 'asdq'
                    });
        setNumcomments(prev => prev + 1);
        textInput.current.value = '';
    }

    function doit_onkeypress(event){
        if (event.keyCode == 13 || event.which == 13){
            commentCommitted();
        }
    }

    const commentCommitted = () => {
        if (textInput.current.value !== ''){
            commented();
        } 
    }




  return(
      <div className="card-container"> 
        <div className="profile-container">
                <img className='profile-pic' src={profilePic} width="50px" height="50px"/>
        </div>
        <div className="userhan-container">
                <Typography className="username-container" variant='body1'>
                    {username}
                </Typography>
                <Typography className="handle-container" variant='subtitle3'>
                    @{handle}
                </Typography>
                <Typography className="date-container">
                {date}
            </Typography>
        </div>
        <div style={{ position: 'absolute', width: '500px' }}>
            <div className="accordion-container">
                <SimpleAccordion></SimpleAccordion>
            </div>
        </div>
        <div className="blank-div-container"></div>
        <div className="body-container">
            <div>
                <img className="image-in-body" src={image}/>
            </div>
            <div className="description-container">
                <Typography className="description-text" variant='body2'>{description}</Typography>
            </div>
        </div>
        <div className="response-container">
            <ButtonContainer
                likes={numlikes}
                comments={numcomments}
                shares={shares}
                onLiked={liked}
                onUnliked={unliked}
                onCommented={commented}
                onCommentButtonClicked={commentButtonClicked}
            />
            <div>
                <h4 className='comments-title'>Comments</h4>
                <ol className='comment-list'>
                    {comments.map(comment => {
                        return (
                            <li className='comment-content' key={comment.id}>
                                <img className='commenters-picture' src = {comment.picture} width='40px' height='40px'/>
                                <h4 className='commenters-name'>{comment.commenter}</h4>
                                <p className='commenters-comment'>{comment.comment}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div className="comment-field-container">
                <TextField
                    variant='outlined'
                    color='secondary'
                    placeholder='Start commenting here'
                    fullWidth='true'
                    margin='dense'
                    size='small'
                    onKeyPress={doit_onkeypress}
                    inputRef={textInput}
                />
            </div>
        </div>
      </div>  
    )
}

export default Card