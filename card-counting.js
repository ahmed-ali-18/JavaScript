let count=0;
function cardCounter(x){
  if (x==2 || x==3 || x==4 || x==5 || x==6){
    count+=1;
  }
  if(x==10 || x=="J" || x=="Q" || x=="K" || x=="A"){
    count-=1;
  }
  
  let action=count>0?"Bet":"Hold";
  let result=count+" "+action;
  return result;
  
}
cardCounter("A");

