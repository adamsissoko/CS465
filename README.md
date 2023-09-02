<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/adamsissoko/CS465">
    <img src="images/logo.png" alt="Logo" width="210">
  </a>

  <h3 align="center">ravlr Getaways: A Modernized Web Application for Travel Enthusiasts</h3>

  <p align="center">
    Adam Sissoko
    <br />
    <a href="https://github.com/adamsissoko/CS465/tree/main/documents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/adamsissoko/CS465/blob/main/images/travlr_login.gif">View Demo</a>
    ·
    <a href="https://github.com/adamsissoko/CS465/issues">Report Bug</a>
    ·
    <a href="https://github.com/adamsissoko/CS465/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#how-i-developed-the-project">How I Developed The Project</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align = "center">
  <h3>"Travlr" Web Application</h3>
  <img src="https://github.com/adamsissoko/CS465/blob/main/images/user_facing_page.png" alt="Main" width=auto><p></p>
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com)-->
</div>

<p>
  This course emphasized the holistic development of a web application, using the robust MEAN stack technology stack—comprising MongoDB, Express.js, Angular, and Node.js. The capstone project, named "Travlr Getaways," serves as a versatile travel portal where users can purchase plane tickets, book hotel stays, and find travel discounts.
</p>

<p>
  For a comprehensive understanding of the project scope, objectives, and evaluation metrics, you are encouraged to review the <a href="https://github.com/adamsissoko/CS465/tree/main/documents/Project%20Guidelines%20and%20Rubric.pdf" target="_blank">Guidelines and Rubric document</a>. The <a href="https://github.com/adamsissoko/CS465/tree/main/documents/CS%20465%20Travlr%20Getaways%20Wireframe.pdf" target="_blank">Wireframe document</a> provides an architectural overview of the intended end-product, serving as the foundational blueprint throughout the development phase. Design paradigms evolved as the project matured, however, the wireframe remained the cornerstone for architectural decisions.
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- BUILT WITH -->
### Built With

This project used the following frameworks, and will require them to run on your machine. See the <a href="#installation">installation</a> section for more information.


[![Node][Node.js]][Node-url]

[![Express][Express.js]][Express-url]

[![Mongodb][Mongodb]][Mongodb-url]

[![Angular][Angular.io]][Angular-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEVLOPMENT OF THE PROJECT -->
### How I Developed The Project

<p>
  The development journey for "Travlr Getaways" presented complex challenges in maintaining and modernizing a pre-existing codebase. The project's initial structure relied heavily on older components, some of which had evolved into newer, incompatible versions. This necessitated in-depth code reviews, followed by detailed adjustments to API routes, database queries, and UI components. Although JavaScript wasn't my forte, the challenges encountered served as a catalyst for acquiring a deeper understanding of the language and its associated libraries. Debugging became an engaging exploration of the codebase, allowing me to identify bottlenecks, optimize performance, and improve overall user experience.
</p>
<p>
  My approach to overcoming technical hurdles combines methodical planning with logical reasoning. I first perform an exhaustive review to understand the capabilities and limitations of the technologies in use. This sets the stage for a phased, step-by-step problem-solving methodology. Such a framework enables me to operate efficiently while keeping the project's overall goals and milestones in sight. One of my key strengths is my ability to switch between micro and macro perspectives easily. This capability lets me see the bigger picture while understanding how minute details contribute to the project's overall success. This dual-level approach serves as a cornerstone of my problem-solving strategy, not just in software development but in every aspect of life.
</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To install and run this application on your own machine, you'll need to install the frameworks listed above, as well as be running an IDE such as Visual Studio Code or similar.

### Prerequisites

Start by ensuring you have npm installed on your machine.

  ```sh
  npm install npm@latest -g
  ```

### Installation

To install and run the application, follow the instructions below.

1. Clone the repo
   ```sh
   gh repo clone adamsissoko/CS465
   ```
2. Open the folder in VS Code
3. Navigate to the "app_admin" folder
   ```sh
   cd app_admin
   ```  
4. Install NPM packages
   ```sh
   npm install
   ```
5. Navigate to the "app_server" folder
   ```sh
   cd ..
   cd app_server
   ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. In the "app_server" folder, start the server
   ```sh
   npm run start:server
   ```
8. In the "app_admin" folder, start the Angular server
   ```sh
   ng serve
   ```
9. Open a web browser and navigate to "http://localhost:3000" to access the API
10. Open another browser tab / window and navigate to "http://localhost:4200" to access the backend

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<h3>Front-end Customer Facing Website</h3>
<p>The main customer page uses standard HTML with javascript and handlebars to access the backend database (served by MongoDB local hosting) and display available information to customers. </p>

<table>
    <tr>
        <th>Homepage</th>
        <th>Travel Page</th>    
    </tr>
    <tr>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/user_facing_page.png" alt="[main user page]" style="width=auto;"></td>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/travel_page_user.png" alt="[travel page]" style="width=auto;"></td>
    </tr>
        
</table>

<h3>Backend SPA (using Angular, Express, node.js, and MongoDB)</h3>
<p>The project incorporated a administrative backend that utilized the Angular, Express, node.js, and MongoDB (MEAN) stack system to deliver a single-page application to administrators. In this SPA a user could log-in, Add trips, Edit trips, and Delete trips. All changes made in the backend were instantly visible on the front end page for customers.</p>
<table>
    <tr>
        <th>Homepage</th>
        <th>Login Screen</th>
        <th>Logged In</th>
    </tr>
    <tr>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/user_logged_out.png" alt="[homepage]" style="width=auto;"></td>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/login_page.png" alt="[login]" style="width=auto;"></td>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/main_page.png" alt="[logged in]" style="width=auto;"></td>
    </tr>
</table>

<table>
    <tr>
        <th>Editing a Trip</th>
        <th>Trip Succesfully Edited</th>
        <th>Trip Deleted</th
    </tr>
    <tr>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/editing_trip.png" alt="[edit]" style="width=auto;"></td>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/trip_edited_successfully.png" alt="[success]" style="width=auto;"></td>
        <td><img src="https://github.com/adamsissoko/CS465/blob/main/images/trip_deleted_successfully.png" alt="[deleted]" style="width=auto;"></td>
    </tr>
</table>


_For more examples, please refer to the [Design Document](https://github.com/adamsissoko/CS465/blob/main/documents/Software%20Design%20Document%20-Module%207%20-%20Artl.docx.pdf)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add README
- [ ] Add https routing
- [ ] Add Registration button to access service
- [ ] Add pagenation to backend

See the [open issues](https://github.com/adamsissoko/CS465/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/adamsissoko/CS465.svg?style=for-the-badge
[contributors-url]: https://github.com/adamsissoko/CS465/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adamsissoko/CS465.svg?style=for-the-badge
[forks-url]: https://github.com/adamsissoko/CS465/network/members
[stars-shield]: https://img.shields.io/github/stars/adamsissoko/CS465.svg?style=for-the-badge
[stars-url]: https://github.com/adamsissoko/CS465/stargazers
[issues-shield]: https://img.shields.io/github/issues/adamsissoko/CS465.svg?style=for-the-badge
[issues-url]: https://github.com/adamsissoko/CS465/issues
[license-shield]: https://img.shields.io/github/license/adamsissoko/CS465.svg?style=for-the-badge
[license-url]: https://github.com/adamsissoko/CS465/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077FF
[linkedin-url]: https://www.linkedin.com/in/adam-sissoko-3946a928a/

[product-screenshot]: images/main_page.png

[Node.js]: https://img.shields.io/badge/node.js-002200?style=for-the-badge&logo=nextdotjs&logoColor=green
[Node-url]: https://nodejs.org/en/
[Express.js]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=222222
[Express-url]: https://expressjs.com/
[Mongodb]: https://img.shields.io/badge/mongodb-003300?style=for-the-badge&logo=mongodb&logoColor=11FF11
[Mongodb-url]: https://www.mongodb.com/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
