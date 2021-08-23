import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTdIYdJamMRYyLUNsa5nZtY9QjxR3aSA",
  authDomain: "expensive-app-rc.firebaseapp.com",
  databaseURL: "https://expensive-app-rc-default-rtdb.firebaseio.com",
  projectId: "expensive-app-rc",
  storageBucket: "expensive-app-rc.appspot.com",
  messagingSenderId: "917502838920",
  appId: "1:917502838920:web:d08ae81989796c8475b73d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Holy Cow',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'Software duck',
    company: 'IBM'
  },
  location: {
    city: 'Odesa',
    country: 'Ukraine'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('Failed', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Kiev'
});

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log(e);
//   });
