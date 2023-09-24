import React, { Component } from "react";
class Session02Component extends Component {
    constructor(props) {
        // Gọi super ở đây nhằm mục đích khởi tạo biến this từ Paren
        super(props);
        // Khởi tạo state
        this.state = {
            number: 0,
            array: [],
            total: 0,
        };
        // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
        this.handleChange = this.handleChange.bind(this);
    }

    // Hàm lắng nghe sự thay đổi giá trị trong ô input
    handleChange (event) {
        this.setState({ number: event.target.value })
    }
    //Hàm xử lí khi submit form 
    handleSubmit = () => {
        let arr = this.state.array
        arr.push(Number(this.state.number))
        this.setState({
            array: arr,
            number: 0,
            total: this.state.total + Number(this.state.number)
        })
    }

    // phương thức này là bắt buộc và nó trả về JSX để hiển thị giao diện của component.
    render () {
        return <div>
            <h1> Session 2 </h1>
            <input type="number" value={this.state.number} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>add</button>

            {/* Câu lệnh điều kiện */}
            {this.state.total > 0 &&
                <h2>
                    <p > Kết quả : {this.state.array.join("+ ")} =  {this.state.total} </p> 
                     {/* join kết nối tất cả các phần tử trong một mảng thành một chuỗi. */}
                </h2>
            }

            {this.state.total <  10
                ? <p> Not Add</p> 
                : <p> added</p>
            }
            {this.state.number >100
            ? <p>Dung</p>
            : <p>Sai</p>          
        }
            <hr></hr>
        </div>;
    }
}
export default Session02Component  // Câu lệnh export để các file chấp nhận việc xuất các function
