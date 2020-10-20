import './_app.styles.css';
import Card from './card';
import React, { Component } from 'react';
import CardList from './card-list';
import 'fontsource-roboto';

function MyApp() {
    return (
      <div className='body-container'>
        <CardList/>
      </div>  
    );
  }  

export default MyApp
