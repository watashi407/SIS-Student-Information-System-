import React, { Component } from "react";
import ViewModal from "./modals/viewModal";
import UpdateModal from "./modals/updateModal";
import DeleteModal from "./modals/deleteModal";

class TableAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStudentName: null,
            currentStudentId: null,
            currentCollege: null,
            currentProgram: null,
            currentCourse: null,
        };
    }

    // get individual data
    getStudentDetails = (id) => {
        axios
            .post("/get/individual/student/details", {
                studentID: id,
            })
            .then((response) => {
                this.setState({
                    currentStudentNumber: response.data.enrolls.id,
                    currentStudentName: response.data.enrolls.studentN,
                    currentStudentId: response.data.enrolls.id,
                    currentCollege: response.data.colleges.collegeName,
                    currentProgram: response.data.programs.programName,
                    currentCourse: response.data.cns.courseCode,
                });
                console.log(response.data);
            });
    };

    // get individual update
    getStudentUpdate = (id) => {
        axios
            .post("/get/individual/student/update", {
                studentID: id,
            })
            .then((response) => {
                this.setState({
                    currentStudentNumber: response.data.enrolls.id,
                    currentStudentName: response.data.enrolls.studentN,
                    currentStudentId: response.data.enrolls.id,
                    currentCollege: response.data.colleges.collegeName,
                    currentProgram: response.data.program_id,
                    currentCourse: response.data.cn_id,
                });
                console.log(response.data);
            });
    };

    render() {
        return (
            <>
                <div className="btn-group">
                    {/* view */}
                    <button
                        type="button"
                        className="btn btn-sm btn-info btn-primary m-1"
                        data-bs-target={"#viewmodal" + this.props.eachRowID}
                        data-bs-toggle="offcanvas"
                        onClick={() => {
                            this.getStudentDetails(this.props.eachRowID);
                        }}
                    >
                        View
                    </button>
                    <ViewModal
                        modalID={this.props.eachRowID}
                        studentDetails={this.state}
                    />

                    <button
                        type="button"
                        className="btn btn-sm btn-primary m-1"
                        data-bs-target={"#updateModal" + this.props.eachRowID}
                        data-bs-toggle="modal"
                        onClick={() => {
                            this.getStudentUpdate(this.props.eachRowID);
                        }}
                    >
                        Update
                    </button>

                    <UpdateModal
                        modalUpdateID={this.props.eachRowID}
                        studentUpdate={this.state}
                    />

                    <button
                        type="button"
                        className="btn btn-sm btn-info btn-danger m-1"
                        data-bs-target={"#deleteModal" + this.props.eachRowID}
                        data-bs-toggle="modal"
                        onClick={() => {
                            this.getStudentDetails(this.props.eachRowID);
                        }}
                    >
                        Delete
                    </button>
                    <DeleteModal
                        delID={this.props.eachRowID}
                        studentDel={this.state}
                    />
                </div>
            </>
        );
    }
}

export default TableAction;
