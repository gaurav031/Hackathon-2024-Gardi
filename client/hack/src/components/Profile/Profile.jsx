import "./Profile.css";
import '../../App.css';

const Profile = () => {
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
                  <a href="card.html">
                    <button className="btn btn-primary">Your Health Card</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0 ml-30">Medicine Detail </h6>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0 ml-30">Doctor Detail</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0 ml-30">Your Appointment</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a href="index.html">
                  {" "}
                  <h6 className="mb-0 ml-30">
                    <button className="btn btn-primary">Log out</button>
                  </h6>
                </a>
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
                <div className="col-sm-9 text-secondary">Rajkot,Gujrat</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a
                    className="btn btn-info "
                    target="__blank"
                    href="profile.html"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )  
};

export default Profile;
