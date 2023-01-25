
import i18n from '../../i18n';


export const setCurrency = (number, currency = "€", decPlaces = 2) => {
   decPlaces = Math.pow(10, decPlaces);
   var abbrev = ["K", "M", "B", "T"];
   for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
         number = Math.round(number * decPlaces / size) / decPlaces;
         if ((number == 1000) && (i < abbrev.length - 1)) {
            number = 1;
            i++;
         }
         number += abbrev[i];
         break;
      }
   }
   return currency + number;
};

export const getPosition = (pos) => {
   const _positions = { "LW": i18n.t(`position.leftForward`), "D": i18n.t(`position.defender`), "G": i18n.t(`position.goalKeeper`), "RW": i18n.t(`position.rightForward`), "ST": i18n.t(`position.forward`), "AM": i18n.t(`position.attacking`), "ML": i18n.t(`position.leftMidfield`), "MC": i18n.t(`position.centerMidfield`), "MR": i18n.t(`position.rightMidfield`), "DM": i18n.t(`position.defensiveCenter`), "DL": i18n.t(`position.leftBack`), "DC": i18n.t(`position.centerBack`), "DR": i18n.t(`position.rightBack`), "GK": i18n.t(`position.goalKeeper`) , "M": i18n.t(`position.midfield`) , "F": i18n.t(`position.forward`) };
   return _positions[pos];
};
export const getHeading = (hed) => {
   const _headings = { "Assist Leaders": i18n.t(`home.topPlayers.assistLeaders`), "Ball Recoveries": i18n.t(`home.topPlayers.ballRecoveries`), "Goals Leaders": i18n.t(`home.topPlayers.goalsLeaders`), "Shots Leaders": i18n.t(`home.topPlayers.shotsLeaders`), "Passes Leaders": i18n.t(`home.topPlayers.passesLeaders`), "Saves": i18n.t(`home.topPlayers.saves`)};
   return _headings[hed];
};
export const getPositionCordinates = (pos) => {
   if (pos) {
      const _positions_c = { "LW": { "x": 80, "y": 62 }, "RW": { "x": 24, "y": 90 }, "ST": { "x": 50, "y": 90 }, "AM": { "x": 50, "y": 90 }, "ML": { "x": 36, "y": 50 }, "MC": { "x": 76, "y": 90 }, "MR": { "x": 76, "y": 50 }, "DM": { "x": 50, "y": 52 }, "DL": { "x": 26, "y": 26 }, "DC": { "x": 36, "y": 32 }, "DR": { "x": 13, "y": 32 }, "GK": { "x": 50, "y": 12 } };
      return _positions_c[pos];
   } else {
      return false;
   }
};

export const getClassWithRespectivePositions = (pos) => {
   const _positions = ["top_left", "top_right", "top_center", "middle_left hidden", "middle_center", "middle_right hidden", "bottom_left_next", "bottom_left", "bottom_right_next", "bottom_right", "bottom_center", "attacking2 hidden", "middle_center_2", "attacking"];
   return _positions[pos];
};

export const getAbilities = (num) => {
   const _abilities = { "1": i18n.t(`static.save`), "2":  i18n.t(`static.pre-judgment`), "3": i18n.t(`static.handlingTheBall`), "4": i18n.t(`static.air`) , "5": i18n.t(`static.tactics`), "6":i18n.t(`static.attack`),  "7": i18n.t(`static.defense`), "8": i18n.t(`static.creativity`), "9": i18n.t(`static.technology`) };
   return _abilities[num];
};
// export const getAbilities = (num) => {
//    const _abilities = { "1": "Save", "2": "Pre-judgment", "3": "Handling the ball", "4": "Air", "5": "tactics", "6": "attack", "7": "Defense", "8": "Creativity", "9": "Technology" };
//    return _abilities[num];
// };
export const getCharacteristics = (num) => {
   const _characteristics = { "1": i18n.t(`static.Unloading`), "2": i18n.t(`static.penaltyKick`), "3":  i18n.t(`static.directFreeKick`), "4": i18n.t(`static.longShot`), "5": i18n.t(`static.singleShot`), "6": i18n.t(`static.pass`), "7": i18n.t(`static.organizeTheAttack`), "8": i18n.t(`static.dribble`), "9": i18n.t(`static.interruptTheBall`), "10":  i18n.t(`static.tackle`), "11":  i18n.t(`static.stability`), "12": i18n.t(`static.excellent`), "13": i18n.t(`static.longPass`), "14": i18n.t(`static.ballControl`), "15": i18n.t(`static.airConfrontation`), "16": i18n.t(`static.groundConfrontation`), "17": i18n.t(`static.errorTendency`), "18": i18n.t(`static.sDiscipline`), "19": i18n.t(`static.punchPenalty`), "20": i18n.t(`static.reaction`), "21":i18n.t(`static.abandonGoalToParticipateInAttack`), "22": i18n.t(`static.highBallInterception`), "23": i18n.t(`static.handlTheBall`), "24": i18n.t(`static.longShots`), "25": i18n.t(`static.stance`), "26": i18n.t(`static.highPressing`), "27":i18n.t(`static.longShotsSave`),"28": i18n.t(`static.crossing`), "29": i18n.t(`static.offsideAwareness`), "30": i18n.t(`static.closeShotSaves`), "31": i18n.t(`static.concentration`), "32": i18n.t(`static.defensiveParticipation`), "33": i18n.t(`static.keyPassingBall`), "34":  i18n.t(`static.header`),  "35":  i18n.t(`static.setBall`), "36": i18n.t(`static.straightPass`),  "37": i18n.t(`static.counterAttack`), "38":  i18n.t(`static.oneKick`), "39": i18n.t(`static.upHighBall`), "40": i18n.t(`static.fouling`), "41": i18n.t(`static.inwardCut`), "42": i18n.t(`static.boxingBall`), "43": i18n.t(`static.clearance`) };
   return _characteristics[num];
};
// export const getCharacteristics = (num) => {
//    const _characteristics = { "1": "Unloading", "2": "Penalty Kick", "3": "Direct Free Kick", "4": "Long Shot", "5": "Single Shot", "6": "pass", "7": "organize the attack", "8": "dribble", "9": "interrupt the ball", "10": "tackle", "11": "stability", "12": "excellent", "13": "long pass", "14": "ball control", "15": "air confrontation", "16": "ground confrontation", "17": "error tendency", "18": "Discipline", "19": "Punch penalty", "20": "Reaction", "21": "Abandon goal to participate in attack", "22": "High ball interception", "23": "Handle the ball", "24": "Long Shots", "25": "Stance", "26": "High Pressing", "27": "Long Shots Save", "28": "Crossing", "29": "Offside awareness", "30": "Close shot saves", "31": "Concentration", "32": "Defensive participation", "33": "Key passing Ball", "34": "Header", "35": "Set ball", "36": "Straight pass", "37": "Counter attack", "38": "One kick", "39": "up High ball", "40": "fouling", "41": "inward cut", "42": "boxing ball", "43": "clearance" };
//    return _characteristics[num];
// };

export const getWeathers = (num) => {
   const _weathers = { "1": i18n.t(`static.partiallyCloudy`), "2": i18n.t(`static.Cloudy`), "3": i18n.t(`static.partiallyCloudy/rain`), "4": i18n.t(`static.snow`), "5": i18n.t(`static.sunny`), "6":  i18n.t(`static.overcastRain/partialThunderstorm`), "7": i18n.t(`static.overcast`),"8": i18n.t(`static.mist`), "9": i18n.t(`static.cloudyWithRain`), "10": i18n.t(`static.cloudyWithRain`), "11": i18n.t(`static.cloudyWithRain/partialThunderstorms`), "12": i18n.t(`static.clouds/rainsAndThunderstormsLocally`), "13": i18n.t(`static.fog`) };
   return _weathers[num];
};
// export const getWeathers = (num) => {  
//    const _weathers = { "1": "Partially cloudy", "2": "Cloudy", "3": "Partially cloudy/rain", "4": "Snow", "5": "Sunny", "6": "Overcast Rain/partial thunderstorm", "7": "overcast", "8": "mist", "9": "cloudy with rain", "10": "cloudy with rain", "11": "cloudy with rain/partial Thunderstorms", "12": "Clouds/rains and thunderstorms locally", "13": "Fog" };
//    return _weathers[num];
// };

export const getFirstLetters = (str) => {
   const firstLetters = str.split(' ')?.map(word => word[0]).join('');

   return firstLetters;
}
export const nameShortner = (str) => {
   str = str?.replace("·", " ");
   const fullName = str?.split(' ');
   const firstLetters = str
      ?.split(' ')
      ?.map(word => word[0])
      ?.join('');

   var initials = firstLetters?.slice(0, -1);
   initials = initials;

   var second = fullName?.at(-1)
   return initials + " " + second;
}
export const leagueNameShortner = (str) => {
   const indexOfSpace = str.indexOf(' ');

   if (indexOfSpace === -1) {
      return '';
   }

   return str.substring(indexOfSpace + 1);
}
export const clubNameShortner = (str) => {

   const first3 = str?.substring(0, 3);
   return first3?.toUpperCase();

}
export const makeId = () => {
   var text = "XL";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
}


export const beautifyUnixTime = (unixdate) => {
   let newDate = new Date(unixdate * 1000);
   let otherDate = String(newDate).split(' ');
   let getDay = newDate.getDate();
   let getMonth = newDate.getMonth();
   let getyear = newDate.getYear();
   var result;
   let today = new Date().getDate();
   let todayMonth = new Date().getMonth();
   let todayYear = new Date().getYear();

   if (today == getDay && todayMonth == getMonth && getyear == todayYear) {
      result = i18n.t(`static.today`)+`,${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
   }
   else if (getDay === today + 1 && todayMonth == getMonth && getyear == todayYear) {
      result = i18n.t(`static.tomorrow`)+`${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
   }
   else if (getDay == today - 1 && todayMonth == getMonth && getyear == todayYear) {
      result = i18n.t(`static.yesterday`)+`,${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`
   } else {
      result = `${otherDate[1]} ${otherDate[2]}, ${otherDate[3]} ${newDate.getHours() < 10 ? '0' : ''}${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`;
   }
   return result;
}

export const setLeagueName = (str) => {
   let a = str.split('');
   let i = 0;
   let c = 0;
   let newArray
   if (a.length > 7) {
      while (a[0] >= 'A' && a[1] <= 'Z') {
         c = a.shift();
         c++;
      }
      if (c == 3) { newArray = a.slice(0, 3) }
   }
   let b = a.join('');
   return b;
}

export const lowerCaseInUrl = (str) => {
   if(str){
      let a = str?.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
      let b = a?.replaceAll(" ", "-")
      return b;
   }
   else{
      return "unknown"
   }
}




