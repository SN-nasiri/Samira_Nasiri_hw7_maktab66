function University(className, classUnit, classCapacity, project) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity ;
    this.project = project;
}
var softEngineering = new University('softEngineering' , 3 , 50 , 'book');
var network = new University('network' , 3 , 30 , true);
console.log(softEngineering ,network );
