import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import Widget from "../../components/widget/Widget";

const Mylist = ({columns}) => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="category" />
        </div>
        <div className="table">
          <Mydatatable columns={columns}/>
        </div>
      </div>
    </div>
    
  );
};

export default Mylist;