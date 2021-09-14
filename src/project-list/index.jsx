import { useState, useEffect } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import * as qs from "qs";
import { cleanObject, isTrue } from "utils";
import pipe from "lodash/fp/pipe";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectSearchList = () => {
  const [param, setParam] = useState({ project_name: "", manager_id: "" });
  const [managers, setManagers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/managers`).then(async (response) => {
      if (response.ok) {
        setManagers(await response.json());
      }
    });
  }, []);

  const changeParamProjectName = (object) => {
    const result = { ...object };
    const value = result["project_name"];
    if (isTrue(value)) {
      result["name"] = value;
      delete result["project_name"];
    }
    return result;
  };

  useEffect(() => {
    const combineParam = pipe(
      cleanObject,
      changeParamProjectName,
      qs.stringify
    );

    fetch(`${apiUrl}/projects?${combineParam(param)}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);

  return (
    <>
      <SearchPanel param={param} setParam={setParam} managers={managers} />
      <List list={list} managers={managers} />
    </>
  );
};

export default ProjectSearchList;
