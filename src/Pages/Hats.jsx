// import HatCard from "../components/HatCard";
import axios from "axios";
import { useState, useEffect } from "react";

const arrHats = [
  "https://www.mammothheadwear.com/cdn/shop/products/2_e2042dde-4c9f-4eb8-b8fe-a652b123e499.jpg?v=1679965162",
  "https://www.mammothheadwear.com/cdn/shop/products/Brown1.jpg?v=1620087568",
];
<p> hats </p>;

function Hats() {
  const [hats, setHats] = useState(null);

  useEffect(() => {
    const fetchHats = async () => {
      try {
        const response = await axios.get(
          "https://cats-dogs-abner.adaptable.app/hats"
        );

        setHats(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHats();
  }, []);

  return (
    <>
      <h1 className=" p-3 text-center">Hats</h1>
      <div className="d-inline-flex flex-wrap p-2 justify-content-center w-100 container-fluid">
        {hats &&
          hats.map((hat, i) => {
            return (
              <div key={i}>
                <div
                  className="card m-3 p-3 justify-content-center"
                  style={{ width: "24rem", height: "auto" }}
                >
                  <div className="card-body justify-content-center">
                    <img
                      src={arrHats[Math.floor(Math.random() * arrHats.length)]}
                      style={{ height: "20rem" }}
                      alt={"image of" + hat.title}
                    />
                    <h2 className="card-title mt-2">{hat.title}</h2>
                    <h6 className="card-subtitle mb-3 text-muted">
                      <p>{hat.description}</p>
                    </h6>
                    <h4 className="card-text">Price ${hat.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Hats;
