import React from "react";

function Project() {
  return (
    <div>
 
    <div className=" container gallery-container ">

    <div className=" row ">

    <div className=" col-3 ">
      <div className="card ">
        <img className="card-img-top " src="assets/ScreenshotPasswordGenerator.png " alt="Password Generator ">
        <div className="card-body ">
          <h4 className="card-title ">Random number and letter combinations
          </h4>
          <a href="https://karynclarke.github.io/Password-Generator/ " className="btn btn-primary stretched-link ">Password Generator</a>
        </div>
      </div>
    </div>

    <div className=" col-3 ">
      <div className="card ">
        <img className="card-img-top " src="assets/ScreenshotCodingQuiz.png " alt="coding quiz ">
        <div className="card-body ">
          <h4 className="card-title "> Questions with UofO Duck Theme
          </h4>
          <a href="https://karynclarke.github.io/bootcamp-quiz/ " className="btn btn-primary stretched-link ">Bootcamp Coding Quiz</a>
        </div>
      </div>
    </div>

    <div className="col-3 ">
      <div className="card "> <img className="card-img-top " src="assets/wxdashboard.jpg" alt="Weather Dashboard " />
        <div className="card-body ">
          <h4 className="card-title ">Weather Dashboard
          </h4>
          <a href=" https://karynclarke.github.io/Weather-Dashboard/" className="btn btn-primary stretched-link "> Five Day Forecast</a>
        </div>
      </div>
    </div>

    <div className=" col-3 ">
      <div className="card ">
        <img className="card-img-top " src="assets/Screenshot (115).png " alt="note taker "/>
        <div className="card-body ">
          <h4 className="card-title "> Note Taker
          </h4>
          <a href="https://serene-taiga-27292.herokuapp.com/" className="btn btn-primary stretched-link "> Saves Notes Utilizing Express</a>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="col-3">
    <div className="card">
      <img className="card-img-top " src="assets/ScreenshotWorkdayScheduler.png " alt="WorkDayScheduler ">
      <div className="card-body " />
        <h4 className="card-title "> Daily Planner
        </h4>
        <a href="https://karynclarke.github.io/Workday-Scheduler/ " className="btn btn-primary stretched-link "> Work Day Scheduler </a>
      </div>
    </div>
  </div>

    <div className="col-3 ">
    <div className="card "> <img className="card-img-top " src="assets/ScreenshotSearchReps.png " alt="SearchMyReps " />
      <div className="card-body ">
        <h4 className="card-title ">Government Representative Search
        </h4>
        <a href=" https://carlosissac.github.io/project1contactmyreps/ " className="btn btn-primary stretched-link "> Search My Reps Group Project </a>
      </div>
    </div>
  </div>

    <div className="col-3">
    <div className="card">
      <img className="card-img-top " src="assets/burgerScreenshot.jpg " alt="Eat Burger">
      <div className="card-body ">
        <h4 className="card-title "> Eat-Da-Burger
        </h4>
        <a href="https://shielded-cliffs-03581.herokuapp.com/ " className="btn btn-primary stretched-link "> Burger
          Ordering App</a>
      </div>
    </div>
  </div>
    </div>
    
    </div>
    </div>
    </div>
    
  );
}

export default Project;
