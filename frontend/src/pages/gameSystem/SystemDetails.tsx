import { Card } from "primereact/card";
import { BreadCrumb } from "primereact/breadcrumb";
import { Outlet, useParams } from "react-router";
import SelectedSystem from "../../globalStore/selectedSystem/SelectedSystem";

export default () => {
  const params = useParams();
  console.log(params);
  const items = [{ label: "Systems", url: "/systems" }, { label: SelectedSystem.name }];
  const home = { icon: "pi pi-home", url: "/" };

  return (
    <>
      <BreadCrumb model={items} home={home} className={"mb-2"} />
      <Card>
        <Outlet />
      </Card>
    </>
  );
};
