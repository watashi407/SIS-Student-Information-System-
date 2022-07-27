import React, { Component } from "react";
import CO from "./collapseOffer";

class ExtendOffer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            programName: null,
            programFN: null,
            program: [],
        };
    }

    getOfferDetails = (id) => {
        let self = this;
        axios
            .post("/get/offer/list", {
                offerID: id,
            })
            .then((response) => {
                self.setState({
                    programName: response.data.programName,
                    programFN: response.data.programFN,
                    program: response.data,
                });
                console.log(response.data);
            });
    };

    render() {
        return (
            <>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#offerProgram"}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={() => {
                        this.getOfferDetails(this.props.eachRowID);
                    }}
                >
                    College Program of {this.props.nameC}
                </button>

                <div
                    id={"offerProgram"}
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                >
                    <div className="accordion-body">
                        {" "}
                        {this.state.program.map((item) => {
                            return (
                                <>
                                    <div value={item.id} key={item.id}>
                                        <h6 className="fw-bold">
                                            {" "}
                                            Course Name : {
                                                item.programName
                                            }{" "}
                                            <span>/{item.programFN}/</span>
                                        </h6>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ExtendOffer;
