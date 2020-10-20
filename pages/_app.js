import './_app.styles.css';
import Card from './card';
import React, { Component } from 'react';
import CardList from './card-list';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container'



function MyApp() {
    return (
      <div className='social-list-container'>
        <CardList/>
      </div> 
    );
  }  

export default MyApp
