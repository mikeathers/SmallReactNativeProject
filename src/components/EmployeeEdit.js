import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import Communications from "react-native-communications"
import { employeeUpdate, employeeSave, employeeDelete } from "../actions"
import { Card, CardSection, Button, ConfirmModal } from "./common"
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends React.Component {
  state = {
    showModal: false,
  }
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate(prop, value)
    })
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave(name, phone, shift, this.props.employee.uid)
  }

  onTextPress = () => {
    const { name, phone, shift } = this.props
    Communications.text(phone, `Hey ${name}, your upcoming shift is on ${shift}`)
  }

  onAccept = () => {
    this.props.employeeDelete(this.props.employee.uid);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button text="Save Changes" onPress={this.onButtonPress} />
        </CardSection>
        <CardSection>
          <Button text="Text Schedule" onPress={this.onTextPress} />
        </CardSection>
        <CardSection>
          <Button text="Fire Employee" onPress={() => this.setState({ showModal: !this.state.showModal })} />
        </CardSection>
        <ConfirmModal
          visible={this.state.showModal}
          onDecline={() => this.setState({ showModal: false })}
          onAccept={this.onAccept}
        >
          Are you sure you want to delete this?
        </ConfirmModal>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return { name, phone, shift } = state.employeeForm
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)
