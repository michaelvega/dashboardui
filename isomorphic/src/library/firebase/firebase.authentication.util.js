import firebase, { auth } from './firebase';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SignIn from '../../containers/Pages/SignIn/SignIn';

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('profilePic', profilePic);
    //Usestate
  }).catch((e) => {
      console.log(e)
  });
};
export const signInWithFacebook = () =>
  auth
    .signInWithPopup(facebookProvider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(`FB Token: ${token}`, `User: ${user}`);

      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      console.error(error);

      // ...
    });

export const anonymousProvider = firebase.auth(); // FOR TEST ONLY
export const signInWithAnonymous = () =>
    anonymousProvider.signInAnonymously().then((result) => {
        const name = result.user.uid;
        localStorage.setItem('name', name);
    });



export const signInWithGithub = () => auth.signInWithPopup(githubProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);
export const signInWithEmail = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password);
export const signUpWithEmailAndPassword = async (email, password) =>
  await auth.createUserWithEmailAndPassword(email, password);

export const resetPassword = (email) => auth.sendPasswordResetEmail(email);

export const signOut = () => auth.signOut();
export default auth;
