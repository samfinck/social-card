import React from 'react'
import Card from './card';
import Container from '@material-ui/core/Container'

const comments = [
    {
        commenter: 'Sean',
        comment: 'This is a comment'
    },
    {
        commenter: 'Shorn',
        comment: 'this is another comment'
    }
];

const moreComments = [
    {
        commenter: 'John',
        comment: 'This is a john comment'
    }
];

const evenMoreComments = [
    {
        commenter: 'John',
        comment: 'This is a john comment'
    },
    {
        commenter: 'Sean',
        comment: 'This is a comment'
    },
    {
        commenter: 'Sean',
        comment: 'This is a comment'
    },
    {
        commenter: 'Sean',
        comment: 'This is a comment'
    },
];

function CardList() {

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
                comments={comments}
                shares={2}
                date='20 Oct'
            />
            <Card 
                username='stanfrink' 
                handle='stanfrink2'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Content-is-like-water-1980.jpg/1200px-Content-is-like-water-1980.jpg'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                profilePic='https://support.plymouth.edu/kb_images/Yammer/default.jpeg'
                date='20 Oct'
                likes={99}
                comments={moreComments}
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
                comments={evenMoreComments}
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
                comments={comments}
                shares={2}
            />
        </div>
    )
}

export default CardList