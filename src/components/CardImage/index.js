import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";


const Cardimage = () => {
  return (
    <React.Fragment>
      <h1 id="fast">My Gallery</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/8363100/pexels-photo-8363100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Fun activities</h5>
                <p class="card-text">
                preschoolers can have fun dancing along and following the instructions from the lyrics. Jump, walk, run,studing.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/8363114/pexels-photo-8363114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Craft work</h5>
                <p class="card-text">
                Drawing, picking up objects, cutting with scissors, turning pages in a book and pinching objects between fingers.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="https://images.pexels.com/photos/8363040/pexels-photo-8363040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Group discussion</h5>
                <p class="card-text">
                A comprehensive technique to judge the suitability of an individual and his appropriateness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cardimage;
