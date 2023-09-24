import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { STUDENT } from "../../../constants/index"

function CreateStudentForm (props) {

  //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const students = useSelector(state => state.students)
  let { id } = useParams();
  // khởi tạo useRef
  const inputIdRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputGenderRef = useRef(null);
  const inputDayBirthRef = useRef(null);
  const inputAddressRef = useRef(null);

  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    if (id) {
      const studentUpdate = students.find((x) => Number(x.id) === Number(id));
      if (studentUpdate) {
        inputIdRef.current.value = studentUpdate.id;
        inputNameRef.current.value = studentUpdate.name;
        inputAgeRef.current.value = studentUpdate.age;
      }
    }
  }, []);

  const handleSubmit = (event) => {
    const student = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      age: Number(inputAgeRef.current.value),
      sex: inputGenderRef.current.value.toLowerCase() === "nam" ? true : false,
      dayBirth: inputDayBirthRef.current.value,
      address: inputAddressRef.current.value,
    };
    dispatch({
      type: STUDENT.STUDENT_ADD,
      payload: student
    })
    navigate('./..')
    event.preventDefault();
    event.stopPropagation();
  };

  const handleGoBack = () => {
    navigate(-1);  // Quay lại trang trước đó
  };
  return (
    <Container>
      <Form style={{ textAlign: "left" }}>
        <h2>
          {id
            ? "Chỉnh sửa thông Tin Sinh Viên "
            : " Thêm thông Tin Sinh Viên"}
        </h2>
        <div>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupId">
              <Form.Label>Mã sinh viên :</Form.Label>
              <Form.Control type="text" ref={inputIdRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên sinh viên:</Form.Label>
              <Form.Control type="text" ref={inputNameRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAge">
              <Form.Label>Tuổi:</Form.Label>
              <Form.Control type="text" ref={inputAgeRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupGender">
              <Form.Label>Giới tính:</Form.Label>
              <Form.Control type="text" ref={inputGenderRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupBirth">
              <Form.Label>Ngày sinh:</Form.Label>
              <Form.Control type="date" ref={inputDayBirthRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control type="text" ref={inputAddressRef} />
            </Form.Group>
          </Form>

          <Row >
            <Col className="d-flex gap-2">
              <Button onClick={handleSubmit}>
                {id ? "Chỉnh sửa" : " Thêm mới "}
              </Button>
              <Button variant="secondary" onClick={handleGoBack} >
                Quay lại
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </Container>
  );
}

export default CreateStudentForm;
