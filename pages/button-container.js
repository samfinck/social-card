import LikeButtonImg from "./like-button"
import Button from '@material-ui/core/Button'
import CommentButtonImg from "./comment-button"
import ShareButtonImg from "./share-button"
import Icon from '@material-ui/core/Icon';
import ButtonGroup from '@material-ui/core/ButtonGroup'

function ButtonContainer(){
    return(
        <div className='button-container'>
        <ButtonGroup>
            <Button 
                className='like-button'
                endIcon={<LikeButtonImg/>}  
                onClick={()=>alert('liked')}
                color='primary'
            />
            <Button
                color='primary'
                endIcon={<CommentButtonImg/>}
                onClick={()=>prompt('My comment:', 'enter comment')}
                variant='disabled'
            />
            <Button
                endIcon={<ShareButtonImg/>}
            />
        </ButtonGroup>
        </div>
    )
}

export default ButtonContainer

