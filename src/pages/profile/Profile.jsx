import AddPost from "../../components/addPost/AddPost";
import UserProfile from "../../components/userProfile/UserProfile";
import Feeds from "../../components/feeds/Feeds";

export default function profile() {
  return (
    <>
      <UserProfile />
      <AddPost />
      <Feeds />
    </>
  );
}
