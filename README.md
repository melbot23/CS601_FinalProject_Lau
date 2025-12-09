# CS601 Final Project

## Description
This final project implements CS601 materials in order to create a user-friendly website. I utilised React to create my website because of its beginner-friendly setup and intuitive modules.

## References
All written content is original.

The photo content on my Photography page is original.

All other photo content was sourced from the following websites:
- [Adobe Stock](https://stock.adobe.com)
- [Unsplash](https://unsplash.com/)

I referenced classroom materials and the following articles for my project:

### React Router
[React Router](https://www.w3schools.com/react/react_router.asp) provided easy routing to my components. I built off of the navigation bar and page layout from Assignment 3, but this time, I added multiple ways to navigate to different pages. The logo, the Home button in the nav, and the Home button in the footer all Link to "/". 

I realized many websites don't have that much content on their Home pages. Though the Home page is the first impression of a website, users are usually looking for a specific product on an e-commerce site for example, and rarely read a Home page from top to bottom. So I created avenues to explore the rest of my website by including links on my Home page. I also added visual intrigue with background photos and `:hover` styling so the Home page would look more eye-catching.

### Page Layout
I referenced [Building a Layout with React Router v6: Step-by-Step Guide](https://medium.com/@ravipatel.it/building-a-layout-with-react-router-v6-step-by-step-guide-75b9637f1fbe) when trying to create a layout that every page could follow. Creating a Layout component made it easier for me to understand the common structure of a webpage. And I could use  `Outlet` to dynamically render the content of each route into the layout.

### React Forms & Form Validation
I struggled to incorporate the form from Assignment #1 into my project, but knew I wanted the same simple form labels and input boxes. With [React Forms](https://www.w3schools.com/react/react_forms.asp), I could create input boxes and also validate input with simpler syntax. [React Form Validation](https://www.geeksforgeeks.org/reactjs/how-to-perform-form-validation-in-react/) taught me how to use the `useForm()` hook to handle form state and use the `register` method to apply certain validation rules to my First Name, Last Name, and Email inputs.

### Photo Gallery

[How to create an image gallery with CSS Grid](https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/) provided inspiration for how to approach creating a photo gallery using CSS Grid. 

```
{images.map(({ id, src, caption }) => (
    <figure key={id} id={id} className="gallery-item">
        <img src={src} alt={caption} />
        <figcaption>{caption}</figcaption>
    </figure>
))}
```
I used the [Map() method in ReactJS](https://letsreact.org/map-method-in-reactjs) to loop through my JSON data and render each photograph - identifying each photo using id, locating each photo using its src, captioning each photo using caption, and doubling the utility of caption by assigning it to alt.

### Adapting to Different Screen Sizes

I utilized CSS Grid and Flexbox to enhance the responsiveness of my webpage. Additionally, I applied [Relative Length](https://www.w3schools.com/cssref/css_units.php) units when defining content sizes and whitespace. This approach ensured that elements adapted fluidly to different screen dimensions, preventing content from being unintentionally pushed out of view by fixed margins

```
@media only screen and (max-width: 1000px)
```
I wanted to ensure content would not be cut out for any smaller screen sizes. I used [CSS @media Rule](https://www.w3schools.com/cssref/atrule_media.php) to turn any 2-column grids to 1-column grids on smaller screens.

### Visual Inspiration
Green, white, and black were the colors I used for my webpage. I thought that green evoked the sort of calmness I associate with pasttimes like writing and photography. [Tumblr](Tumblr.com) was my main visual inspiration, especially the website's solid background and white content cards with rounded edges.