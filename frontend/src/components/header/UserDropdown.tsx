import { useRef } from "react";
import { useNavigate } from "react-router";
import getUserInfo from "../../globalStore/users/reducers/getUserInfo";
import deleteUserToken from "../../utils/auth/deleteUserToken";
import { observer } from "mobx-react-lite";
import { Menu } from "primereact/menu";
import type { MenuItem } from "primereact/menuitem";

export default observer(() => {
  const navigate = useNavigate();
  function logout() {
    deleteUserToken();
    navigate("/auth/login");
  }
  const items: MenuItem[] = [
    {
      label: "Edit profile",
      icon: "pi pi-user-edit",
    },
    {
      label: "Sign out",
      icon: "pi pi-sign-out",
      command: logout,
    },
  ];

  const currentUser = getUserInfo();
  const menuLeft = useRef(null);
  return (
    <div className="relative">
      <button
        onClick={(event) => menuLeft.current.toggle(event)}
        className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src={currentUser.pictureUrl} alt="User" />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">{currentUser.fullName}</span>
      </button>
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
    </div>
  );
});
