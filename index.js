function scuberGreetingForFeet(distance){ 
  if(distance <= '400'){
    return 'This one is on me'
  } else if(distance > '400'){
    return 'This will be twenty bucks'
  } else if(distance <='2000'){
    return 'I will gladly take your thirty bucks'
  } else if(distance > '2500'){
    return 'No can do'
  } 
}

function ternaryCheckCity(city){
 return city ==="NYC"?'Ok, sounds good.':city ==="Pittsburgh"`No go.`
}

function switchOnCharmFromTip(generous){
  switch(generous){
    case 'generouse':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      default :
        return 'Bye.'
  }
 
}

