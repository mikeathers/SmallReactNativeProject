import React from "react"
import { connect } from "react-redux"
import { emailChanged, passwordChanged, loginUser } from "../actions"

import { View, Text } from "react-native"

import { Card, CardSection, Input, Button, Spinner } from "./common"

class LoginForm extends React.Component {
  onEmailChange = (email) => {
    this.props.emailChanged(email)
  }
  onPasswordChange = (password) => {
    this.props.passwordChanged(password)
  }
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password })
  }
  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }
  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return <Button text="Login" onPress={this.onButtonPress} />
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email:"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password:"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
            secureTextEntry
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}
const styles = {
  errorTextStyle: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
})



export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)