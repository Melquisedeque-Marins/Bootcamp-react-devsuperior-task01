import CarCard from "components/CarCard";
import Navbar from "components/Navbar";
import SearchButton from "components/SearchButton";
import "./styles.css";

const Catalog = () => {
  return (
      <div className="container my-3">
            <SearchButton />
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
                <CarCard />
            </div>
          </div>
      </div>
  );
};

export default Catalog;
