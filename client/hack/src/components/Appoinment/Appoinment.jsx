import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/loginStore';
const Appointment = () => {
  const navigate=useNavigate();
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
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>Gaurav Kumar</h4>
                    <p className="text-secondary mb-1">Eye Patient</p>
                    <a href="/card">
                      <button className="btn btn-primary">Your Health Card</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0 ml-3">Medicine Detail</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0 ml-3" onClick={()=>navigate("/profile")}>Patient Detail Detail</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0 ml-3">Your Appointment</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0 ml-3" onClick={handleOnclick}>Log out</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Hospital Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">MKM Hospital</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Doctor Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Dr. Mantu Kumar Morya
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Patient name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Gaurav Kumar</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Price</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">1200 ₹</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mode Of payment</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Online</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Time of Appointment</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Monday 12 Feb 2024 At 5 PM
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Appointment Type</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <label htmlFor="physical">Physical</label>
                    <input type="radio" name="appointmentType" id="physical" />
                    <label htmlFor="video">Video</label>
                    <input type="radio" name="appointmentType" id="video" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a
                      className="btn btn-danger"
                      href="./92201703001_Python_Data_Structures.pdf"
                      download
                    >
                      Download Invoice
                    </a>
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

export default Appointment;
