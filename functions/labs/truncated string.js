function truncateString(string,num){

  let l=string.length;
  if(l>num){
    let truncated=string.slice(0,num);
    return truncated+"...";
  }
  else
  return string;
}