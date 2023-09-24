import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function AddStudent (props) {
    const { handleSubmitStudent, studentUpdate } = props;

    const inputIdRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputAgeRef = useRef(null);
    const inputGenderRef = useRef(null);
    const inputAddressRef = useRef(null);

    useEffect(() => {
        if (studentUpdate) { // neu id != null la chinh sua 
            inputIdRef.current.value = studentUpdate.id;
            inputNameRef.current.value = studentUpdate.name;
            inputAgeRef.current.value = studentUpdate.age;
        } else {
            // truong hop them moi 
            inputIdRef.current.value = "";
            inputNameRef.current.value = "";
            inputAgeRef.current.value = "";
            inputGenderRef.current.value = "";
            inputEmailRef.current.value = "";
            inputAddressRef.current.value = "";
        }
    }, [studentUpdate]);
    const handleSubmit = (event) => {
        const student = {
            id: inputIdRef.current.value,
            name: inputNameRef.current.value,
            age: Number(inputAgeRef.current.value),
            sex: inputGenderRef.current.value.toLowerCase() === "nam" ? true : false,
            email: inputEmailRef.current.value,
            address: inputAddressRef.current.value,
        };
        handleSubmitStudent(student);
        inputIdRef.current.value = "";
        inputNameRef.current.value = "";
        inputAgeRef.current.value = "";
        inputGenderRef.current.value = "";
        inputEmailRef.current.value = "";
        inputAddressRef.current.value = "";
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Form style={{ textAlign: "left" }}>
            <h2>
                {studentUpdate
                    ? "Chỉnh sửa thông Tin Sinh Viên "
                    : "Thêm thông tin User "}
            </h2>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupId">
                        <Form.Label>ID :</Form.Label>
                        <Form.Control type="text" ref={inputIdRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Tên user:</Form.Label>
                        <Form.Control type="text" ref={inputNameRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupAge">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" ref={inputEmailRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupGender">
                        <Form.Label>Tuổi:</Form.Label>
                        <Form.Control type="text" ref={inputAgeRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupBirth">
                        <Form.Label>Địa chỉ:</Form.Label>
                        <Form.Control type="text" ref={inputAddressRef} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupAddress">
                        <Form.Label>Giới tính:</Form.Label>
                        <Form.Control type="text" ref={inputGenderRef} />
                    </Form.Group>
                </Form>
                <br />
                <br />
                <Button onClick={handleSubmit}>
                    {studentUpdate ? "Chỉnh sửa" : " Thêm mới "}
                </Button>
            </div>
            <hr />
        </Form>
    )
}
export default AddStudent;