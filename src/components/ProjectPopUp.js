import React, { useState } from "react";

const PopupWindow = ({ project, onSave, onClose }) => {
  const [title, setTitle] = useState(project.projectName);
  const [Numberofstudents, setStudents] = useState(project.numStudents);
  const [dueDate, setDueDate] = useState(project.deadline);
  const [department ,setDepartment] = useState(project.department)
  const [remark,setRemark] = useState(project.remark)
  const [projectid,setProjectid] = useState(project.projectid)
  const handleSave = () => {
    onSave({ ...project, title, Numberofstudents, dueDate,department,remark,projectid });
    onClose();
  };

  return (
    <div className="popup-window">
      <form className="show_form_input_popup">
        <div className="column_popup">
          <div className="input-box_popup">
            <label>
              Project Name:
              <input
                className="show_form_width_popup"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
          </div>
          <div className="input-box_popup">
            <label>
              Offered to Department:
              <input
                className="show_form_width_popup"
                type="text"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="column1">
          <div className="input-box_popup">
            <label>
              Deadline:
              <input
                className="show_form_width_popup"
                type="Date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
              />
            </label>
          </div>
          <div className="input-box_popup">
            <label>
              Number of Students:
              <input
                className="show_form_width_popup"
                type="number"
                value={Numberofstudents}
                onChange={(event) => setStudents(event.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="input-box_popup">
          <label>
            Remark:
            <input
              className="show_form_width_popup"
              type="text"
              value={remark}
              onChange={(event) => setRemark(event.target.value)}
            />
          </label>
        </div>
      </form>
      <button className="show_form_button1_popup" onClick={handleSave}>Save</button>
      <button className="show_form_button2_popup" onClick={onClose}>Cancel</button>
    </div>
  );
}

export default PopupWindow;