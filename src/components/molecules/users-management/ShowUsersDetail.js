function ShowUsersDetail(props) {
    return (
      <div>
        {props.usersdata && (
          <div>
            <p> Name : {props.usersdata?.name}</p>
            <p> Email : {props.usersdata?.email}</p>
            <p> age : {props.usersdata?.sex }</p>
          </div>
        )}
      </div>
    );
  }
  export default ShowUsersDetail;
  