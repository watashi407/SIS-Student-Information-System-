import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // StudentId: null,
            Enroll: null,
            College: null,
            Program: null,
            Course: null,
            college: [],
            program: [],
            cns: [],
            enroll: [],
        };
    }

    componentDidMount() {
        this.getCollegeList();
        this.getProgramList();
        this.getCourseList();
        this.getEnrollList();
    }

    // create data
    inputEnroll = (event) => {
        this.setState({
            Enroll: event.target.value,
        });
    };

    // inputStudentId = (event) => {
    //     this.setState({
    //         StudentId: event.target.value,
    //     });
    // };

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

    inputCourse = (event) => {
        this.setState({
            CourseCode: event.target.value,
        });
    };

    createStudentData = () => {
        axios
            .post("/create/student/data", {
                // StudentId: this.state.StudentId,
                Enroll: this.state.Enroll,
                College: this.state.College,
                Program: this.state.Program,
                Course: this.state.CourseCode,
            })
            .then((response) => {
                console.log(response);
                toast.success("Student Info Created!");
                setTimeout(() => {
                    location.reload();
                }, 2500);
                location.reload();
            });
    };

    // get colleges
    getCollegeList = () => {
        let self = this;
        axios.get("/get/college/list").then(function (response) {
            console.log(response);
            self.setState({
                college: response.data,
            });
        });
    };

    // get program

    getProgramList = () => {
        let self = this;
        axios.get("/get/program/list").then(function (response) {
            console.log(response);
            self.setState({
                program: response.data,
            });
        });
    };

    // get course

    getCourseList = () => {
        let self = this;
        axios.get("/get/course/list").then(function (response) {
            console.log(response);
            self.setState({
                cns: response.data,
            });
        });
    };

    // get ernolls

    getEnrollList = () => {
        let self = this;
        axios.get("/get/enroll/list").then(function (response) {
            console.log(response);
            self.setState({
                enroll: response.data,
            });
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

                            {/* studentName input */}
                            <div className="modal-body">
                                <form className="form ">
                                    {/* studentCollege input */}
                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-select"
                                            id="Enroll"
                                            aria-label="Floating label select example"
                                            onChange={this.inputEnroll}
                                            defaultValue={"DEFAULT"}
                                        >
                                            <option value="DEFAULT" disabled>
                                                Select Student
                                            </option>
                                            {this.state.enroll.map((item) => {
                                                return (
                                                    <>
                                                        <option
                                                            value={item.id}
                                                            key={item.id}
                                                        >
                                                            {item.studentN}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>

                                        <label>Enrolled Student</label>
                                    </div>

                                    {/* studentCollege input */}
                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-select"
                                            id="College"
                                            aria-label="Floating label select example"
                                            onChange={this.inputCollege}
                                            defaultValue={"DEFAULT"}
                                        >
                                            <option value="DEFAULT" disabled>
                                                Select College
                                            </option>
                                            {this.state.college.map((item) => {
                                                return (
                                                    <>
                                                        <option
                                                            value={item.id}
                                                            key={item.id}
                                                        >
                                                            {item.collegeName}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>

                                        <label>College</label>
                                    </div>

                                    {/* sudentProgram input */}
                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-select"
                                            id="Program"
                                            aria-label="Floating label select example"
                                            onChange={this.inputProgram}
                                            defaultValue={"DEFAULT"}
                                        >
                                            <option value="DEFAULT" disabled>
                                                Select Program
                                            </option>
                                            {this.state.program.map((item) => {
                                                return (
                                                    <>
                                                        <option
                                                            value={item.id}
                                                            key={item.id}
                                                        >
                                                            {item.programName}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>

                                        <label>Program</label>
                                    </div>

                                    {/* sudentProgram input */}

                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-select"
                                            id="CourseCode"
                                            aria-label="Floating label select example"
                                            onChange={this.inputCourse}
                                            defaultValue={"DEFAULT"}
                                        >
                                            <option value="DEFAULT" disabled>
                                                Select Course
                                            </option>
                                            {this.state.cns.map((item) => {
                                                return (
                                                    <>
                                                        <option
                                                            value={item.id}
                                                            key={item.id}
                                                        >
                                                            {item.courseName}
                                                        </option>
                                                    </>
                                                );
                                            })}
                                        </select>

                                        <label>COURSE </label>
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
