function welcomeGust (name, greethHandler ){
  greethHandler(name) ; 
}

//a khan a name ashay aslay name e asbay 
function goodMorning(name){
  console.log(name,'good morning')
}
// a dui place a string agay aslay name poray asbay 
function goodEvining (name){
  console.log('good evining',name)
}
 
// welcomeGust ('sakib khan ', function(name){
//   console.log('special welcome', name)
// })



const actorName  = 'shykat ';
welcomeGust(actorName, goodEvining, );
welcomeGust('mahmud', goodMorning)
