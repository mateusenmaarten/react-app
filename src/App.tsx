import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [likeColor, setLikeColor] = useState("white");

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>World</span>
        </Alert>
      )}

      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
        color="danger"
      >
        Click Me!
      </Button>
      <Like
        onClick={() => {
          console.log("Liked");
        }}
      ></Like>
    </div>
  );
}
export default App;
