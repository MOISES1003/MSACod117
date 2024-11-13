import { useDispatch, useSelector } from "react-redux";
export function fetchComponents() {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.components.components || []);


  return { components };
}
