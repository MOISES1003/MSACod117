import { useDispatch, useSelector } from "react-redux";
export function selectComponentByIndex(index) {
  const dispatch = useDispatch();
  const componentsByIndex = useSelector((state) => state.components.components[index]  || null);


  return { componentsByIndex };
}
