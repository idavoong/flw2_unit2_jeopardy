let categories = [
  "Robots",
  "Nicknames",
  "Famous first words",
  "Going 'dark'",
  "Fictional companies",
  "Painfully obvious"
];

/* TODO: Program the following:
 *  Print the category titles.
 *
 * 1. Loop over the `categories` array.
 *      HINT: Use a for/of loop
 *      Need more help? Check out https://mzl.la/3lDHxIq or ask a volunteer.
 *
 * 2. Create an HTML string for each category. It should look like this:
 *      <div class='category'><div class='category-cell'>CATEGORY</div></div>
 *
 * 3. Replace CATEGORY in each string with the name of the category.
 *      For example, the Robots category would be:
 *          <div class='category'><div class='category-cell'>Robots</div></div>
 *      HINT: Use the + operator on a string and a variable to join them!
 *      Need more help? Check out https://bit.ly/2EIsD3b or ask a volunteer.
 *
 * 4. Use jQUery's append function to add your HTML string to the #categories div.
 *      HINT: Use $(selector).append(html);
 *      Need more help? Check out https://api.jquery.com/append/ or ask a volunteer.
 *
 * BONUS: Make all the category names UPPERCASE.
 *      HINT: Use the toUpperCase() function.
 *      TRIVIA: Why is it called UPPERCASE?
 *      Answer: https://bit.ly/3gOwrga
 */
function renderCategories() {
  //number 1
  $(".categories").append("");

  for (let value of categories) {
    return (
      '<div class="category"><div class="category-cell">' +
      value +
      "</div></div>)"
    );
  }
}

renderCategories();
