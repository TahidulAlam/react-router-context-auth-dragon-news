import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
const useAuth = () => {
  const allAuth = useContext(AuthContext);
  return allAuth;
};

export default useAuth;
