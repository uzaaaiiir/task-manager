import "./App.css";
import { useState } from "react";

// react-bootstrap components
import Button from "react-bootstrap/Button";

// my components
import NavBar from "./components/NavBar";
import SignUpModal from "./components/SignUpModal";

function App() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <NavBar />
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign Up
            </Button>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default App;

// TODO: Add components
