import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './routes/App';

const initialState = {
  'user': {},
  'mylist': [],
  'users': [
    {
      'id': '41928402-97e4-41a7-9533-a7fabae62fce',
      'first_name': 'Karen',
      'last_name': 'Savins',
      'email': 'ksavins0@freewebs.com',
      'cover': 'http://dummyimage.com/110x233.png/dddddd/000000',
      'rol': 'Staff',
      'tags': [
        'LifeTrack',
        'Matrimonios',
        'CorazonSaludable',
        'RX',
        'Prematrimonial',
      ],
    },
    {
      'id': '28e47337-18ff-412b-ada1-ecdc576aecbd',
      'first_name': 'Aratha',
      'last_name': 'Rayner',
      'email': 'arayner1@scientificamerican.com',
      'cover': 'http://dummyimage.com/223x124.bmp/cc0000/ffffff',
      'rol': 'Member',
      'tags': ['Liderazgo', 'Matrimonios', 'CorazonSaludable', 'RX'],
    },
    {
      'id': '906ca25c-a501-4940-bed0-39cc5c3efb45',
      'first_name': 'Pippo',
      'last_name': 'Targett',
      'email': 'ptargett2@ted.com',
      'cover': 'http://dummyimage.com/203x120.jpg/ff4444/ffffff',
      'rol': 'Leader',
      'tags': ['Liderazgo', 'Matrimonios'],
    },
    {
      'id': 'ecab90b6-7b90-4c54-bd65-a8919a8a03b9',
      'first_name': 'Reeba',
      'last_name': 'Wenn',
      'email': 'rwenn3@google.com.au',
      'cover': 'http://dummyimage.com/212x204.bmp/cc0000/ffffff',
      'rol': 'Staff',
      'tags': ['LifeTrack', 'Matrimonios', 'CorazonSaludable'],
    },
    {
      'id': '711f2c81-e3cb-4346-a67b-f7d1324f1e0f',
      'first_name': 'Earlie',
      'last_name': 'Hedman',
      'email': 'ehedman4@weibo.com',
      'cover': 'http://dummyimage.com/207x103.jpg/ff4444/ffffff',
      'rol': 'Member',
      'tags': ['CorazonSaludable', 'RX', 'Prematrimonial'],
    },
    {
      'id': '1515ec95-5eac-4cc4-8d4a-9b943f122e91',
      'first_name': 'Stacee',
      'last_name': 'Heinsh',
      'email': 'sheinsh5@google.es',
      'cover': 'http://dummyimage.com/151x102.png/5fa2dd/ffffff',
      'rol': 'Pastor',
      'tags': ['RX'],
    },
    {
      'id': 'ff5034a3-a87b-4d65-96bd-afc7944bf16c',
      'first_name': 'Rosabella',
      'last_name': 'Margeram',
      'email': 'rmargeram6@php.net',
      'cover': 'http://dummyimage.com/221x236.bmp/5fa2dd/ffffff',
      'rol': 'Staff',
      'tags': ['CorazonSaludable', 'RX', 'Prematrimonial'],
    },
    {
      'id': '6847c5a4-71fd-49fd-b925-d06288e0cf26',
      'first_name': 'Maybelle',
      'last_name': 'Cordeux',
      'email': 'mcordeux7@hibu.com',
      'cover': 'http://dummyimage.com/235x212.bmp/5fa2dd/ffffff',
      'rol': 'Staff',
      'tags': ['CorazonSaludable', 'RX', 'Prematrimonial'],
    },
    {
      'id': '617a346d-c9c9-4658-baed-dba3414a1da9',
      'first_name': 'Lisetta',
      'last_name': 'Gutowski',
      'email': 'lgutowski8@discuz.net',
      'cover': 'http://dummyimage.com/226x230.jpg/dddddd/000000',
      'rol': 'Leader',
      'tags': ['CorazonSaludable', 'RX', 'Prematrimonial'],
    },
    {
      'id': 'f042b230-5de3-4b86-aa20-a71e7897144d',
      'first_name': 'Nata',
      'last_name': 'Fleet',
      'email': 'nfleet9@google.pl',
      'cover': 'http://dummyimage.com/243x135.jpg/ff4444/ffffff',
      'rol': 'Staff',
      'tags': ['CorazonSaludable', 'RX', 'Prematrimonial'],
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App'),
);
