import { TextField } from "@material-ui/core"
import ButtonContainer from "./button-container"
import TopContainer from "./top-container"
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion';
import SimpleAccordion from "./accordion-component";
import Container from "@material-ui/core/Container"
import CommentList from "./comment-list";


function Card({username, handle, image, description, profilePic, date, likes, comments, shares, commenter1, comment1}) {
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
        <div className="accordion-container">
            <SimpleAccordion></SimpleAccordion>
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
            likes={likes}
            comments={comments}
            shares={shares}
            />
            <div>
                <h4 className='comments-title'>Comments</h4>
                <CommentList
                commenter1={commenter1}
                comment1={comment1}
                />
            </div>
            <div className="comment-field-container">
                <TextField
                    variant='outlined'
                    color='secondary'
                    placeholder='Start commenting here'
                    fullWidth='true'
                    margin='dense'
                    size='small'
                />
            </div>
        </div>
      </div>  
    )
}

export default Card