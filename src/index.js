console.log('loading firebase tools');

import * as firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCFbv-WiDoYSWOl-LuFRBnDVsV_4a7YeYs",
  authDomain: "example-project-github-issue.firebaseapp.com",
  databaseURL: "https://example-project-github-issue.firebaseio.com",
  projectId: "example-project-github-issue",
  storageBucket: "example-project-github-issue.appspot.com",
  messagingSenderId: "31750113439",
  appId: "1:31750113439:web:5bfd490da69de3726abaaa",
  measurementId: "G-0KV9SRZKRH"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

console.log('loading done');
