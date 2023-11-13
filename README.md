# Task: GitHub User Avatar Finder Web App

## Objective:

Develop a web application using React that allows to input a GitHub username. Upon user input, the app should display the avatar of the user fetched from the GitHub API. The app should incorporate debouncing to enhance user experience and prevent excessive API calls. To implement debouncing, create a custom hook called useDebounce.

## Rquirements:

<img src="https://github.com/salmanshaikh18/GitHubUser_AvatarFinder_WebApp/blob/main/src/assets/requiements.png" alt='requirements'>

## User Interface (UI):

Create a simple and user-friendly UI with a text input box and an image container. The user should be able to type GitHub username in the input box.
GitHub API Integration:
Utilize the GitHub API to fetch user information, specially the user's avatar image.
Handle API requests and response effectively.

## Avatar Display: 
Upon successfull API response, display the user's avatar image in the designated container.

## Debouncing: 
Implement debouncing to improve performance and prevent excessive API calls while the user is typing in the input box.

Create a custom hook named useDebounce to manage the debouncing functionality.
Custom Debounce Hook (useDebounce):
The useDebounce hook should take an input value and a delay time as arguments.
Implement the debounce logic within the hook using setTimeout.
Return the debounced value after the specified delay has passed.

