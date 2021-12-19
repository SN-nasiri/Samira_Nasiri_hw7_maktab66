// function University( ) {
//     this.className = 'softEngineering';
//     this.classUnit = 3;
//     this.classCapacity = 50 ;
// }
// var softEngineering = new University();
// console.log(softEngineering , network);


function University(className,classUnit,classCapacity ,project) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity ;
    this.project = project;
}
var softEngineering = new University('softEngineering' , 3 , 50 , 'book');
var network = new University('network' , 3 , 30 , true);
console.log(softEngineering ,network );
