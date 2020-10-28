import React from 'react'


export default function CommentList({ commenter1, comment1, commenter2, comment2 }) {

    return(
        <div className='comment-list'>
            <div className='individual-comment'> 
                <div><h6 className='commenter-name'>{commenter1}</h6></div>
                <div className='comment-div'>
                    <div>{comment1}</div>
                </div>
            </div>   

            <div className='individual-comment'>
                <div><h6 className='commenter-name'>{commenter2}</h6></div>
                <div className='comment-div'>
                    <div>{comment2}</div>
                </div>
            </div> 
        </div>  
    )
}