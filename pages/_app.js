import './_app.styles.css';
import Card from './card';
import React, { Component } from 'react';

class MyApp extends Component {
  constructor(props){
    super(props)
    this.state = {[{
      username:'john',
      handle:'johnx',
      image:'',
      description:'asdasd',
      profilePic:''
    }
      username:'john',
      handle:'johnx',
      image:'',
      description:'asdasd',
      profilePic:''
    }
    {
      username:'john',
      handle:'johnx',
      image:'',
      description:'asdasd',
      profilePic:''
    }
    {
      username:'john',
      handle:'johnx',
      image:'',
      description:'asdasd',
      profilePic:''
    }]
  }
  
  render(){
    return (
      <div className='body-container'>
        <Card 
        username='samfinckh' 
        handle='samfinckh2'
        image='https://www.stateofdigitalpublishing.com/wp-content/uploads/2018/10/content.jpg'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        profilePic='https://tse4.mm.bing.net/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&pid=Api'
        />
        <Card 
        username='stanfrink' 
        handle='stanfrink2'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Content-is-like-water-1980.jpg/1200px-Content-is-like-water-1980.jpg'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        profilePic='https://support.plymouth.edu/kb_images/Yammer/default.jpeg'
        />
        <Card 
        username='clamdrink' 
        handle='clamdrink2'
        image='https://www.doz.com/cms/wp-content/uploads/2013/08/Content-is-king.png'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        profilePic='https://tse4.mm.bing.net/th?id=OIP.LC6JuWgA_1GxGH-nQJ1b0wHaHa&pid=Api'
        />
        <Card 
        username='jampink' 
        handle='jampink2'
        image='x'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        profilePic='http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg'
        />
      </div>  
    );
  }  
  }

export default MyApp
