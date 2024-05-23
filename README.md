# Sing-To-Me Front-end

### Contents
1. Members
2. Introduction
3. Screen Planning (Figma)
4. Screen Composition
5. Used Languages, Libraries, Frameworks, Tools

## **1. Members**

- **Kim Daeun**: Implemented login page, main page, synthesis page, and top100 page.
- **Kim Taeyeop**: Implemented song playback bar and song playback.

## **2. Introduction**

The Sing-To-Me website is a platform where you can create new songs by overlaying different voices onto original tracks. Users can upload various voice files to train models, and then choose original songs and trained voices to blend together, creating new vocal combinations. Key features include:

- User login and management
- Uploading voice files and training models
- Blending original songs with trained voices to synthesize new songs
- Song playback
- Providing a Top100 list of popular songs

## **3. Screen Planning (Figma)**

Screen planning was carried out using Figma to design the overall UI/UX and define the layout and functionality of each page. The main screens and planning intentions are as follows:

- **Login Page**: Controls user authentication and access.
- **Main Page**: Introduces main functions and provides access links.
    - Platform description and usage guide (center banner)
    - List of songs synthesized by the user (small banner)
    - List of songs liked by the user (small banner)
    - List of voices trained by the user (small banner)
- **Top100 Page**: Provides a list of popular songs and playback functionality.
- **Synthesis Page**: Provides an interface for song synthesis inference.
- **Training Page**: Provides an interface for uploading voice files and training models.
- **My Synthesized Songs Page**: Provides a list of songs synthesized by the user.
- **My Liked Songs Page**: Provides a list of songs liked by the user.
- **My Trained Voices Page**: Provides a list of voices trained by the user.

## **4. Screen Composition**

### **4.1 Folder Structure**

The project's folder structure is as follows:

![1](https://github.com/Singing-voice-conversion/Front/assets/124601567/5d3dd759-980a-4b01-b77b-6432db28648d)  
![2](https://github.com/Singing-voice-conversion/Front/assets/124601567/0b14dacb-a13b-4cee-b9a9-f7bef8df87f5)

### **4.2 Screen Composition**

The components and functionality of each screen are as follows:

- **Login Page (LogInView)**:
    - User email and password input fields
    - Login button
    - Sign-up link
- **Main Page (HomeView)**:
    - **Navigation Bar**: Links to main pages
    - **Platform Description and Usage Guide (Center Banner)**: Provides information about Sing-To-Me and usage instructions
    - **My Synthesized Songs List (Small Banner)**: Displays a list of songs synthesized by the user
    - **My Liked Songs List (Small Banner)**: Displays a list of songs liked by the user
    - **My Trained Voices List (Small Banner)**: Displays a list of voices trained by the user
- **Top100 Page (Top100View)**:
    - Displays a list of popular songs
    - Provides playback and detailed information functionality
- **Synthesis Page (SynthesisView, SynthesisCreateStep1View, SynthesisCreateStep2View)**:
    - Provides an interface for song synthesis inference
- **Training Page (TrainingView, TrainingCreateView)**:
    - Provides an interface for uploading voice files and training models
- **My Synthesized Songs Page (SynthesizedSongView)**:
    - Displays a list of songs synthesized by the user
- **My Liked Songs Page (LikedSongView)**:
    - Displays a list of songs liked by the user
- **My Trained Voices Page (TrainedVoiceView)**:
    - Displays a list of voices trained by the user
- **Player Bar (PlayerBar)**:
    - Displays current song information
    - Provides play, pause, next song, previous song buttons
    - Displays and allows adjustment of playback time

## **5. Used Languages, Libraries, Frameworks, Tools**

The languages, libraries, frameworks, and tools used in the project are as follows:

- **Languages**: HTML, CSS, JavaScript
- **Libraries and Frameworks**: Vue.js, Vue Router, JQuery
- **Tools**: VScode
