import { useState } from "react";

function UserForm(props: any) {
  const { handleClose, handleSubmit } = props;
  const [newRecord, setNewRecord] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: any) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    handleSubmit(newRecord);
    setNewRecord({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Record</h5>
            <button className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Name"
              value={newRecord.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              placeholder="Email"
              value={newRecord.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              className="form-control mb-2"
              placeholder="Phone"
              value={newRecord.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              className="form-control mb-2"
              placeholder="Address"
              value={newRecord.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button className="btn btn-primary" onClick={onSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
