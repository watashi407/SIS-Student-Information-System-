import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    // delete button
    deleteStudentData = (student) => {
        axios.delete("/delete/student/data/" + student).then(() => {
            toast.error("Student Info Deleted !");
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
                    id={"deleteModal" + this.props.delID}
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header bg-danger">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                ></h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <h3 className="badge text-dark">
                                    Are you sure you want to delete this data ?
                                </h3>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        this.deleteStudentData(
                                            this.props.delID
                                        );
                                    }}
                                >
                                    YES
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-info"
                                    data-bs-dismiss="modal"
                                >
                                    NO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default DeleteModal;
