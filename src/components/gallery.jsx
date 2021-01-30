import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Examples of what might cause defects can be seen below:
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/carbonsteelband.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Carbon Steel Band (SOP)</h4>
                      </div>
                      <img
                        src="img/portfolio/carbonsteelband.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/coolingband.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Cooling Band</h4>
                      </div>
                      <img
                        src="img/portfolio/coolingband.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/bakeovenband.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Bake Oven Band</h4>
                      </div>
                      <img
                        src="img/portfolio/bakeovenband.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/conveyorband.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Conveyor Band</h4>
                      </div>
                      <img
                        src="img/portfolio/conveyorband.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/stainlessteelband.jpeg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Stainless Steel Band</h4>
                      </div>
                      <img
                        src="img/portfolio/stainlessteelband.jpeg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>






            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
