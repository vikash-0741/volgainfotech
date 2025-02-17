import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  const handleBack = () => navigate("/");

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="border p-4 rounded shadow-lg text-center"
        style={{ width: "400px", backgroundColor: "#f8f9fa" }}
      >
        <h2 className="mb-4">User Details</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <button className="btn btn-primary mt-3" onClick={handleBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
