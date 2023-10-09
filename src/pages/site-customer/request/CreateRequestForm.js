import { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { REQUEST } from "../../../constants/index"

export default function CreateRequestForm(props) {

    //  gọi hàm dispatch() để gửi một hành động đến store
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const requests = useSelector(state => state.requests)
    let { id } = useParams();
    // khởi tạo useRef
    const inputTitleRef = useRef(null);
    const inputStatusRef = useRef(null);
    const inputPriorityRef = useRef(null);
    const inputConfidentialRef = useRef(null);
    const inputRequestDateRef = useRef(null);
    const inputDeadlineRef = useRef(null);
    const inputNoteRef = useRef(null);
    const inputContentRef = useRef(null);

    useEffect(() => {
        // nếu có id thuộc trường hợp chỉnh sửa
        if (id) {
            const requestUpdate = requests.find((x) => Number(x.id) === Number(id));
            if (requestUpdate) {
                inputTitleRef.current.value = requestUpdate.title;
                inputStatusRef.current.value = requestUpdate.status;
                inputPriorityRef.current.value = requestUpdate.priority;
                inputConfidentialRef.current.value = requestUpdate.confidential;
                inputRequestDateRef.current.value = requestUpdate.requestedDate;
                inputDeadlineRef.current.value = requestUpdate.deadline;
                inputNoteRef.current.value = requestUpdate.note;
                inputContentRef.current.value = requestUpdate.content;
            }
        }
    }, []);

    const handleSubmit = (event) => {
        const request = {
            id: Number(requests.length +1),
            title: inputTitleRef.current.value,
            status: inputStatusRef.current.value,
            priority: inputPriorityRef.current.value,
            confidential: inputConfidentialRef.current.value,
            requestedDate: inputRequestDateRef.current.value,
            deadline: inputDeadlineRef.current.value,
            note: inputNoteRef.current.value,
            content: inputContentRef.current.value,
        };
        dispatch({
            type: REQUEST.REQUEST_ADD,
            payload: request
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
                            <Form.Label>Request title</Form.Label>
                            <Form.Control type="text" ref={inputTitleRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Status</Form.Label>
                            <Form.Select ref={inputStatusRef} aria-label="Default select example" >
                                <option>New</option>
                                <option value="1">In progress</option>
                                <option value="2">Feedback</option>
                                <option value="2">Verify</option>
                                <option value="2">Cancelled</option>
                                <option value="3">Done</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Priority</Form.Label>
                            <Form.Select ref={inputPriorityRef} aria-label="Default select example">
                                <option>Normal</option>
                                <option value="1">Low</option>
                                <option value="2">High</option>
                                <option value="3">Urgent</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupAge">
                            <Form.Label>Requested date</Form.Label>
                            <Form.Control type="date" ref={inputRequestDateRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupGender">
                            <Form.Label>Desired dealine</Form.Label>
                            <Form.Control type="date" ref={inputDeadlineRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupBirth">
                        <Form.Check ref={inputConfidentialRef} aria-label="option 1"/>
                            <Form.Label>Confidential</Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Specical not</Form.Label>
                            <Form.Control type="text" ref={inputNoteRef} placeholder="Thể ngắn/thể lịch sự, mục đích note hay reply tin nhắn KH v.v"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupAddress">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={10} ref={inputContentRef}/>
                        </Form.Group>
                    </Form>

                    <Row >
                        <Col className="d-flex gap-2">
                            <Button onClick={handleSubmit}>
                                {id ? "Edit" : " Create "}
                            </Button>
                            <Button variant="secondary" onClick={handleGoBack} >
                                Back
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    );
}
