import LikeButton from "./like-button"
import Button from '@material-ui/core/Button'
import CommentButton from "./comment-button"
import ShareButton from "./share-button"
import Icon from '@material-ui/core/Icon';

function ButtonContainer(){
    return(
        <div className='button-container'>
            <Button
            startIcon={<LikeButton />} 
            size='small' 
            onClick={()=>alert('liked')}
            color='secondary'
            />
            <Button
            startIcon={<CommentButton />}
            onClick={()=>
                prompt('My comment:', 'enter comment')
                
            }
            />
            <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>Share</Icon>}
            />
        </div>
    )
}

export default ButtonContainer

