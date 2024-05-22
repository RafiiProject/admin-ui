import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import Widget from "../../components/widget/Widget";

const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <div className="table">
          <Mydatatable title="All Data" />
        </div>
      </div>
    </div>
  );
};

export default Mylist;