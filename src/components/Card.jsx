import React from "react";

function Card({ activityName, datas }) {
  return (
    <div className="w-1/4 rounded-lg h-full border text-center">
        {datas.main ? activityName.winds:console.log("Hello Aman")}
      {datas.main ? ( 
        
        <p>{`${datas.main.feels_like.toFixed()}°F`}</p>
      ) : (
        <p className="text-2xl text-orange-400">&nbsp;</p>
      )}
      <p>{activityName.name}</p>
    </div>
  );
}

export default Card;
