import { Form, FormGroup, Button, Col, Input, Card, CardImg } from "reactstrap";
import Image from "next/image";

// import component
import LandingNav from "../components/navbar/LandingNav.js";
import VideoPlayer from "../components/videoPlayer/VideoPlayer.js";
import Footer from "../components/footer/Footer";

// import assets
import style from "../styles/Landing.module.css";

export default function Home() {
  return (
    <>
      {/* header */}
      <div>
        {/* navigation bar */}
        <LandingNav />
        {/* end of navigation bar */}

        {/* jumbotron */}
        <Card className="header1">
          <CardImg src="/img/fornite.jpg" alt="Card image cap" />
        </Card>
        {/* end of jumbotron */}
      </div>
      {/* end of header */}

      {/* Reasons */}
      <div id="reasons" className={style.main}>
        <div
          className={`container-xxl mx-auto p-0 position-relative ${style["content-2-4"]}`}
        >
          <div className={`text-center ${style["title-text"]}`}>
            <h1 className={`text-white ${style["text-title"]}`}>
              3 Reasons To Play It
            </h1>
            <p className={style["text-caption"]}>
              You will get an amazing gaming experience:
            </p>
          </div>
          <div className={`text-center ${style["grid-padding"]}`}>
            <div className="row">
              <div className={`col-lg-4 ${style.column}`}>
                <div className={style.icon}>
                  <Image
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-11.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className={`text-white ${style["icon-title"]}`}>
                  Easy to Operate
                </h3>
                <p className={style["icon-caption"]}>
                  Easily access games
                  <br />
                </p>
              </div>
              <div className={`col-lg-4 ${style.column}`}>
                <div className={style.icon}>
                  <Image
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-12.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className={`text-white ${style["icon-title"]}`}>Light</h3>
                <p className={style["icon-caption"]}>
                  With the lightness of the game,
                  <br />
                  you will get a smooth gaming experience
                </p>
              </div>
              <div className={`col-lg-4 ${style.column}`}>
                <div className={style.icon}>
                  <Image
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-13.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <h3 className={`text-white ${style["icon-title"]}`}>Free</h3>
                <p className={style["icon-caption"]}>
                  Enjoy a variety of games that
                  <br />
                  interest you for free
                </p>
              </div>
            </div>
            {/* end of about */}

            <hr />

            {/* player experience */}
            <div id="playerexp">
              <h1>Paris International Tournament</h1>
              <p>August 2022</p>
              <div>
                <VideoPlayer />
              </div>
            </div>
            {/* end of player experience */}
          </div>

          {/* about us */}
          <div id="aboutus" className={style["card-block"]}>
            <div className={style.card}>
              <div className="d-flex flex-lg-row flex-column align-items-center">
                <div className="me-lg-3">
                  <Image
                    src="/img/gaming.jpg"
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </div>

                <div
                  className={`flex-grow-1 text-lg-start text-center ${style["card-text"]}`}
                >
                  <h3 className={`text-white ${style["card-title"]}`}>
                    Team T2
                  </h3>
                  <p className={style["card-caption"]}>
                    Team T2 is Indonesian game developer company that has been
                    active since July 2020, <br /> with team consisting of
                    passionate people.
                    <br className="d-none d-lg-block " />A game studio that
                    provides a variety of games with various genres.
                  </p>
                </div>
              </div>

              <hr />

              {/* our team */}
              <div>
                <h1 className={"text-center"}>Our Team</h1>
                <div className={`text-center ${style["grid-padding"]}`}>
                  <div className="row">
                    {/* member 01 */}
                    <div className={`col-lg-4 ${style.column}`}>
                      <div>
                        <Image
                          src="/img/member-01.jpg"
                          alt="member-01"
                          width={300}
                          height={400}
                        />
                        <div>
                          <h5>MICHAEL ROOF</h5>
                          <p>Co-founder &amp; Designer</p>
                          <p>
                            We’ll etch your brand onto tangible objects:
                            business cards, ads, stickers, brochures, you name
                            it. You won’t see business cards, ads, stickers,
                            brochures anything until we’re done drooling at the
                            result.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end of member 01 */}

                    {/* member 02 */}
                    <div className={`col-lg-4 ${style.column}`}>
                      <div>
                        <Image
                          src="/img/member-02.jpg"
                          alt="member-02"
                          width={300}
                          height={400}
                        />
                        <div>
                          <h5>CHARLES WHITE</h5>
                          <p>Co-founder &amp; Designer</p>
                          <p>
                            We’ll etch your brand onto tangible objects:
                            business cards, ads, stickers, brochures, you name
                            it. You won’t see business cards, ads, stickers,
                            brochures anything until we’re done drooling at the
                            result.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end of member 02 */}

                    {/* member 03 */}
                    <div className={`col-lg-4 ${style.column}`}>
                      <div>
                        <Image
                          src="/img/member-03.jpg"
                          alt="member-03"
                          width={300}
                          height={400}
                        />
                        <div>
                          <h5>MARTIN CAMBRIGE</h5>
                          <p>Co-founder &amp; Designer</p>
                          <p>
                            We’ll etch your brand onto tangible objects:
                            business cards, ads, stickers, brochures, you name
                            it. You won’t see business cards, ads, stickers,
                            brochures anything until we’re done drooling at the
                            result.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end of member 03 */}
                  </div>
                </div>
              </div>
              {/* end of out team */}
            </div>
          </div>
          {/* about us */}
        </div>
        {/* end of game exparience */}

        {/* contact */}
        <div
          id="contact"
          className={`container-xxl mx-auto p-0 position-relative text-center ${style["content-2-4"]}`}
        >
          <h1>Get in Touch</h1>
          <p>
            Sed ac mattis justo. Vestibulum facilisis at arcu ac porta. Vivamus
            at ipsum at quam hendrerit gravida.
          </p>

          <br />

          <Form>
            {/* insert name */}
            <FormGroup row>
              <Col sm={4}>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Insert your name here"
                />
              </Col>
            </FormGroup>

            {/* insert e-mail */}
            <FormGroup row>
              <Col sm={4}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Insert your e-mail here"
                  required
                />
              </Col>
            </FormGroup>

            {/* insert massage */}
            <FormGroup row>
              <Col sm={4}>
                <textarea
                  className="form-control br-b"
                  name="message"
                  id="message"
                  placeholder="Message..."
                />
              </Col>
            </FormGroup>
          </Form>

          {/* submit button */}
          <FormGroup row>
            <Col sm={4}>
              <Button
                className="btn-dark"
                type="submit"
                id="btn"
                // onClick={btnClick}
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </div>
        {/* end of contact */}

        {/* footer */}
        <Footer />
        {/* end of footer */}
      </div>
    </>
  );
}
