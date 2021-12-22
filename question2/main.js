class Media{
    constructor(Name,Year,Country,Author,Language){
      this.Name=Name;
      this.Year=Year;
      this.Country=Country;
      this.Author=Author;
      this.Language=Language;
    }
  };
  class Movie extends Media {
    constructor(Name, Year, Country, Author, Language,Actor) {
      super(Name, Year, Country, Author, Language,Actor);
      this.Actor = Actor;
    }
  }
  class Book extends Media {
    constructor(Name, Year, Country, Author, Language,Title) {
      super(Name, Year, Country, Author, Language);
      this.Title = Title;
    }
  }

  
  const myMovie = new Movie("Me before you","2016","USA","Thea sharrock","English","Emillia Clarke");
  console.log(myMovie);
  
  const myBook = new Book("Me before you","2012","England","Jojo moyrs","English","Roman");
  console.log(myBook);