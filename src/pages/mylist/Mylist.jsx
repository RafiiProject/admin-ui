import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import Widget from "../../components/widget/Widget";

const Mylist = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
        </div>
        <Mydatatable />
      </div>
    </div>
  );
};

export default Mylist;