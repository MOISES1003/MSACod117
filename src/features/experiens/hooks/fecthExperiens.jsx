import { useDispatch, useSelector } from "react-redux";
export function fetchExperiens() {
  const dispatch = useDispatch();
  const abount = useSelector((state) => state.experiens.abount || "");
  const skills = useSelector((state) => state.experiens.skills || []);
  const fullStak = useSelector((state) => state.experiens.fullStak || {});
  const freelance = useSelector((state) => state.experiens.freelance || {});



  return { skills,abount,fullStak,freelance };
}
