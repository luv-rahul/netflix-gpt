# Netflix GPT

- npx create-react-app netflix-gpt
- Install Tailwind CSS
- Header UI
- Routing
- Login / Sign Up Form UI
- Form Validations
- Firebase Setup
- Deployed on Firebase (Steps Below)
- Create Sign Up User
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)

## Features

**Before Auth**

- Login/Signup
  - Sign-in Form
  - Redirect to Browser Page

**After Auth**

- Browse

  - Header
  - Main Movie
    - Trailer
    - Title & Description
  - Movie Suggestions
    - Movie Lists

- Netflix GPT
  - Search
  - Movie Suggestions

## Deploy Steps:

1. Install firebase CLI - npm install -g firebase-tools
2. Firebase Login - firebase login
3. Intialise Firebase - firebase init
4. Select Hosting
5. Deploy Command - firebase deploy

## Browser Page Planning

```
/**
 * Main Container
 *  - Video Background
 *  - Video Title
 * Secondary Container
 *  - Movie List * n
 *  - Cards * n
 */
```
