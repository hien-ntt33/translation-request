import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddStudent from "./AddStudent"
import ShowUsersDetail from "./ShowUsersDetail";
function Users (props) {
    const [users, setUsers] = useState([])
    const [userstDetail, setUsersDetail] = useState(null);
    const [usersUpdate, setUsersUpdate] = useState(null);
    const handleSubmitUser = (item) => {
        const newStudents = [...users];
        newStudents.push(item);
        setUsers(newStudents);
    }
    useEffect(() => {

        const usersData = [
            {
                id: 1,
                name: 'Nguyen Van A',
                email: 'nguyenvana@gmail.com',
                password: '123',
                age: 20,
                address: 'Da Nang',
                gender: true
            },
            {
                id: 2,
                name: 'Nguyen Van B',
                email: 'nguyenvanb@gmail.com',
                password: '123',
                age: 23,
                address: 'Quang Nam',
                gender: false
            },
            {
                id: 3,
                name: 'Nguyen Van C',
                email: 'nguyenvanc@gmail.com',
                password: '123',
                age: 20,
                address: 'Da Nang',
                gender: true
            },
        ]

        setUsers(usersData)
    }, [])

    const handleRemoveUser = (id) => {
        const removeUser = [...users];
        const indexUser = removeUser.findIndex((i) => i.id === id)
        if (indexUser > -1) {
            removeUser.splice(indexUser, 1);
            setUsers(removeUser)
        }
    }

    const handleUpdateUser =(id)  =>{
        const updateUser = [...users];
        const indexUser = updateUser.find((i) => i.id === id)
        if (indexUser){
             setUsersUpdate(usersUpdate);
        }
    }
    const handleDetailUsers = (item) => {
        setUsersDetail(item);
    };

    return (
        <div>
            <h1> Danh sách Users </h1>
            <Table style={{ width: '70%' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                            <td>{user.gender ? 'Nam' : 'Nu'}</td>
                            <td className="d-flex gap-2">
                                <Button variant="warning" onClick={() => { handleDetailUsers(user) }}>Xem</Button>
                                <Button variant="primary" onclick={()=> { handleUpdateUser(user.id)}}>Sửa</Button>
                                <Button variant="danger" onClick={() => { handleRemoveUser(user.id) }} >Xóa</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <AddStudent handleSubmitStudent={handleSubmitUser} />
            <ShowUsersDetail usersdata={userstDetail} />
        </div>
    );
}

export default Users;
