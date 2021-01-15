const fortuneTeller = () => {

    const randomFortune = Math.floor(Math.random()* 5);

    let wish = '';

   switch (randomFortune){
    case 0:
        wish = 'Today will be Great day for you';
        break;
    case 1:
        wish = 'Today will be Funny day for you';
        break;
    case 2:
        wish = 'Today will be Sucessfull day for you';
        break;
    case 3:
        wish = 'Today will be Dissapointing day for you';
        break;
    case 4:
        wish = 'Today will be Stressful day for you'
        break;
    default:
        wish = 'Type Corect Input!!';
        break;
   }
   return wish;
};

console.log(`Your Today's Fortune is : ${fortuneTeller()}`);
