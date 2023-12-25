import "./daily-msg.css";
import data from "../../data/data";

const getCurrentWeekDay = () => {
  let currentDate = new Date();
  let weekDay = currentDate.getDay();
  return weekDay;
};
export const printDailyMsg = () => {
  let dayNumber = getCurrentWeekDay();
  let dailyMsg = data.dailyMessages[dayNumber];
  let dailyMsgDom = document.createElement("h3");
  dailyMsgDom.innerText = dailyMsg;
  dailyMsgDom.setAttribute("id", "daily-msg");
  app.append(dailyMsgDom);
};
