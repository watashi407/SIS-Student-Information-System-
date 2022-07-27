import React, { Component } from "react";
import Table from "./studentTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateModal from "./modals/createModal";
import EnrollModal from "./modals/enrollModal";
import Offers from "./modals/offersModal";

class StudentContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student: [],
            college: [],
        };
    }

    // life cylce method
    componentDidMount() {
        this.getStudentList();
        this.getCollegeList();
    }

    //get student list
    getStudentList = () => {
        let self = this;
        axios.get("/get/student/list").then(function (response) {
            console.log(response);
            self.setState({
                student: response.data,
            });
        });
    };

    // get college list

    getCollegeList = () => {
        let self = this;
        axios.get("/get/college/list").then(function (response) {
            self.setState({
                college: response.data,
            });
        });
    };
    render() {
        return (
            <div className="Container">
                <ToastContainer />
                <div className="row justify-content-center">
                    <div className="col-md-12 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <span className="fw-bold float-start">
                                    STUDENT LIST
                                </span>
                                <span>
                                    <EnrollModal />
                                </span>
                                <span>
                                    <CreateModal />
                                </span>
                                <span>
                                    {this.state.college.map(function (x, i) {
                                        return <Offers key={i} data={x} />;
                                    })}
                                </span>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="100px">
                                                ID
                                            </th>
                                            <th scope="col" width="100px">
                                                STUDENT#
                                            </th>
                                            <th scope="col" width="100px">
                                                NAME
                                            </th>
                                            <th scope="col" width="100px">
                                                COLLEGE
                                            </th>
                                            {/* <th scope="col" width="100px">
                                                PROGRAM
                                            </th>
                                            <th scope="col" width="100px">
                                                COURSE CODE
                                            </th>
                                            <th scope="col" width="100px">
                                                COURSE NAME
                                            </th>
                                            <th scope="col" width="100px">
                                                DATE ENROLLED
                                            </th> */}
                                            <th scope="col" width="100px">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.student.map(function (
                                            x,
                                            i
                                        ) {
                                            return <Table key={i} data={x} />;
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentContent;
