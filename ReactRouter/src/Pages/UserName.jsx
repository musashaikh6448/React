import { useParams } from "react-router-dom";

const UserName = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1 className="text-succes">{id}</h1>
    </div>
  );
};

export default UserName;
