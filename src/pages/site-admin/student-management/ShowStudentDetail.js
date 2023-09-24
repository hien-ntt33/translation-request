import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function ShowStudentDetail (props) {

  const navigate = useNavigate();

  let { id } = useParams();
  const students = useSelector(state => state.students)
  const [student, setStudent] = useState(null)
 

  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    if (id) {
      const item = students.find((x) => Number(x.id) === Number(id));
      if (item) {
        setStudent(item)
      }
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);  // Quay lại trang trước đó
  };

  return (
    <div>
      <Container>

        <Row>
          <Col>
            {student && (
              <div>
                <p> Tên sinh viên : {student?.name}</p>
                <p> Tuổi : {student?.age}</p>
                <p> Giới tính : {student?.sex ? "Nam" : "Nữ"}</p>
              </div>
            )}
          </Col>
        </Row>

        <Row >
          <Col className="d-flex gap-2">
            <Button variant="secondary" onClick={handleGoBack} >
              Quay lại
            </Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
export default ShowStudentDetail;
