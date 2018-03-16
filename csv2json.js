const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

const csv2json = (csvpath,jsonpath) => {
// There is probably a better and cleaner way to do this  -> this is my mantra while i'm writing code	
if(csvpath==null || jsonpath==null){
	console.log("It could be a little better. Give me a break...\nUsage -> node csv2json.js \"originalcsvfile.csv\" \"convertedjsonfile.json\"");
	return;
}	
csv()
.fromFile(csvpath,jsonpath)
.on('end_parsed',function(jsonArrayObj){
	fs.writeFileSync(path.join(__dirname, jsonpath), JSON.stringify(jsonArrayObj)) 
})
.on('done',(error)=>{
    console.log('I feel it is going to be a while until i master this node thing.\nWhat about you? I hope you are doing better than me.\nAnyway here is your file: ' +path.join(__dirname, jsonpath)+'\nBest wishes.  ')
})};

csv2json(process.argv[2],process.argv[3])