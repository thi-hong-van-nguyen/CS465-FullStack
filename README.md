# CS465-FullStack

## Architecture:

### Types of Frontend Development: 
In the full-stack project, we utilized Express HTML, JavaScript, and a single-page application (SPA). Express HTML was used for server-side rendering of dynamic content, JavaScript for client-side scripting and interactivity, and the SPA approach for creating highly responsive user interfaces that fetch data asynchronously without page reloads. Express HTML provided traditional server-rendered pages, while the SPA leveraged frameworks like React or Angular for client-side rendering.
### Why MongoDB?: 
The backend utilized a NoSQL MongoDB database due to its flexibility and scalability. NoSQL databases like MongoDB are schema-less, allowing for easy adaptation to evolving data structures. This flexibility is advantageous in applications where data models may change frequently or where there is a need to handle diverse data types efficiently. Additionally, MongoDB's horizontal scalability makes it suitable for handling large volumes of data and supporting high-traffic applications.

## Functionality:

### JSON vs. JavaScript: 
JSON (JavaScript Object Notation) is a lightweight data interchange format derived from JavaScript. While JavaScript is a programming language used for creating dynamic web content and client-side interactions, JSON is primarily a data format used for transmitting data between a server and a client. JSON ties together frontend and backend development pieces by providing a standardized format for data exchange. It allows the frontend and backend to communicate seamlessly, as both can easily parse and manipulate JSON data.
### Refactoring for Efficiency: 
One instance of enhancing functionality through refactoring was the substitution of certain static HTML pages with Handlebars templates. This enabled the reuse of page structures while facilitating the modification of displayed content. Additionally, another refactoring step involved transferring the content utilized for populating the templates from static JSON files housed within the codebase to MongoDB. This transition permits the addition or alteration of content data without necessitating the deployment of code changes to the website.

## Testing:
HTTP methods, like GET, POST, PUT, and DELETE, facilitate client-server interaction, with API endpoints serving as communication channels. In this full stack application, security involved user authentication and issuance of a valid JWT to grant access to specific endpoints.

## Reflection:
### How has this course contributed to your professional development?

This course has been instrumental in broadening my expertise in full-stack development and acquainting me with new technologies like Express. Throughout my career as a full-stack developer, my focus has primarily been on existing projects, limiting my exposure to building applications from inception. Participating in this course offered me invaluable insights into the holistic architecture of full-stack applications, deepening my understanding of how various components integrate seamlessly.

### What skills have you acquired or honed through this course to enhance your marketability in your field?

Through this course, I've significantly enhanced my JavaScript proficiency through hands-on practice and application. Moreover, the opportunity to delve into backend development with Node.js and Express has been enlightening. Given that proficiency in Node.js is often cited as a prerequisite or desirable skill in many job postings, gaining foundational knowledge in this sought-after technology has undoubtedly bolstered my marketability.

