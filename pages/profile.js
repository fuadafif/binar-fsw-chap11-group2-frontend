import HomeNav from "../components/navbar/HomeNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Modal, ModalBody } from "reactstrap";

function Profile() {
  const { username } = useSelector((state) => state.auth);

  const [post, setPost] = useState(null);
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4000/biodata/${username}`).then((res) => {

      setPost({
        res: res.data,
      });
      console.log(res.data);
    });
  }, []);

  if (!post) return null;

  const toggle = () => {
    setModal(!modal);
  };

  const updateProfile = async () => {
    try {
      const result = await axios.post(`http://localhost:4000/biodata/update/${username}`, {
        email: email,

        city: city
      });
      alert(result.data.message)
    } catch {
      alert("Your email is already in use.")
    }
  }
  return (
    <div>
      <HomeNav />
      <div>
        <div className="position-relative">
          <div className="position-absolute start-50 translate-middle-x mt-5">
            <div
              className="card"
              style={{
                width: 350,
                height: 500,
              }}
            >
              <Image src="/img/profile.png" className="card-img-top" alt="profile" height={500} width={500} />
              <div className="card-body">
                <h4 className="card-title">Profile</h4>
                <div className="card-text">
                  {post.res.map((user, idx) => {
                    return (
                      <ul key={idx}>
                        <li>Email: {user.email}</li>
                        <li>City: {user.city}</li>
                      </ul>
                    );
                  })}
                </div>
                <button className="btn btn-success btn-sm" onClick={toggle}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL RANDOM SCORE */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
        style={{
          width: 500,
        }}
      >
        <ModalBody>
          <form onSubmit={updateProfile}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={e => setEmail(e.target.value)}
              />

            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>

              <input
                type="city"
                className="form-control"
                id="city"
                onChange={e => setCity(e.target.value)}
              />

            </div>
            <button type="submit" className="btn-sm btn btn-primary">
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Profile;
