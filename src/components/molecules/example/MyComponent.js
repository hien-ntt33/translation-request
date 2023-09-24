import React, { Component } from "react";
class MyComponent extends Component {
  constructor(props) {
    // Gọi super ở đây nhằm mục đích khởi tạo biến this từ Paren
    super(props);
    // Khởi tạo state
    this.state = {
      name: "Nguyen van B",
      count: 0,
      input: ''
    };
    // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.handleChange = this.handleChange.bind(this)
    // Ngoài ra có  thể sử dung  arrow function & public class fields syntax  ( https://legacy.reactjs.org/docs/handling-events.html )
  }

  // Lifecycle 
  // Khởi tạo (Initialization)
  // Tạo ra (Mounting)
  // Thay đổi (Updating)
  // Hủy bỏ (UnMounting)
  static getDerivedStateFromProps (props, state) {
    // phương thức này được gọi trước khi component được render và sau đó mỗi khi props của component được cập nhật.
    // Nó được sử dụng để cập nhật state của component dựa trên props.
    if (props.someValue !== state.someValue) {
      return { someState: props.someValue };
    }
    else return null;
    // return null;
  }

  componentDidMount () {
    // phương thức này được gọi sau khi component được render xong và được đưa vào cây DOM.
    // Nó được sử dụng để thực hiện các tác vụ mà cần sử dụng DOM như gọi API, thiết lập event listener,...
    console.log("componentDidMount");
  }

  shouldComponentUpdate (nextProps, nextState) {
    // phương thức này được sử dụng để quyết định component có cần được render lại hay không.
    // Nếu phương thức trả về false thì component sẽ không được render lại.
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    // phương thức này được gọi trước khi component được cập nhật và được sử dụng để lấy thông tin từ DOM trước khi component được cập nhật.
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    // phương thức này được gọi sau khi component được cập nhật và được sử dụng để thực hiện các tác vụ mà cần sử dụng DOM như gọi API, thiết lập event listener,...
    console.log("componentDidUpdate");
  }

  componentWillUnmount () {
    // phương thức này được gọi khi component bị loại bỏ khỏi cây DOM.
    // Nó được sử dụng để dọn dẹp các tài nguyên và event listener được thiết lập trong componentDidMount().
    console.log("componentWillUnmount");
  }

  handleUpdateName () {
    this.setState({ name: "Nguyen Van C" });
  }

  onIncrement () {
    this.setState({ count: this.state.count + 1, });
    console.log('this.state.count')
  }

  // Hàm lắng nghe sự thay đổi giá trị trong ô input
  handleChange (event) {
    console.log(event)
    this.setState({ input: event.target.value })
  }

  //Hàm xử lí khi submit form 
  handleSubmit = () => {
    alert(this.state.input);
  }

  // phương thức này là bắt buộc và nó trả về JSX để hiển thị giao diện của component.
  render () {
    console.log('render')
    return <div>
      <p>Name props: {this.props.name}</p>

      <p>Name state: {this.state.name}</p>
      <button onClick={this.handleUpdateName}>Update Name State</button>

      <p>Count: {this.state.count}</p>
      <button onClick={this.onIncrement}> Increment </button>

      <br />
      <input type="text" value={this.state.input} onChange={this.handleChange} />
      <button onClick={this.handleSubmit}>Submit</button>
      <hr></hr>
    </div>;
  }
}
export default MyComponent  // Câu lệnh export để các file chấp nhận việc xuất các function
