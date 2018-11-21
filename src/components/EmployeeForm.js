import React from "react"
import { connect } from "react-redux"
import { employeeUpdate } from "../actions"
import { View, Picker, Text } from "react-native"
import { CardSection, Input } from "./common"

class EmployeeForm extends React.Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input label="Name" placeholder="Jane" value={this.props.name} onChangeText={(value) => this.props.employeeUpdate("name", value)} />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="07123456789" value={this.props.phone} onChangeText={(value) => this.props.employeeUpdate("phone", value)} />
        </CardSection>

        <CardSection>
          <Text style={styles.picker}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={(value) => this.props.employeeUpdate("shift", value)}

          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  picker: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);