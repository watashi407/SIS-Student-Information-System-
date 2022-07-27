import React, { Component } from "react";

class ViewModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div
                    className="offcanvas offcanvas-start  text-bg-dark"
                    tabIndex="-1"
                    id={"viewmodal" + this.props.modalID}
                    aria-labelledby="offcanvasDarkLabel"
                >
                    <div className="offcanvas-header bg-warning">
                        <h5
                            className="offcanvas-title fw-bold"
                            id="offcanvasDarkLabel"
                        >
                            STUDENT INFO
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <strong>
                            Name: &nbsp;
                            {this.props.studentDetails.currentStudentName}
                        </strong>
                        <hr />
                        <strong>
                            Student ID: &nbsp;
                            {this.props.studentDetails.currentStudentNumber}
                        </strong>
                        <br />
                        <strong>
                            College: &nbsp;
                            {this.props.studentDetails.currentCollege}
                        </strong>
                        <br />
                        <strong>
                            Program: &nbsp;
                            {this.props.studentDetails.currentProgram}
                        </strong>
                        <br />
                        <strong>
                            Course Code: &nbsp;
                            {this.props.studentDetails.currentCourse}
                        </strong>
                        <br />
                    </div>
                </div>
            </>
        );
    }
}

export default ViewModal;
