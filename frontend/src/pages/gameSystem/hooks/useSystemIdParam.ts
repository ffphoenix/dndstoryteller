import { useParams } from "react-router";

export const useSystemIdParam = () => {
  const { systemId } = useParams();
  if (!systemId) {
    return 0;
  }

  return parseInt(systemId);
};
