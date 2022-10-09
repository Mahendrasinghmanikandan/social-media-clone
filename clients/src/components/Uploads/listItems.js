import PeopleIcon from "@mui/icons-material/People";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HomeIcon from "@mui/icons-material/Home";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const listItems = [
  {
    id: 7,
    name: "Home",
    link: "/",
    disabled: false,
    icon: <HomeIcon style={{ color: "hotpink", fontSize: "30px" }} />,
  },
  {
    id: 7,
    name: "My Uploads",
    link: "/Uploads",
    disabled: false,
    icon: <AddAPhotoIcon style={{ color: "hotpink", fontSize: "30px" }} />,
  },
  // {
  //   id: 6,
  //   name: "Favorites",
  //   link: "/Favorites",
  //   disabled: false,
  //   icon: <FavoriteBorderIcon style={{ color: "hotpink", fontSize: "30px" }} />,
  // },
  {
    id: 1,
    name: "Friends",
    link: "/Friends",
    disabled: true,
    icon: <PeopleIcon style={{ color: "lightgary", fontSize: "30px" }} />,
  },
  {
    id: 2,
    name: "Group",
    link: "/Group",
    disabled: true,
    icon: <Diversity3Icon style={{ color: "lightgary", fontSize: "30px" }} />,
  },
  {
    id: 3,
    name: "Saved",
    link: "/Saved",
    disabled: true,
    icon: (
      <BookmarkRemoveIcon style={{ color: "lightgary", fontSize: "30px" }} />
    ),
  },
  {
    id: 4,
    name: "Pages",
    link: "/Pages",
    disabled: true,
    icon: <AutoStoriesIcon style={{ color: "lightgary", fontSize: "30px" }} />,
  },
  {
    id: 5,
    name: "Events",
    link: "/Events",
    disabled: true,
    icon: <EventNoteIcon style={{ color: "lightgary", fontSize: "30px" }} />,
  },
];
