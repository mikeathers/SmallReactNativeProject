import React from 'react';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducers from "./src/reducers"
import firebase from "firebase"
import ReduxThunk from "redux-thunk"

import { StyleSheet, View } from 'react-native';
import LoginForm from './src/components/LoginForm';
import Router from "./src/router"

class App extends React.Component {

  componentWillMount() {
    const config = ({
      apiKey: "AIzaSyCaQD3Trg2sfn9_w36aKt7R-ERrOR1q5R4",
      authDomain: "auth-76798.firebaseapp.com",
      databaseURL: "https://auth-76798.firebaseio.com",
      projectId: "auth-76798",
      storageBucket: "auth-76798.appspot.com",
      messagingSenderId: "775161942010"
    });
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45
  },
});



export default App