import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function ShowRequestDetails (props) {

  const navigate = useNavigate();

  let { id } = useParams();
  const requests = useSelector(state => state.requests)
  const [request, setRequest] = useState(null)
 

  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    if (id) {
      const item = requests.find((x) => Number(x.id) === Number(id));
      if (item) {
        setRequest(item)
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
            {request && (
              <div>
                <p> Title : {request?.title}</p>
                <p> Status : {request?.status}</p>
                <p> Priority : {request?.priority}</p>
                <p> Requested date : {request?.requestedDate}</p>
                <p> Desired deadline : {request?.deadline}</p>
                <p> Confidential : {request?.confidential}</p>
                <p> Special notes : {request?.note}</p>
                <p> Content<br></br>{request?.content}</p>
              </div>
            )}
          </Col>
        </Row>

        <Row >
          <Col className="d-flex gap-2">
            <Button variant="secondary" onClick={handleGoBack} >
              Back
            </Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
