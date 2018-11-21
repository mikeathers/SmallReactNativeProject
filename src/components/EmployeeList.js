import React from "react"
import { connect } from "react-redux"
import { employeesFetch } from "../actions/employee"
import _ from "lodash"
import { ListView, View } from "react-native"
import ListItem from "./ListItem"

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

class EmployeeList extends React.Component {
  state = { dataSource: ds }

  componentDidMount() {
    this.props.employeesFetch().then(() => {
      this.createDataSource(this.props.employees)
    });
  }

  componentWillReceiveProps({ employees }) {
    this.createDataSource(employees)
  }

  createDataSource = (employees) => {

    const dataSource = ds.cloneWithRows(employees)
    this.setState({ dataSource })
    console.log(dataSource)
  }

  renderRow = (employee) => {
    return (
      <ListItem employee={employee} />
    )
  }

  render() {

    return (

      <ListView
        dataSource={this.state.dataSource}
        renderRow={(employee) => this.renderRow(employee)}
      />

    )
  }
}
const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (employee, uid) => {
    return { ...employee, uid }
  })
  return { employees }
}


export default connect(mapStateToProps, { employeesFetch })(EmployeeList)