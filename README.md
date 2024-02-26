# Huellitas: Pet Adoption

[Documentation in Spanish](README_es.md)

## Table of Contents

- [Description](#description)
- [Website Navigation](#website-navigation)
  - [Navigation Bar](#navigation-bar)
    - [Desktop Navigation Bar](#desktop-navigation-bar)
    - [Mobile Navigation Bar](#mobile-navigation-bar)
  - [Main Page](#main-page)
    - [Desktop Navigation](#desktop-navigation)
    - [Mobile Navigation](#mobile-navigation)
  - [Pet Detail Page](#pet-detail-page)
  - [Pet Registration Page](#pet-registration-page)
  - [Login Page](#login-page)
  - [Registration Page](#registration-page)
  - [Password Recovery Page](#password-recovery-page)
  - [My Account Page](#my-account-page)
  - [Footer](#footer)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contribution](#contribution)
- [License](#license)
- [Author](#author)
  - [Contact](#contact)

## Description

Huellitas is a web platform dedicated to facilitating the pet adoption process, specifically dogs and cats. My goal is to provide a space where shelters and private individuals can post information about animals that need a home or are lost, also where people interested in adopting can search and find their new companion or those looking for their pet's location may be able to find it published.

The platform allows users to:

- Search for pets available for adoption: The main page displays a list of all pets available for adoption. Each pet is displayed on an individual card, which is generated using the `Card` component. By clicking on a card, users are redirected to a page with more details about the selected pet.
- Post information about pets that need a home: Registered users can add new pets to the platform. This is done through a pet registration form, which can be accessed through a button on the main page.
- Create and manage their user account: Users can register and log in to the platform.
- Contact owners or shelters to start the adoption process.

Huellitas is built with React and uses React Router for navigation. The pet information is obtained from an external API created by me, which you can access its repository with this [link](https://github.com/aledjv22/db-huellitas "link"), and custom hooks are used to perform the various operations.

## Website Navigation

### Navigation Bar

Huellitas features a top navigation bar that adapts to both mobile devices and desktop screens.

#### Desktop Navigation Bar

In the desktop version, the navigation bar is located at the top of the page and remains fixed as you scroll through the page. It contains the following elements:

- **Logo:** Clicking on the logo resets all search filters and closes any open submenu.

- **All:** This link leads to the main page and opens a submenu that allows filtering the search by type, sex, status, and size of the pets.

- **Dogs:** This link filters the search to only show dogs and opens a submenu similar to the previous one.

- **Cats:** This link filters the search to only show cats and opens a submenu similar to the previous one.

- **Sign Up:** This link is only visible if the user is not logged in. It leads to the registration page.

- **Log In:** This link is only visible if the user is not logged in. It leads to the login page.

- **My Account:** This link is only visible if the user is logged in. It leads to the user's account page.

Below are images of it:

<div align="center">
 <img src="https://i.ibb.co/3RCsvV6/navbar-Desktop.png" alt="Desktop navbar image" style="width: 100%;">
 <br/>
 <figcaption>Navigation bar in its desktop view</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/Jpd081t/sub-Menu-Navbar-Desktop.png" alt="Desktop filtering menu image" style="width: 40%;">
 <br/>
 <figcaption>Filtering submenu</figcaption>
</div>

#### Mobile Navigation Bar

In the mobile version, the navigation bar turns into a dropdown menu that can be opened and closed by clicking on the menu icon. It contains the same elements as the desktop version, but they are organized vertically instead of horizontally. Also, the "Sign Up", "Log In", and "My Account" links are displayed within the dropdown menu instead of on the navigation bar.

Below are images of it:

<div align="center">
 <img src="https://i.ibb.co/c83mtxJ/navbar-Mobile.jpg" alt="Mobile navbar image" style="width: 80%;">
 <br/>
 <figcaption>Navigation bar in its mobile view</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/C5xc2J5/nabvar-Mobile-open.jpg" alt="Mobile filtering menu image" style="width: 80%;">
 <br/>
 <figcaption>Deployed mobile navigation bar</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/smKcgYW/nav-Bar-Mobile-submenuopen.jpg" alt="Mobile filtering menu image" style="width: 80%;">
 <br/>
 <figcaption>Deployed filtering submenu</figcaption>
</div>

### Main Page

The main page of Huellitas presents a list of pets available for adoption and in other states. This list adapts to both mobile devices and desktop screens.

#### Desktop Navigation
In the desktop version, the pet list is displayed in a grid with several cards per row. Each card represents a pet and contains an image of the pet, its name, and its type. Clicking on a card redirects the user to a detail page for that pet.

If the user is logged in, a floating button is displayed at the bottom right of the screen. This button allows the user to register a new pet. If the user is not logged in, clicking on this button redirects them to the login page.

<div align="center">
 <img src="https://i.ibb.co/gwqyQt1/home.png" alt="Image of the main page from the desktop" style="width: 100%;">
 <br/>
 <figcaption>View of the main page from a desktop.</figcaption>
</div>

#### Mobile Navigation
In the mobile version, the pet list is displayed in a grid with a single card per row. Just like in the desktop version, clicking on a card redirects the user to a detail page for that pet.

The button to register a new pet is displayed in the same way as in the desktop version.

If no pets are found that match the user's search criteria, a message is displayed indicating that no results have been found. This message adapts to the device's screen and is prominently displayed so that the user can easily see it.

<div align="center">
 <img src="https://i.ibb.co/WxV31sL/home-mobile.png" alt="Image of the main page from the mobile" style="width: 50%;">
 <br/>
 <figcaption>View of the main page from a mobile.</figcaption>
</div>

### Pet Detail Page

The pet detail page is one of the most important pages of the application. Here is where users can view detailed information about a specific pet. The page adapts for both mobile devices and desktop.

- **Edit and Delete Buttons:** If the user is authenticated and is the owner of the pet, they will see two buttons at the top of the page: "Edit" and "Delete". By clicking on "Edit", the user can modify the pet's details. By clicking on "Delete", the pet will be removed from the database.

- **Pet Information:** Next, the detailed information of the pet is displayed, including its name, age, sex, size, type, status, location, and admission date.

- **Pet Description:** Below the pet's information, there is a detailed description of the pet.

- **Image Gallery:** Next, an image gallery of the pet is displayed.

- **Foundation Information:** If the pet belongs to a foundation, detailed information about the foundation is displayed.

- **Contact Form:** At the bottom of the page, there is a contact form that users can use to get in touch with the pet's owner.

<div align="center">
 <img src="https://i.ibb.co/dt4SnGL/pet-Detail-Desktop1.png" alt="Image of the pet detail page from the desktop one" style="width: 100%;">
 <img src="https://i.ibb.co/SmG1N9c/pet-Detail-Desktop2.png" alt="Image of the pet detail page from the desktop two" style="width: 100%;">
 <br/>
 <figcaption>View of the pet detail page from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/tJMr9k9/pet-Detail-Mobile1.png" alt="Image of the pet detail page from the mobile one" style="width: 50%;">
 <img src="https://i.ibb.co/tz6Zs4Q/pet-Detail-Mobile2.png" alt="Image of the pet detail page from the mobile two" style="width: 50%;">
 <br/>
 <figcaption>View of the pet detail page from a mobile.</figcaption>
</div>

### Pet Registration Page

The pet registration page is where users can register a new pet in the application. The page adapts for both mobile devices and desktop.

- **Registration Form:** The registration form is the main element of the page. Here, users can enter the pet's information, including its name, status, location, sex, age, description, type, size, main image, and other images.

- **Registration Button:** Once the user has filled in all the required information, they can click on the "Register pet" button to submit the form. If the registration is successful, a success message will be displayed.

- **Success Message:** If the registration is successful, a success message will be displayed with a button that takes the user to the detail page of the newly registered pet.

<div align="center">
 <img src="https://i.ibb.co/vhnJJK2/pet-Register-Desktop.png" alt="Image of the pet registration form from a desktop" style="width: 100%;">
 <br/>
 <figcaption>Pet registration form from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/qDg9Z1H/pet-Register-Mobile.png" alt="Image of the pet registration form from a mobile" style="width: 50%;">
 <br/>
 <figcaption>Pet registration form from a mobile.</figcaption>
</div>

### Login Page

The login page is where users can log into the application. The page adapts for both mobile devices and desktop.

- **Login Form:** The login form is the main element of the page. Here, users can enter their email and password.

- **Login Button:** Once the user has filled in all the required information, they can click on the "Log in" button to submit the form. If the login is successful, a success message will be displayed.

- **Success Message:** If the login is successful, a success message will be displayed with a button that takes the user to the main page.

- **Password Recovery:** If the user forgot their password, they can click on the "Forgot your password?" link to go to the password recovery page.

<div align="center">
 <img src="https://i.ibb.co/C8nvxjJ/sign-In-Desktop.png" alt="Image of the login system from a desktop" style="width: 100%;">
 <br/>
 <figcaption>Login system from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/CnQ9r2B/sign-In-Mobile.png" alt="Image of the login system from a mobile" style="width: 50%;">
 <br/>
 <figcaption>Login system from a mobile.</figcaption>
</div>

### Registration Page

The Registration (SignUp) page is where users can create a new account in the application. The page adapts for both mobile devices and desktop.

- **Registration Form:** The registration form is the main element of the page. Here, users can enter their first name, last name, email, password, and other optional data such as phone number, profile picture, and foundation details (if they represent one).

- **Registration Button:** Once the user has filled in all the required information, they can click on the "Create account" button to submit the form. If the registration is successful, a success message will be displayed.

- **Success Message:** If the registration is successful, a success message will be displayed with a button that takes the user to the login page.

<div align="center">
 <img src="https://i.ibb.co/mTVZKNv/sign-Up-Desktop.png" alt="Image of the registration system from a desktop" style="width: 100%;">
 <br/>
 <figcaption>Registration system from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/sKDfPX0/sign-Up-Mobile.png" alt="Image of the registration system from a mobile" style="width: 50%;">
 <br/>
 <figcaption>Registration system from a mobile.</figcaption>
</div>

### Password Recovery Page

The Password Recovery page is where users can change their password if they have forgotten it. The page adapts for both mobile devices and desktop.

- **Password Change Form:** The password change form is the main element of the page. Here, users can enter their new password and confirm it.

- **Password Change Button:** Once the user has filled in all the required information, they can click on the "Change password" button to submit the form. If the password change is successful, a success message will be displayed.

- **Success Message:** If the password change is successful, a success message will be displayed with a button that takes the user to the login page.

<div align="center">
 <img src="https://i.ibb.co/3cLZpWb/recovery-Desktop.png" alt="Image of the password recovery system from a desktop" style="width: 100%;">
 <br/>
 <figcaption>Password recovery system from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/qp1gLvR/recovery-Mobile.png" alt="Image of the password recovery system from a mobile" style="width: 50%;">
 <br/>
 <figcaption>Password recovery system from a mobile.</figcaption>
</div>

### My Account Page

The My Account page is where users can view and edit their personal information, as well as view their pets. The page adapts for both mobile devices and desktop.

- **Personal Data:** By clicking on "Personal Data", the user's personal information is displayed.

- **Edit Profile:** By clicking on "Edit Profile", a form is displayed that allows the user to edit their personal information.

- **My Pets:** By clicking on "My Pets", a list of the user's pets is displayed.

- **Log Out:** By clicking on "Log Out", the user logs out and is redirected to the home page.

<div align="center">
 <img src="https://i.ibb.co/bddHvws/my-Account-Desktop.png" alt="Image of the my account page from a desktop" style="width: 100%;">
 <br/>
 <figcaption>View of the my account page from a desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/6JFQZ8D/my-Account-Mobile.png" alt="Image of the my account page from a mobile" style="width: 50%;">
 <br/>
 <figcaption>View of the my account page from a mobile.</figcaption>
</div>

### Footer

The footer is where users can find additional information about the page and the creator. The footer design adapts for both mobile devices and desktop.

- **Copyright:** A copyright message is displayed indicating that all rights are reserved.

- **Creator Information:** A message is displayed indicating who created the page and why. This message includes a link to the creator's Twitter profile.

<div align="center">
 <img src="https://i.ibb.co/rydjSY3/footer-Desktop.png" alt="Image of the footer on desktop" style="width: 100%;">
 <br/>
 <figcaption>Footer on desktop.</figcaption>
</div>

<div align="center">
 <img src="https://i.ibb.co/d20grtq/footer-Mobile.png" alt="Image of the footer on mobile" style="width: 50%;">
 <br/>
 <figcaption>Footer captured from a mobile.</figcaption>
</div>

## Installation

To install Huellitas, follow these steps:

1. Clone the repository.

2. Install the dependencies using `npm install`.

3. Start the development server using `npm run dev`.

## Usage

Huellitas is a web page designed to promote the adoption of dogs and cats, however, there is currently a technical limitation that affects the display of pet content directly from this documentation.

To access the full content of the pets available for adoption, please visit [Huellitas](https://www.huellitas.live/) in your browser. Please note that due to database restrictions, direct access to certain routes from this documentation is not available at this time.

Once on the page, you will be able to explore the different sections dedicated to dogs and cats available for adoption. You can also perform searches, filter results, and contact shelters for more information about the available pets.

## Technologies

- React
- React Router
- Hooks
- Tailwind CSS
- HTML
- JavaScript

## Contribution

We are open to contributions! If you wish to contribute to Huellitas, we appreciate your interest and ask you to follow these guidelines to effectively submit your contributions:

1. **Fork the repository:** Fork the repository on GitHub by clicking the "Fork" button in the upper right corner of this page. This will create a copy of the repository in your own account.

2. **Clone your fork:** Clone your fork of the repository to your local machine. You can do this by running the following command in your terminal:

3. **Create a new branch:** Before you start making changes, create a new branch for your contribution. This will help keep your work separate from the main branch of the repository. You can do this by running the following command:
```bash
git checkout -b name-of-your-feature
```

4. **Make your changes:** Make the necessary changes in your code to implement the functionality you want to add or correct. Be sure to follow the style guidelines and best coding practices of the project.

5. **Commit your changes:** Once you have finished making your changes, commit them with a descriptive message. You can do this by running the following commands:
```bash
git add .
git commit -m "Add a brief description of your changes"
```

6. **Push your changes:** After committing your changes, it's time to push them to your repository on GitHub. You can do this by running the following command:
```bash
git push origin name-of-your-feature
```

7. **Open a Pull Request:** Once your changes are in your fork of the repository on GitHub, you can open a pull request to submit your changes to the original repository. Go to the page of your fork on GitHub and click on the "Compare & pull request" button. Be sure to provide a detailed description of your changes in the pull request.

Once you have submitted your pull request, we will be delighted to review your changes and merge them into the main repository if they are appropriate. Thank you for contributing to Huellitas!

## License

Huellitas is under the MIT License. See the `LICENSE` file for more information.

## Author

[Victor Alejandro Díaz Jáuregui](https://twitter.com/v_alediaz_ "Victor Alejandro Díaz Jáuregui")

### Contact

If you have any questions or concerns about Huellitas, feel free to contact me through my Twitter profile or by sending me an email at:

<div align="center">
 <a href="https://twitter.com/v_alediaz_" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" width="50" height="50">
 </a>

 <a href="mailto:victor.diaz.jauregui@mi.unc.edu.ar" target="_blank">
   <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail" width="50" height="50">
 </a>
</div>