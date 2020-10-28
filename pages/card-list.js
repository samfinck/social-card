import React from 'react'
import Card from './card';
import Container from '@material-ui/core/Container'



function CardList() {
    const acommentnameandcontent = {
        commenter1: "John Adams",
        comment1: "neato sam!",
        commenter2: "Phillip Hamilton",
        comment2: "great post dude",
    };

    return(
        <div className='card-list-container'>
            <Card
                key='123' 
                username='samfinckh' 
                handle='samfinckh2'
                image='https://www.stateofdigitalpublishing.com/wp-content/uploads/2018/10/content.jpg'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                profilePic='https://tse4.mm.bing.net/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&pid=Api'
                likes={120}
                comments={100}
                shares={2}
                date='20 Oct'
                commenter1={acommentnameandcontent.commenter1}
                comment1={acommentnameandcontent.comment1}
                commenter2={acommentnameandcontent.commenter2}
                comment2={acommentnameandcontent.comment2}
            />
            <Card 
                username='stanfrink' 
                handle='stanfrink2'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Content-is-like-water-1980.jpg/1200px-Content-is-like-water-1980.jpg'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                profilePic='https://support.plymouth.edu/kb_images/Yammer/default.jpeg'
                date='20 Oct'
                likes={99}
                comments={1}
                shares={5}
            />
            <Card 
                username='clamdrink' 
                handle='clamdrink2'
                image='https://www.doz.com/cms/wp-content/uploads/2013/08/Content-is-king.png'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                profilePic='https://tse4.mm.bing.net/th?id=OIP.LC6JuWgA_1GxGH-nQJ1b0wHaHa&pid=Api'
                date='19 Oct'
                likes={939}
                comments={400}
                shares={112}
            />
            <Card 
                username='jampink' 
                handle='jampink2'
                image='x'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                profilePic='http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg'
                date='18 Oct'
                likes={2}
                comments={10}
                shares={2}
            />
        </div>
    )
}

export default CardList