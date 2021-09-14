const SearchPanel = ({ param, setParam, managers }) => {
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
