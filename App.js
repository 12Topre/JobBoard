import React, { useState } from "react";
import {
Button,
Modal, 
TextField,
Table,
TableBody,
TableCell,
TableHead,
TableRow,
Typography,
} from "@material-ui/core";

function App() {
const [jobs, setJobs] = useState([]);

const [newJob, setNewJob] = useState({
title: "",
description: "",
salary: "",
});

const [modalOpen, setModalOpen] = useState(false);
const [successModalOpen, setSuccessModalOpen] = useState(false);

const handleModalOpen = () => {
setModalOpen(true);
};

const handleModalClose = () => {
setModalOpen(false);
};

const handleSuccessModalOpen = () => {
setSuccessModalOpen(true);
};

const handleSuccessModalClose = () => {
setSuccessModalOpen(false);
};

const handleInputChange = (event) => {
setNewJob({
...newJob,
[event.target.name]: event.target.value,
});
};

const handleAddJob = () => {
setJobs([...jobs, newJob]);
setNewJob({
title: "",
description: "",
salary: "",
});
handleModalClose();
};

const handleApplyJob = () => {
handleSuccessModalOpen();
};

return (
<div>
<Button variant="contained" color="primary" onClick={handleModalOpen}>
Add New Job
</Button>

<Modal open={modalOpen} onClose={handleModalClose}>
<div className="modal">
<Typography variant="h6">Add New Job</Typography>
<form>
<TextField
name="title"
label="Title"
value={newJob.title}
onChange={handleInputChange}
/>
<TextField
name="description"
label="Description"
value={newJob.description}
onChange={handleInputChange}
/>
<TextField
name="salary"
label="Salary"
value={newJob.salary}
onChange={handleInputChange}
/>
<Button
variant="contained"
color="primary"
onClick={handleAddJob}
>
Save Job
</Button>
</form>
</div>
</Modal>

<Modal open={successModalOpen} onClose={handleSuccessModalClose}>
<div className="modal">
<Typography variant="h6">Successfully applied to job</Typography>
</div>
</Modal>

<Table>
<TableHead>
<TableRow>
<TableCell>Title</TableCell>
<TableCell>Description</TableCell>
<TableCell>Salary</TableCell>
<TableCell>Apply</TableCell>
</TableRow>
</TableHead>
<TableBody>
{jobs.map((job, index) => (
<TableRow key={index}>
<TableCell>{job.title}</TableCell>
<TableCell>{job.description}</TableCell>
<TableCell>{job.salary}</TableCell>
<TableCell>
<Button
variant="contained"
color="primary"
onClick={handleApplyJob}
>
Apply
</Button>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</div>
);
}

export default App;
