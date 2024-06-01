const ages = [12,15,14,13]
const ages2 = [17,18,19,20,21] 
const ages3 = [17,18,19,20,21] 
//==akta neyom  formate===

// const allAges = ages.concat(ages2).concat(ages3);
// console.log(allAges); 

//==== second neyom formate====
const total = [...ages, ...ages2, 5, ...ages3]
console.log(total);  