import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "../SidebarOption/SidebarOption";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../contextApi/StateProvider";
import { auth } from "../../firebase";
function Sidebar() {
  const [{ user }] = useStateValue();
  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__logo" />
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption
        text="Notifications"
        Icon={NotificationsNoneOutlinedIcon}
      />
      <SidebarOption text="Messages" Icon={MailOutlineOutlinedIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Sidebar;
