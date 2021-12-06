import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/tours`).then((res) => {
      setTours(res.data.data.tours);
      
      setIsLoading(false);
      console.log(tours);
    });
  }, []);

  return (
    <div className="homePage">
      <div className="cards">
        {isLoading && <p>loading...</p>}
        {tours &&
          tours.map((tour) => (
            <div className="cards-preview" key={tours._id}>
              <h2 className="blog-title">{tour.name}</h2>
              <h3 className="duration">{tour.duration} days</h3>
              <p className="blog-description">{tour.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
