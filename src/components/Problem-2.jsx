import React, { useState } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const handleCloseA = () => setShowModalA(false);
  const handleCloseB = () => setShowModalB(false);
  const handleShowA = () => setShowModalA(true);
  const handleShowB = () => setShowModalB(true);
  return (
    <div className="container">
      <ModalA
        showModalA={showModalA}
        setShowModalB={setShowModalB}
        handleCloseA={handleCloseA}
      />
      <ModalB
        showModalB={showModalB}
        setShowModalA={setShowModalA}
        handleCloseB={handleCloseB}
      />
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShowA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleShowB}
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
