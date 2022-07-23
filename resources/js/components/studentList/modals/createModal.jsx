import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            StudentName: null,
            StudentId: null,
            College: null,
            Program: null,
            CoruseCode: null,
            CourseName: null,
        };
    }

    // create data
    inputStudentName = (event) => {
        this.setState({
            StudentName: event.target.value,
        });
    };

    inputStudentId = (event) => {
        this.setState({
            StudentId: event.target.value,
        });
    };

    inputCollege = (event) => {
        this.setState({
            College: event.target.value,
        });
    };

    inputProgram = (event) => {
        this.setState({
            Program: event.target.value,
        });
    };

    inputCoruseCode = (event) => {
        this.setState({
            CoruseCode: event.target.value,
        });
    };

    inputCourseName = (event) => {
        this.setState({
            CourseName: event.target.value,
        });
    };

    createStudentData = () => {
        axios
            .post("/create/student/data", {
                StudentId: this.state.StudentId,
                StudentName: this.state.StudentName,
                College: this.state.College,
                Program: this.state.Program,
                CoruseCode: this.state.CoruseCode,
                CourseName: this.state.CourseName,
            })
            .then((response) => {
                console.log(response);
                // toast.success("Student Info Created!");
                // setTimeout(() => {
                //     location.reload();
                // }, 2500);
                // location.reload();
            });
    };

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-sm btn-info btn-primary m-1 float-end"
                    data-bs-target={"#createModal"}
                    data-bs-toggle="modal"
                >
                    Add Student
                </button>
                <div
                    className="modal fade"
                    id={"createModal"}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h5
                                    className="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    Add Student Info
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="form ">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="StudentName"
                                            placeholder="Student Number here"
                                            onChange={this.inputStudentId}
                                        />
                                        <label>Student Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            placeholder="Student Name here"
                                            onChange={this.inputStudentName}
                                        />
                                        <label>Student Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="College"
                                            placeholder="College"
                                            onChange={this.inputCollege}
                                        />
                                        <label>College</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Program"
                                            placeholder="Program"
                                            onChange={this.inputProgram}
                                        />
                                        <label>Program</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="CoruseCode"
                                            placeholder="Course Code"
                                            onChange={this.inputCoruseCode}
                                        />
                                        <label>Course Code</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="CourseName"
                                            placeholder="Course Name"
                                            onChange={this.inputCourseName}
                                        />
                                        <label>CourseName</label>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="ADD"
                                    onClick={this.createStudentData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateModal;
