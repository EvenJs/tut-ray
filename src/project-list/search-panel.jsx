import { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const SearchPanel = () => {
  const [param, setParam] = useState();
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
    fetch(`${apiUrl}`).then(async (response) => {
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
      </select>
    </form>
  );
};

export default SearchPanel;
