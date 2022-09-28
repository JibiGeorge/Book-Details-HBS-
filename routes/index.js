var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index');
});

let product = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    bookName: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    publishedDate: "1925",
    description: "F. Scott Fitzgerald's novel,The Great Gatsby, follows Jay Gatsby, a man who orders his life around one desire: to be reunited with Daisy Buchanan, the love he lost five years earlier. Gatsby's quest leads him from poverty to wealth, into the arms of his beloved, and eventually to death."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
    bookName: "The Catcher in the Rye",
    authorName: "J. D. Salinger",
    publishedDate: "1951",
    description: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    bookName: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    publishedDate: "1960",
    description: "To Kill a Mockingbird is a 1961 novel by Harper Lee. Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/220px-1984first.jpg",
    bookName: "Nineteen Eighty-Four",
    authorName: "George Orwell",
    publishedDate: "1949",
    description: "The primary theme of 1984 by George Orwell is to warn readers of the dangers of totalitarianism. The central focus of the book is to convey the extreme level of control and power possible under a truly totalitarian regime. It explores how such a governmental system would impact society and the people who live in it."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lolita_1955.JPG/220px-Lolita_1955.JPG",
    bookName: "Lolita",
    authorName: "Vladimir Nabokov",
    publishedDate: "1955",
    description: "Lolita is a controversial novel about a Pedophile taking us on a journey on his Pedophilic adventures and his attempt to earn empathy from us, the readers, for ..."
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiABislzLYDsnOTPTGHZ1eoWpp7PzMGayxdCCgzCQc&s",
    bookName: "Adventures of Huckleberry Finn",
    authorName: "Mark Twain",
    publishedDate: "1884",
    description: "Adventures of Huckleberry Finn is one of Mark Twain's best-known and most important novels. The novel tells the story of Huckleberry Finn's escape from his alcoholic and abusive father and Huck's adventurous journey down the Mississippi River together with the runaway slave Jim."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg",
    bookName: "Pride and Prejudice",
    authorName: "Jane Austen",
    publishedDate: "1813",
    description: "At its core, Pride and Prejudice tells the love story of Elizabeth Bennet and Mr. Darcy, both of whom have to overcome their biases in order to end up together. Throughout the novel, both characters learn to unlearn their pride and prejudice so that they can come to accept the other's goodness of character."
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/71J7XjS8TrL.jpg",
    bookName: "The Living Mountain",
    authorName: "Amitav Ghosh",
    publishedDate: "2022",
    description: "A new story from internationally renowned author Amitav Ghosh, The Living Mountain is a cautionary tale of how we have systematically exploited nature, leading to an environmental collapse.Recounted as ..."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AnnaKareninaTitle.jpg/220px-AnnaKareninaTitle.jpg",
    bookName: "Anna Karenina",
    authorName: "Leo Tolstoy",
    publishedDate: "1878",
    description: "Anna Karenina clearly has borderline personality disorder, Holden Caulfield seems to have been abused as a child, Raymond Carver's characters wouldn't have these problems if they'd just go to AA. Perhaps it's an obvious direction for students to take, given the information society provides them."
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/220px-Jane_Eyre_title_page.jpg",
    bookName: "Jane Eyre",
    authorName: "Charlotte Brontë",
    publishedDate: "1847",
    description: "The novel follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles. Jane has many obstacles in her life - her cruel and abusive Aunt Reed, the grim conditions at Lowood school, her love for Rochester and Rochester's marriage to Bertha."
  }
]
router.get('/employeecard', function (req, res) {
  
  res.render('Pages/card', { product });
});

router.get('/employeetable', function (req, res, next) {

  res.render('Pages/table',{product});
});

module.exports = router;
