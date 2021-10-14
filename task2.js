const firstname = 'Klaus';
const bDay = new Date(1998, 02, 22 );
const day = bDay.getDate();
const month = bDay.getMonth();
const year = bDay.getFullYear();
const hobbies = ('Arvutid', 'Autod');
const me = {firstname:firstname,birthday:day,birthmonth:month,birthyear:year,hobbies:hobbies};

//log birthday, month and year
console.log(day + '.' + month + '.' + year);