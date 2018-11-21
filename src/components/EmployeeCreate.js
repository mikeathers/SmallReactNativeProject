import React from "react"
import { connect } from "react-redux"
import { employeeUpdate, employeeCreate } from "../actions"

import { Card, CardSection, Button } from "../components/common"
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends React.Component {
  state = {}

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate(name, phone, shift || "Monday")
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button text="Create" onPress={this.onButtonPress} />
        </CardSection>
      </Card>
    )
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)