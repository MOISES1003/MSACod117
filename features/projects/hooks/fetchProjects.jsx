import { useDispatch, useSelector } from "react-redux";
export function fetchProjects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects || []);


  return { projects };
}
