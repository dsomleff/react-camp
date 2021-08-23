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

database.ref().on('value', (snapshot) => {
  console.log(
    `${snapshot.val().name} is ${snapshot.val().job.title}`
  );
});

database.ref().update({
  'name': 'Nocturnal Cow!'
});

// const onValueChanged = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error', e);
// }, );

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 7000);

// setTimeout(() => {
//   database.ref().off(onValueChanged);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(3);
// }, 10500);

// Read
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//   }).catch((e) => {
//     console.log('Error fetching', e);
//   });

// Create
// database.ref().set({
//   name: 'Holy Cow',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software duck',
//     company: 'IBM'
//   },
//   location: {
//     city: 'Odesa',
//     country: 'Ukraine'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('Failed', e);
// });

// Update
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Kiev'
// });

// Delete
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log(e);
//   });
