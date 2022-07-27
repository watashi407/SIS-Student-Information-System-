import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./extendOffer";

class offersModal extends Component {
    constructor(props) {
        super(props);
    }

    // get college list

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-sm btn-info m-1 float-start ms-5 text-white "
                    data-bs-target={"#offersModal" + this.props.data.id}
                    data-bs-toggle="modal"
                >
                    Program offered in {this.props.data.collegeName}
                </button>
                <div
                    className="modal fade"
                    id={"offersModal" + this.props.data.id}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h5
                                    className="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    {this.props.data.collegeName}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            {/* studentName input */}
                            <div className="modal-body p-5">
                                {/*  */}
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <Offers
                                            eachRowID={this.props.data.id}
                                            nameC={this.props.data.collegeName}
                                        />
                                    </div>
                                </div>

                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default offersModal;
