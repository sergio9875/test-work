const fs = require("fs");

module.exports = async ( user, dataUsers ) => {
   // console.log(dataUsers)
    // generate a sample JSON file
    const filename = "request.json";
    await fs.writeFileSync(filename, JSON.stringify(dataUsers, null, 4));
    if(!dataUsers) {
        fs.writeFile('request.json', JSON.stringify(dataUsers), 'utf8',function(err){
            if(err) return console.log(err)});
    } else {
        console.log('else')
      //  const fileData = JSON.parse(fs.readFile('request.json'))
      //  console.log(fileData)
        dataUsers.booking_with_quality_check.push(user)
        fs.writeFile('request.json', JSON.stringify(dataUsers), 'utf8',function(err){
            if(err) return console.log(err)});
    }
    // append a new user to the JSON file


   //  const file = await fs.readFile(filename);
   // console.log(JSON.parse(file))
   // data = JSON.parse(file);
   //  data.push(user);
   //  await fs.writeFile(filename, JSON.stringify(dataUsers, null, 4));
return dataUsers
}






