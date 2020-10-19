import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function CommentButton(){
  return(
    <div className='comment-button'>
      <img src='https://simg.nicepng.com/png/small/119-1196219_ic-comment-comments-comments-icon-transparent.png'/>
    </div>
  )
}

export default CommentButton