import React, { Component } from "react";
import Action from "./tableAction";
class StudentTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <tr>
                    <th scope="row">{this.props.data.id}</th>
                    <td width="150px">{this.props.data.studentId}</td>
                    <td width="450px">{this.props.data.studentName}</td>
                    <td width="150px">{this.props.data.college}</td>
                    {/* <td width="150px">{this.props.data.program}</td>
                    <td width="350px">{this.props.data.coruseCode}</td>
                    <td width="250px">{this.props.data.courseName}</td>
                    <td width="350px">{this.props.data.created_at}</td> */}
                    <td width="250px">
                        <Action eachRowID={this.props.data.id} />
                    </td>
                </tr>
            </>
        );
    }
}

export default StudentTable;
