// import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";

function MessageItem({ message, own, otherPFP }) {
  const { profilePicture } = useSelector((state) => state.auth);

  return (
    <div className={own ? "message" : "message own"}>
      <div className="messageTop">
        <img src={own ? profilePicture : otherPFP} alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      
    </div>
  );
}



export default MessageItem;
