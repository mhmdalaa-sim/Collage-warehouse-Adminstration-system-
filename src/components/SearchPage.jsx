import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="12">
      <form className="form-inline mt-4 mb-4 w-50 mx-auto">
        <div className=" w-100">
          <MDBIcon icon="search" className=" mr-2" />
          <input
            className="form-control form-control-sm "
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>
    </MDBCol>
  );
};

export default SearchPage;
