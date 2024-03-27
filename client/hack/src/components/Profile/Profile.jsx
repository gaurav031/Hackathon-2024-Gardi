import './Profile.css';
import '../../App.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Appointment from '../Appoinment/Appoinment';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginStore';
const Profile = () => {
  const handleclick = () => {
    alert('video call is starting ');
    window.open('https://vibeexchange.netlify.app/', '_blank');
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleOnclick = () => {
    navigate("/");
    dispatch(loginActions.logout());
  };

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>Gaurav Kumar</h4>
                    <p className="text-secondary mb-1">Eye Patient</p>
                    <NavLink to="/health-card" className="nav-link">
                      <button className="btn btn-primary">Your Health Card</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink to="/medicine-detail" className="nav-link">
                    Medicine Detail
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/doctor-detail" className="nav-link">
                    Doctor Detail
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/appointment" className="nav-link">
                    Your Appointment
                  </NavLink>
                </li>
                <li className="list-group-item" onClick={handleclick}>
                  Your Video Appointment
                </li>
                <li className="list-group-item" onClick={() => navigate('/chatpage')}>
                  Message
                </li>
                <li className="list-group-item">
                  <button className="btn btn-primary" onClick={handleOnclick}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Gaurav Kumar</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">gk@gmail.com</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">9145278892</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">897653733</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Rajkot, Gujarat</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <button className="btn btn-info">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
