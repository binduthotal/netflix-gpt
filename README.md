# Netflix GPT

- Create-react-app
- installed and configured tailwind css
- Header
- Rounting of App
- Login Form
- SignUp form
- Form Validation
- useRef Hook
- firebase setup
- firebase deploy ou app to production
- Create SignUp Authentication user account
- Implemented SignIn in userAPI
- Created redux store with userSlice
- Implemented SignOut
- Update Profile
- BugFix: Sign in user dispalyName and profile picture
- BugFix: If user is not logged in Redirect /browse to Login page and Vice versa
- Unsubsribed to the onAuthStateChange callback
- Add urls to constants file
- Registered for TMDB Api and get API key and access tokem
- Go to TMDB documentation and get data from now Playing
- created moviesSlice to store NowPlayingMovies
- created custom Hook for now playing movies
- Update store with movies Data
- Planning for main contaoner and secondary coontainer
- fetch data for Trailer video by movie id
- update store with trailer video in the same movieSlice
- Embeded the youtube video and make it autoplay and mute
- Created Secondary container which contains MovieList and MovieCard
- Fteched TMDB API of popular, trending etc and build movies list in secondary container.
- Tailwind to make Movie list looks good.
- Integrated GPT search using openGpt
- Created GPt search button with gpt component which is toggled on gptsearch button click
- created multilingiual options for gpt search bar and suggestions
- For language updating created langSlice and update the language in the search bar accordingly

# features
- SignUp page
    - sign in / Sign up Form
    - redirect to Browser page
- Logged In Users
    - Browser page (after authentication)
        - Header
        - Main movie
            - Trailer in Background
            - Title in description
            - Movies Suggestions
                - Movies List * n
- Netflix GPT
    - Search Bar
    - Movie Suggestions