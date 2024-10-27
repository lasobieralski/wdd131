const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"	
	}
];

// Reference the main content area where articles will be inserted
// Reference the articles container where articles will be inserted
const articlesContainer = document.querySelector(".articles-container");

articles.forEach((item) => {
    // Create a new section element for the article
    const articleSection = document.createElement('section');
    articleSection.classList.add('article'); // Add the 'article' class

    // Create the book-details div
    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');
    bookDetails.innerHTML = `
        <p class="date">${item.date}</p>
        <p>${item.ages}</p>
        <p>${item.genre}</p>
        <p>${item.stars}</p>
    `;

    // Create the main article content div
    const articleContent = document.createElement('div');
    articleContent.classList.add('article-content');
    articleContent.innerHTML = `
        <h2>${item.title}</h2>
        <div class="book-cover">
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
        </div>
        <p>${item.description}</p>
    `;

    // Append book details and content to the article section
    articleSection.appendChild(bookDetails);
    articleSection.appendChild(articleContent);

    // Append each article section to the articles container
    articlesContainer.appendChild(articleSection);
});
