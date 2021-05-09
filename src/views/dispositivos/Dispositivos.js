import { useState, useEffect } from "react";
import ApiDispositivos from "../../services/apis/apiDispositivos";

const Dispositivo = () => {
  const [dispositivos, setDispositivos] = useState({});

  const fetchData = async () => {
    await ApiDispositivos.getAllDispositivos().then((res) => {
      const result = res.data;
      setDispositivos(result);
      console.log(dispositivos);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderPosts = () => {
    if (!dispositivos) {
      return (
        <tr>
          <td colSpan="4">Loading posts...</td>
        </tr>
      );
    }

    if (dispositivos.length === 0) {
      return (
        <tr>
          <td colSpan="4">There are no posts yet</td>
        </tr>
      );
    }

    // return <List posts={posts} fetchPosts={fetchPosts} />;
  };

  return (
    <div>
      {/* <Link to="/add" className="btn btn-primary">
        Add
      </Link> */}
      <div className="table-responsive">
        <table className="table table-stripped mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderPosts()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dispositivo;
