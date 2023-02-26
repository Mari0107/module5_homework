let value = +prompt('Введите число','');
if (Number.isNaN(value)){
     alert('Упс, кажется, вы ошиблись');
    }
if (typeof value === 'number') 
    if(value % 2 === 0) {
        console.log('Число четное');
   } else {
        console.log('Число нечетное')
   }