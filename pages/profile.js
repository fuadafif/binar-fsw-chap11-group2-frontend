import HomeNav from "../components/navbar/HomeNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Modal, ModalBody } from "reactstrap";

function Profile() {
  const { username } = useSelector((state) => state.auth);

  const [post, setPost] = useState(null);
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalPic, setModalPic] = useState(false);
  const [pic, setPic] = useState("/img/profile-2.jpg");
  const [savePic, setSavePic] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/biodata/${username}`).then((res) => {
      setPost({
        res: res.data,
      });
      console.log(res.data);
    });
  }, []);

  if (!post) return null;

  const toggleUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    if (!email || !city) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post(
          `http://localhost:4000/biodata/update/${username}`,
          {
            email: email,
            city: city,
          }
        );
        alert(result.data.message);
        window.location.reload();
      } catch {
        alert("Your email is already in use.");
      }
    }
  };

  const togglePic = () => {
    setModalPic(!modalPic);
  };

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setPic(URL.createObjectURL(uploaded));
    setSavePic(uploaded);
  };

  const uploadPic = async () => {
    if (!savePic) {
      alert("No file selected");
    } else {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      let formData = new FormData();
      formData.append("file", savePic);
      await axios
        .post(`http://localhost:4000/upload/${username}`, formData, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.reload();
        });
    }
  };

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
              {post.res.map((user, idx) => {
                return (
                  <Image
                    key={idx}
                    src={user.picture}
                    className="card-img-top"
                    alt="profile"
                    height={500}
                    width={500}
                  />
                );
              })}

              <button className="btn btn-sm btn-light" onClick={togglePic}>
                Upload Photo
              </button>
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
                <button
                  className="btn btn-success btn-sm"
                  onClick={toggleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL RANDOM SCORE */}
      <Modal
        isOpen={modalUpdate}
        toggle={toggleUpdate}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-sm btn btn-primary">
              Submit
            </button>
          </form>
        </ModalBody>
      </Modal>
      {/* MODAL RANDOM SCORE */}
      <Modal
        isOpen={modalPic}
        toggle={togglePic}
        modalTransition={{ timeout: 100 }}
        style={{
          width: 500,
        }}
      >
        <ModalBody>
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="mt-5 mx-auto">
              <div>
                <Image
                  src={pic}
                  className="img-thumbnail"
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
              <div className="my-3">
                <label htmlFor="formFile" className="form-label">
                  Upload Image here
                </label>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  id="formFile"
                  accept="image/*"
                  onChange={handleUploadChange}
                ></input>
                <button
                  onClick={uploadPic}
                  className="btn btn-primary btn-sm w-100 mt-2"
                >
                  Save my photo
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Profile;
