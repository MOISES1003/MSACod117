import { useDispatch, useSelector } from "react-redux";
export function fetchExperiens() {
  const dispatch = useDispatch();
  const abount = useSelector((state) => state.experiens.abount || "");
  const fullStak = useSelector((state) => state.experiens.fullStak || {});
  const freelance = useSelector((state) => state.experiens.freelance || {});
  const fullStakData = useSelector((state) => state.experiens.fullStak.data || []);
  const freelanceData = useSelector((state) => state.experiens.freelance.data ||[]);



  return { abount,fullStak,freelance,fullStakData,freelanceData };
}
