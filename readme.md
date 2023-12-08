# Podcast App - final capstone project

## links to external files
*  [link to figma design file](https://www.figma.com/file/qXAKOu4WI3kwYHpUdqbzWq/BRABRU026_DWA-Capstone?type=design&node-id=0%3A1&mode=design&t=Se90uc1R02dmGmEo-1)
* [link to the Github repository](https://github.com/Bruyns/BRABRU026_FTC2301_GroupNaeemC_BrandonBruyns_DWACaptoneProject.git)
* [Podcasting site link](https://podcasting-couch.netlify.app/)


## contributions
* <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/ouroboros" title="ouroboros icons">Ouroboros icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/back" title="back icons">Back icons created by Roundicons - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
* <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Pixel perfect - Flaticon</a>
* [metatags](https://metatags.io/)
* api's used
    - [preview podcasts](https://podcast-api.netlify.app/shows)
    - [displayed podcasts](https://podcast-api.netlify.app/id/<ID>)
* <a href="https://devicon.dev" title="markdown icons">Markdown icons used - devicon</a>

## Languages and libraries used 
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="30px" height="30px" /> - HTML
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px" height="30px"/> - CSS
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="30px" height="30px"/> - Javascript (ESS6)
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="30px" height="30px"/> - React.js
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="30px" height="30px"/>) - Node.js
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="30px" height="30px" /> - ESLint
 - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" width="30px" height="30px"/> - Markdown

## progress (Work-in-progress)
* user stories:
  - User sees what genres (as genre titles) a show is associated with when browsing (busy)
  - user can visit a view where they see all their favourites (busy)
  - user can see the show and the season of any episode in favourites (busy)
  - episodes related by season/show are grouped in favourites (busy)
  - user is able to remove episodes from their favourites (busy)
  - user can filter shows by title through a text input (busy)
  - user can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/) (busy)
  - user sees the date and time that an episode was added to their favourites list (busy)
  - user can arrange favourites by show title from A-Z (busy)
  - user can arrange favourites by show title from Z-A (busy)
  - user can arrange facourites by date updated in ascending order (busy)
  - user can arrange favourites by date updated in descending order (busy)
  - Audio player shows current progeress and episode length as timestamp (busy)
  - audio player is always visible, so the user can listen to episodes while they browse (busy)
  - user is prompted to confirm they want to close the page when the audio is playing (busy)
  - app remembers which show and episode the user listened to last when returning to the platform (busy)
  - app remembers which shows and episodes the user listened to all the way through (busy)
  - app remembers the timestamp where the user stopped listening within 10-second accuracy period of closing (busy)
  - app remembers and shows the timestamp progress of any episode the user started listening to (busy)
  - user can "reset" all their progress, effectively removing their listening history (busy)
  - user can log in via https://app.supabase.com authentication (IN-PROGRESS)
    -SOLUTION:  
      create a supabase account that redirects users to a sign up/log in authentication screen where a users       account gets saved on supabase and can be accessed by the web app to push or pull stored data
  - user favourites are stored in https://supabase.com database (IN-PROGRESS)
    -SOLUTION:
      when a user that is signed in with supabase clicks on the "favourites" img the state of the podcast episode/show should be saved to the users account
  - user favourites are automatically synced when logged in, ensuring they share favourites between devices (IN-PROGRESS)
    -SOLUTION:
      whenever a user is signed in the state of the displayed podcasts both "all" and "my podcasts" should be updated to reflect the data of the signed-in user
  - user can share their favourites as a publicly accessable url (IN-PROGRESS)
    -SOLUTION:
      when the user clicks on the "share" icon the site should pull the url of the asigned "show"/"podcast" and have options displayed as to the what sites the user can share their podcast