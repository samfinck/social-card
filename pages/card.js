import { TextField } from "@material-ui/core"
import ButtonContainer from "./button-container"
import TopContainer from "./top-container"
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'

function Card({username, handle, image, description, profilePic, date}) {
  return(
      <div className="card-container"> 
        <div className="top-container">
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
            </div>
            <Typography className="date-container">
                {date}
            </Typography>
        </div>
        <div className="body-container">
            <span></span>
            <div className="image-container">
              <img src={image}/>
            </div>
            <div className="description-container">
              <Typography className="description-text" variant='body2'>{description}</Typography>
            </div>
        </div>
        <br/>
        <ButtonContainer/>
        <br/>
        <TextField
            variant='filled'
            color='secondary'
            placeholder='Start commenting here'
        />
      </div>  
    )
}

export default Card