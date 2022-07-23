import React, { useState, useEffect } from "react";

import StudentList from "./studentList/student";

const App = () => {
    return (
        <div className="container">
            <div className="col-lg-12">
                <StudentList />
            </div>
        </div>
    );
};

export default App;
