
import styled from '@emotion/styled'
import{Label, Wrapper as css} from "../../../_css/GlobalElements"

import Select from "../Select"



const Wrapper = styled(css)`
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 5px;
`;




// Gets an Array of Year... DEAFULT LENTH OF YEARS = 50
const getYears=(lenthOfYears = 50)=>{
  let currentYear = new Date().getFullYear()
  let years = []
  while (lenthOfYears){
    years.push(currentYear--)
    lenthOfYears--
  }
  return years
}

const getDays=()=>{
  let days = []
  let i = 31
  
  while(i){
    days.unshift(i)
    i--
  }
  return days
}




const DateField = () => {

  const _Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const _Days = getDays()
  
  const _Years = getYears(40);

  

  return(
    <>
      <Label> select your date of birth* </Label>
      <Wrapper data-testid="dates">
        <Select
          options={_Months}
          name="Month"/>
        <Select 
          options={_Days}
          name="Day"/>
        <Select
          options={_Years}
          name="Year"/>
      </Wrapper>
    </>
  );

};

export default DateField;
