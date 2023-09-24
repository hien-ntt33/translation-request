import React, {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table'

import { STUDENT } from "./../../../constants/index"
import ConfirmDelete from  './../../../components/molecules/confirm'

import "./../../../scss/student-management/index.scss";

function StudentManage (props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const students = useSelector(state => state.students) // get giá trị state students

  const [idDeleta, setIdDelete] = useState(null);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // event click vào button thêm mới
  const handleCreateStudent = () => {
    // xử lý chuyển trang
    navigate("add");
  };

  // event click vào button xóa
  const handleRemoveStudent = (id) => {
    setIdDelete(id)
    handleShow();
   
  };
  const handleSubmitConfirm = ()=>{
    dispatch({
      type: STUDENT.STUDENT_DELETE,
      payload: {
        id: idDeleta
      }
    })
    setIdDelete(null)
    handleClose();
  }

  // event click vào button chỉnh sửa
  const handleUpdateStudent = (id) => {
    // chuyển trang kèm theo id
    navigate("edit/"+ id);
  };

  // event click vào button chi tiết
  const handleDetailsStudent = (item) => {
    navigate("detail/"+item.id);    
  };

  return (
    <div>
      <Container>
        <Row  >
          <Col xs={10} ><h1> Danh sách sinh viên </h1> </Col>
          <Col xs={2}   >
            <Button variant="primary" className="btn-create" onClick={() => {
              handleCreateStudent();
            }}
            > Thêm mới
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
            <Table className="tg">
              <thead>
                <tr>
                  <th className="tg-0lax">ID</th>
                  <th className="tg-0lax">Họ và tên</th>
                  <th className="tg-0lax">Tuổi</th>
                  <th className="tg-0lax">Giới tính</th>
                  <th className="tg-0lax" style={{ width: 300 }}>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {students?.map((item) => (
                  <tr>
                    <td className="tg-0lax">{item.id}</td>
                    <td className="tg-0lax">{item.name}</td>
                    <td className="tg-0lax">{item.age}</td>
                    <td className="tg-0lax">{item.sex}</td>
                    <td className="d-flex gap-2">
                      <Button variant="danger"
                        onClick={() => {
                          handleRemoveStudent(item.id);
                        }}
                      >
                        Xóa
                      </Button>

                      <Button variant="warning"
                        onClick={() => {
                          handleUpdateStudent(item.id);
                        }}
                      >
                        Sửa
                      </Button>
                      <Button variant="info"
                        onClick={() => {
                          handleDetailsStudent(item);
                        }}
                      >
                        Xem chi tiet
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
         <ConfirmDelete show={ show } handleClose ={handleClose  } handleSubmitConfirm ={ handleSubmitConfirm}> </ConfirmDelete>
      </Container>

    </div>
  );
}

export default StudentManage;
