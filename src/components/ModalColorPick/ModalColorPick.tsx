import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type MyModalProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}: MyModalProps) => {

    const [selectedColor, setSelectedColor] = useState("#FFF");

    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    }

    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide();
    }

    return(
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Title>Cambiar color</Modal.Title>
            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">Elige un color</Form.Label>
                <Form.Control
                type='color'
                id='exampleColorInput'
                defaultValue="#FFF"
                title="Elige un color"
                onChange={handleColorPickerChange}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={handleAcceptClick}>Aceptar</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModalColorPick