import React from 'react'


export default function CommentList({commenter1, comment1}) {
    return(
        <div className='comment-list'>
            <div><h6 className='commenter-name'>{commenter1}</h6></div>
            <div className='comment-div'>
                <div>{comment1}</div>
            </div>
        </div>  
    )
}