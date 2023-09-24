import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import { Col, Container, Row, Table, Button } from "react-bootstrap";

import { REQUEST } from "./../../../constants/index"
import ConfirmDelete from './../../../components/molecules/confirm'

import "./../../../scss/student-management/index.scss";

export default function RequestManage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requests = useSelector(state => state.requests) // get giá trị state students

  const [idDelete, setIdDelete] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // event click vào button thêm mới
  const handleCreateRequest = () => {
    // xử lý chuyển trang
    navigate("add");
  };

  // event click vào button xóa
  const handleRemoveRequest = (id) => {
    setIdDelete(id)
    handleShow();

  };
  const handleSubmitConfirm = () => {
    dispatch({
      type: REQUEST.REQUEST_DELETE,
      payload: {
        id: idDelete
      }
    })
    setIdDelete(null)
    handleClose();
  }

  // event click vào button chỉnh sửa
  const handleUpdateRequest = (id) => {
    // chuyển trang kèm theo id
    navigate("edit/" + id);
  };

  // event click vào button chi tiết
  const handleDetailsRequest = (item) => {
    navigate("detail/" + item.id);
  };

  return (
    <div>
      <Container>
        <Row  >
          <Col xs={10} ><h1> Translation reuqests </h1> </Col>
          <Col xs={2}   >
            <Button variant="primary" className="btn-create" onClick={() => {
              handleCreateRequest();
            }}
            > New request
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="tg-0lax">Requested date</th>
                  <th className="tg-0lax">Status</th>
                  <th className="tg-0lax">Priority</th>
                  <th className="tg-0lax">Title</th>
                  <th className="tg-0lax">Desired deadline</th>
                  <th className="tg-0lax">Confidential flag</th>
                  <th className="tg-0lax" style={{ width: 300 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {requests?.map((item) => (
                  <tr>
                    <td className="tg-0lax">{item.requestDate}</td>
                    <td className="tg-0lax">{item.status}</td>
                    <td className="tg-0lax">{item.priority}</td>
                    <td className="tg-0lax">{item.title}</td>
                    <td className="tg-0lax">{item.deadline}</td>
                    <td className="tg-0lax">{item.confideFlag}</td>
                    <td className="d-flex gap-2">
                      <Button variant="danger"
                        onClick={() => {
                          handleRemoveRequest(item.id);
                        }}
                      >
                        Delete
                      </Button>

                      <Button variant="warning"
                        onClick={() => {
                          handleUpdateRequest(item.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button variant="info"
                        onClick={() => {
                          handleDetailsRequest(item);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <ConfirmDelete show={show} handleClose={handleClose} handleSubmitConfirm={handleSubmitConfirm}> </ConfirmDelete>
      </Container>

    </div>
  );
}
