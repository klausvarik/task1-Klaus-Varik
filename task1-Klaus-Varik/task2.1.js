// muutujad
const eesnimi = 'Klaus';
const bDay = new Date(1998, 02, 22 );
const day = bDay.getDate();
const month = bDay.getMonth();
const year = bDay.getFullYear();
const hobid = ('Arvutid', 'Autod');
const mina = {eesnimi:eesnimi,birthday:day,birthmonth:month,birthyear:year,hobid:hobid};
//log sünnipäev, kuu ja aasta

console.log(day + '.' + month + '.' + year);
