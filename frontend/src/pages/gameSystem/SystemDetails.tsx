import { Card } from "primereact/card";
import { BreadCrumb } from "primereact/breadcrumb";
import { Outlet, useLocation, useParams } from "react-router";
import getCurrent from "./systems/store/reducers/getCurrent";

export default () => {
  const params = useParams();
  const location = useLocation();

  const items = [
    { label: "Systems", url: "/systems" },
    { label: getCurrent().name, url: `/systems/${params.systemId || ""}` },
  ];

  if (params.systemId && `/systems/${params.systemId || ""}/`.length < location.pathname.length) {
    const currentDirectory = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1,
      location.pathname.length,
    );
    items.push({
      label: currentDirectory.replace(/^./, currentDirectory[0].toUpperCase()),
      url: "",
    });
  }
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
