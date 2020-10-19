import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function LikeButton(){
  return(
    <div className='like-button'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png'/>
    </div>
  )
}

export default LikeButton