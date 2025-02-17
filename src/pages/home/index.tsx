import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "../../components/userForm";
import { useNavigate } from "react-router-dom";

export interface IUserData {
  id: number | Date;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialData = [
  {
    id: 1,
    name: "rahul",
    email: "rahul@gmail.com",
    phone: "8583453234",
    address: "123 Main Street",
  },
  {
    id: 2,
    name: "Shyam",
    email: "Shyam@gmail.com",
    phone: "9983423854",
    address: "456 HG Street",
  },
  {
    id: 3,
    name: "Rajesh",
    email: "Rajeshe@gmail.com",
    phone: "4348273323",
    address: "789 AB Street",
  },
  {
    id: 4,
    name: "Mayank",
    email: "Mayank@gmail.com",
    phone: "9920558566",
    address: "101 old Street",
  },
];

function Home() {
  const navigate = useNavigate();

  const [data, setData] = useState<IUserData[]>(initialData);
  const [search, setSearch] = useState("");
  const [userModal, setUserModal] = useState<boolean>(false);

  const filteredUsers = useMemo(() => {
    const user = data.filter((user) =>
      user.email.toLowerCase().includes(search.toLowerCase())
    );

    return user || [];
  }, [data, search]);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleCreateRecord = (values: IUserData) => {
    if (values.name && values.email && values.phone) {
      const { id, ...rest } = values;
      setData([...data, { id: Date.now(), ...rest }]);
      toggleModal();
    }
  };

  const handleDetails = (user: any) => {
    navigate("/userDetails", { state: { user } });
  };

  const toggleModal = () => setUserModal((v) => !v);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ width: "300px" }}>
          <div className="input-group mb-3" style={{ position: "relative" }}>
            <span
              className="input-group-text"
              style={{
                position: "absolute",
                left: "-1px",
                top: "0%",
                zIndex: 1,
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control rounded"
              placeholder="Search by Email Address"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: "50px" }}
            />
          </div>
        </div>

        <button
          className="btn btn-outline-secondary mb-3"
          onClick={toggleModal}
        >
          CREATE
        </button>
      </div>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => handleDetails(item)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <td colSpan={4} className="text-center">
              No Record found.
            </td>
          )}
        </tbody>
      </table>

      {userModal && (
        <UserForm handleClose={toggleModal} handleSubmit={handleCreateRecord} />
      )}
    </div>
  );
}

export default Home;
