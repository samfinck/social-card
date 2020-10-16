import ButtonContainer from "./button-container"
import TopContainer from "./top-container"

function Card({username, handle, image, description, profilePic}) {
  return(
      <div className="card-container"> 
        <div className="top-container">
            <div className="profile-container">
                <img className='profile-pic' src={profilePic} width="50px" height="50px"/>
            </div>
            <div className="userhan-container">
                <div className="username-container">
                {username}
                </div>
                <div className="handle-container">
                @{handle}
                </div>
            </div>
        </div>
        <div className="body-container">
            <div className="image-container">
              <img src={image}/>
            </div>
            <div className="description-container">
              <p className="description-text">{description}</p>
            </div>
        </div>
        <ButtonContainer/>
      </div>  
    )
}

export default Card