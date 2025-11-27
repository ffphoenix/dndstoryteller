import { useNavigate } from "react-router";
import { Button } from "primereact/button";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
      <Button label="Stats" onClick={() => navigate("stats")} />
      <Button label="Feats" onClick={() => navigate("feats")} />
    </div>
  );
};
