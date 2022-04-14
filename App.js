import "./App.css";
import NavBar from "./components/navbar/navBar";
import Button2 from "./components/buttons/button2";
import Content from "./components/content/content";
import Button1 from "./components/buttons/button1";
import LiveAuctions from "./components/content/liveAuctions";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://localhost:4000/card");
      setCardData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className=" font-mont  font-700 h-max bg-bid ">
      <NavBar />
      <Content />
      <div className="flex justify-center">
        <Button1 /> <Button2 />
      </div>
      <div className="flex border-2 mt-20 border-til-3 rounded-sm overflow-x-scroll scrolling-touch items-start mb-8">
        {cardData.map((item) => (
          <div className="flex-none mx-20">
            <LiveAuctions cardUrl={item.imgUrl} cardTitle={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
