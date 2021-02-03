
function whosPaying(names){
    
    var Names = names;
    var r = Math.floor(Math.random() * Names.length);
    return ( `${Names[r]} is going to buy lunch today!` );
}
var array = ["Peter", "Paul", "Marry"];
whosPaying(array);