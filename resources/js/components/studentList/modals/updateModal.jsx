import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class updateModal extends Component {
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
    // updateing Name State

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
    // get value props

    static getDerivedStateFromProps(props, current_state) {
        let studentUpdate = {
            StudentId: null,
            StudentName: null,
            College: null,
            Program: null,
            CoruseCode: null,
            CourseName: null,
        };

        // updating data from input
        if (
            current_state.StudentName &&
            current_state.StudentName !== props.studentUpdate.currentStudentName
        ) {
            return null;
        }

        if (
            current_state.StudentId &&
            current_state.StudentId !== props.studentUpdate.currentStudentId
        ) {
            return null;
        }
        if (
            current_state.Program &&
            current_state.Program !== props.studentUpdate.currentProgram
        ) {
            return null;
        }

        if (
            current_state.StudentId &&
            current_state.StudentId !== props.studentUpdate.currentStudentId
        ) {
            return null;
        }
        if (
            current_state.College &&
            current_state.College !== props.studentUpdate.currentCollege
        ) {
            return null;
        }

        if (
            current_state.CourseName &&
            current_state.CourseName !== props.studentUpdate.currentCourseName
        ) {
            return null;
        }

        // updating data from props
        if (
            current_state.CourseName !==
                props.studentUpdate.currentCourseName ||
            current_state.CourseName === props.studentUpdate.currentCourseName
        ) {
            studentUpdate.CourseName = props.studentUpdate.currentCourseName;
        }

        if (
            current_state.CoruseCode !==
                props.studentUpdate.currentCoruseCode ||
            current_state.CoruseCode === props.studentUpdate.currentCoruseCode
        ) {
            studentUpdate.CoruseCode = props.studentUpdate.currentCoruseCode;
        }

        if (
            current_state.College !== props.studentUpdate.currentCollege ||
            current_state.College === props.studentUpdate.currentCollege
        ) {
            studentUpdate.College = props.studentUpdate.currentCollege;
        }

        if (
            current_state.Program !== props.studentUpdate.currentProgram ||
            current_state.Program === props.studentUpdate.currentProgram
        ) {
            studentUpdate.Program = props.studentUpdate.currentProgram;
        }

        if (
            current_state.StudentName !==
                props.studentUpdate.currentStudentName ||
            current_state.StudentName === props.studentUpdate.currentStudentName
        ) {
            studentUpdate.StudentName = props.studentUpdate.currentStudentName;
        }

        if (
            current_state.StudentId !== props.studentUpdate.currentStudentId ||
            current_state.StudentId === props.studentUpdate.currentStudentId
        ) {
            studentUpdate.StudentId = props.studentUpdate.currentStudentId;
        }

        return studentUpdate;
    }

    // update button
    updateStudentData = () => {
        axios
            .post("/update/student/data", {
                SID: this.props.modalUpdateID,
                StudentId: this.props.studentUpdate.currentStudentId,
                StudentName: this.state.StudentName,
                College: this.state.College,
                Program: this.state.Program,
                CoruseCode: this.state.CoruseCode,
                CourseName: this.state.CourseName,
            })
            .then(() => {
                toast.success("Student Info Updated !");
                setTimeout(() => {
                    location.reload();
                }, 2500);
                // location.reload();
            });
    };

    render() {
        return (
            <>
                <div
                    className="modal fade"
                    id={"updateModal" + this.props.modalUpdateID}
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h5
                                    className="modal-title text-light fw-bold"
                                    id="exampleModalLabel"
                                >
                                    FORM UPDATE
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {/* FORM MODAL */}

                                <form className="form ">
                                    {/* Static Inputs */}

                                    <div className="d-flex ">
                                        <div className="form-floating mb-3 col">
                                            <input
                                                type="text"
                                                className="form-control w-50 "
                                                value={
                                                    this.state.StudentId ?? ""
                                                }
                                                onChange={this.inputStudentId}
                                            />
                                            <label className="text-start">
                                                Student Number
                                            </label>
                                        </div>
                                    </div>

                                    {/* Dynamic Inputs */}

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            value={this.state.StudentName ?? ""}
                                            onChange={this.inputStudentName}
                                        />
                                        <label>Student Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            value={this.state.College ?? ""}
                                            onChange={this.inputCollege}
                                        />
                                        <label>College</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            value={this.state.Program ?? ""}
                                            onChange={this.inputProgram}
                                        />
                                        <label>Program</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            value={this.state.CoruseCode ?? ""}
                                            onChange={this.inputCoruseCode}
                                        />
                                        <label>Course Code</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentName"
                                            value={this.state.CourseName ?? ""}
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
                                    value="UPDATE"
                                    onClick={this.updateStudentData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default updateModal;
