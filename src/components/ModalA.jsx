import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalC from "./ModalC";

const ModalA = ({ showModalA, setShowModalB, handleCloseA }) => {
  const [showModalC, setShowModalC] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const handleCloseC = () => setShowModalC(false);
  const handleShowC = (data) => {
    setSelectedData(data);
    setShowModalC(true);
  };
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    if (showModalA) {
      fetchContacts();
    }
  }, [showModalA]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://contact.mediusware.com/api/contacts/",
        {
          headers: {
            Accept: "application/json",
            "X-CSRFToken":
              "YRUABef0DHKfCkUCUMV4RDRqpf6dhAKYHQc01yy91gPZZTOqxZhAC3D1TkZWOPji"
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setContacts(data?.results);
      } else {
        console.error("Failed to fetch contacts");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  const handleSwitch = () => {
    setShowModalB(true);
    handleCloseA();
  };

  console.log(contacts);
  return (
    <Modal show={showModalA} onHide={handleCloseA}>
      <Modal.Header closeButton>
        <Modal.Title>Country</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalC
          selectedData={selectedData}
          showModalC={showModalC}
          handleCloseC={handleCloseC}
          handleShowC={handleShowC}
        />

        {contacts?.map((contact) => (
          <div
            key={contact.id}
            className="row border m-2 cursor-pointer"
            onClick={() => handleShowC(contact)}
          >
            <div className="col-6">
              <p>Name: {contact?.country.name}</p>
            </div>
            <div className="col-6">
              <p>Phone: {contact?.phone}</p>
            </div>

            {/* Add more contact details here */}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ background: "#46139f" }}>All Contacts</Button>
        <Button style={{ background: "#ff7f50" }} onClick={handleSwitch}>
          US Contacts
        </Button>
        <Button style={{ background: "#46139f" }} onClick={handleCloseA}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
