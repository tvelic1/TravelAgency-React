import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' name="card">
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*O7qrDCFT2xOKRm-k'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://www.seeingbali.com/images/gallery/tours/seeingbali-quicksilver_pontoon_in_nusa_penida-21.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items half'>
            <CardItem
              src='https://d2vqpl3tx84ay5.cloudfront.net/sailing-across-the-atlantic/helena-from-bow.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://i.pinimg.com/736x/d3/9d/2f/d39d2f5436d779076ba6f5f1c0ee63b6.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://www.shutterstock.com/image-photo/camel-caravan-going-through-sand-600nw-186338936.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;