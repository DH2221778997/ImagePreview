import { useState, useRef, ChangeEventHandler } from "react";
import ImagePreview from "./ImagePreview";
import fileToString from "./utils";
function App() {
  const aaa = 88;
  const [img, setImg] = useState<string>("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    } else {
      try {
        setImg(await fileToString(file));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleClose = () => {
    setImg("");
  };
  return (
    <div className="App">
      {img === "" ? (
        <input type="file" onChange={handleChange} accept="image/*" />
      ) : (
        <ImagePreview imageSrc={img} onClose={handleClose} />
      )}
    </div>
  );
}

export default App;
