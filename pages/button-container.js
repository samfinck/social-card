import LikeButton from "./like-button"

function ButtonContainer(){
    return(
        <div className='button-container'>
            <LikeButton/>
            <button className='comment-button' type='button'>Comment</button>
            <button className='share-button' type='button'>
                Share
            <img src=''/>
            </button>
        </div>
    )
}

export default ButtonContainer

