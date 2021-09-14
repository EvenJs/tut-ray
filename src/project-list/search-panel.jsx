import { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const SearchPanel = () => {
  const [param, setParam] = useState({ project_name: "", manager_id: "" });
  const [managers, setManagers] = useState([]);
  /*
  const getInput= (e) => {
    setParam({
      ...param,
      project_name: e
    });
  };

  const getSelection = (e) => {
    setParam({
      ...param,
      manager_id:e.target.value
    })
  }
*/
  useEffect(() => {
    fetch(`${apiUrl}/managers`).then(async (response) => {
      if (response.ok) {
        setManagers(await response.json());
      }
    });
  });

  return (
    <form>
      <input
        type="text"
        value={param.project_name}
        onChange={(e) => {
          setParam({
            ...param,
            project_name: e,
          });
        }}
      />
      <select
        value={param.manager_id}
        onChange={(e) => {
          setParam({
            ...param,
            manager_id: e.target.value,
          });
        }}
      >
        <option value="">Manager</option>
        {managers.map((manager) => (
          <option value={manager.id} key={manager.id}>
            {manager.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchPanel;
