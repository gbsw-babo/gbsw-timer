import styles from "../styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import '@kfonts/nanum-gothic';
import '@fortawesome/fontawesome-free';
import moment from "moment";
import fx from 'fireworks'

export default function CustomTimer({expiryTimestamp}: any) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    let range = (n: number) => [...new Array(n)]
  
    function trigger(){
      doFireworks(15)
      // let arr = [];
      // for(let i = 0;i<10;i++){
      //   arr.push(setInterval(() => doFireworks(1), Math.random()*5000*i));
      //   // toggleColorMode();
      // }
    }

    function doFireworks(n: number){
      range(n).map(() =>
        fx({
          x: Math.random() * (window.innerWidth / 2) + window.innerWidth / 4,
          y: Math.random() * (window.innerWidth / 2) + window.innerWidth / 4,
          colors: ['#AEC6CF', '#fdfd96', '#81C784', '#F57BA9'],
          bubbleSizeMinimum: 10
        })
      )
    }
  
    function getDate(){
      let d = new Date();
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
  
      return d;
    }
  
    function getdDay(){
      console.log(moment(expiryTimestamp).diff(getDate(), "day"));
      return moment(expiryTimestamp).diff(moment(getDate()), "day")
    }
  
    return (
      <>
        <Text fontSize="2.5vw" className={styles.dday}>{expiryTimestamp.getFullYear()}-{expiryTimestamp.getMonth()+1}-{expiryTimestamp.getDate()} </Text>
        <Text fontSize="2.5vw" className={styles.dday1}><br /> D-{getdDay() == 0 ? "DAY" : getdDay()}</Text>
        {isRunning ? 
          <>
            <Text className={styles.timerText}>{((hours)+(24*days)).toLocaleString('ko-KR', {minimumIntegerDigits: 2})}</Text>
            <Text className={styles.timerText}>:</Text>
            <Text className={styles.timerText}>{minutes.toLocaleString('ko-KR', {minimumIntegerDigits: 2})}</Text>
            <Text className={styles.timerText}>:</Text>
            <Text className={styles.timerText}>{seconds.toLocaleString('ko-KR', {minimumIntegerDigits: 2})}</Text>
          </>
        :
          <>
            <Text className={styles.timerText} fontSize={'10vw'} style={{ justifyContent: "center", alignItems: "center" }}>종료</Text>
            {trigger()}
          </>
        }
      </>
    );
  }