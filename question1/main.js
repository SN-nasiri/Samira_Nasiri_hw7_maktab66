//first solution
// function University(className, classUnit, classCapacity, project) {
//     this.className = className;
//     this.classUnit = classUnit;
//     this.classCapacity = classCapacity ;
//     this.project = project;
// }
// var softEngineering = new University('softEngineering' , 3 , 50 , 'book');
// var network = new University('network' , 3 , 30 , true);
// console.log(softEngineering ,network );

//second solution
const University = function(className, classUnit, classCapcity){
    this.className=className;
    this.classUnit=classUnit;
    this.classCapcity=classCapcity;
  }
  const softEngineeringClass=new University("softEnginnering",3,50);
  const networkClass = new University("network", 3, 30);
  console.log(softEngineeringClass);
  console.log(networkClass);
 /*--*/
  softEngineeringClass.book="Mathematic";
  console.log(softEngineeringClass);
  networkClass.project=true;
  console.log(networkClass);
  