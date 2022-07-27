import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EnrollModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // StudentId: null,
            StudentN: null,
        };
    }

    // componentDidMount() {
    //     this.getCollegeList();
    //     this.getProgramList();
    //     this.getCourseList();
    // }

    // create data
    inputStudentN = (event) => {
        this.setState({
            StudentN: event.target.value,
        });
    };

    enrollStudentData = () => {
        axios
            .post("/enroll/student/data", {
                // StudentId: this.state.StudentId,
                StudentN: this.state.StudentN,
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

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-sm btn-success m-1 float-end"
                    data-bs-target={"#enrollModal"}
                    data-bs-toggle="modal"
                >
                    Enroll Student
                </button>
                <div
                    className="modal fade"
                    id={"enrollModal"}
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
                                    Enroll Student
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
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="StudentN"
                                            placeholder="Student Name here"
                                            onChange={this.inputStudentN}
                                        />
                                        <label>Student Name</label>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    value="ADD"
                                    onClick={this.enrollStudentData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EnrollModal;
