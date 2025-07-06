# Tic Tac Toe Game 🎮

A classic Tic Tac Toe game built with React and TypeScript, featuring a clean, responsive design and smooth gameplay experience.

## Features

- **Interactive Gameplay**: Click on squares to place X or O
- **Game Status**: Shows current player turn, winner, or tie status
- **Restart Functionality**: Reset the game at any time
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Hover effects and distinct colors for X and O
- **TypeScript Support**: Fully typed for better development experience

## Live Demo

🎮 **[Play the Game Live](https://rllz0.github.io/Tic-Tac-Toe-ts/)**

## Screenshots

### Desktop View
![Desktop Screenshot](./src/assets/Tic%20Tac%20Toe.png)

*Add your actual screenshots to the `screenshots/` folder and update the paths above*

The game features a clean, modern interface with:
- Centered game board with clear visual boundaries
- Color-coded players (X in blue, O in red)
- Responsive layout that adapts to different screen sizes
- Intuitive restart button

## Project Structure

```
├── App.tsx                
├── App.css                 
├── components/
│   ├── Board.tsx          
│   ├── Square.tsx        
│   └── CalculateWinner.tsx 
└── README.md             

## Component Overview

### App.tsx (Game Component)
- Manages game state including move history and current player
- Handles game restart functionality
- Renders the main game interface

### Board.tsx
- Manages the 3x3 game grid
- Handles square clicks and move validation
- Displays game status (next player, winner, or tie)

### Square.tsx
- Renders individual clickable squares
- Applies appropriate styling based on square value (X, O, or empty)

### CalculateWinner.tsx
- Contains the logic to determine if there's a winner
- Checks all possible winning combinations (rows, columns, diagonals)

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing X's and O's
3. X always goes first
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled and no player has won, the game is a tie

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tic-tac-toe-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to play the game

## Deployment

### GitHub Pages
To deploy to GitHub Pages:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/tic-tac-toe-game",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on every push to main branch

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect React and configure build settings
3. Deploy with zero configuration

## Technologies Used

- **React**: Frontend framework for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **CSS3**: Styling with responsive design and modern layout techniques
- **HTML5**: Semantic markup structure

## Responsive Design

The game is fully responsive and optimized for various screen sizes:

- **Desktop** (768px+): Full-size squares (80x80px) with optimal spacing
- **Tablet** (768px and below): Medium squares (70x70px) with adjusted layout
- **Mobile** (480px and below): Compact squares (60x60px) with mobile-friendly interface
- **Small Mobile** (320px and below): Smallest squares (50x50px) for very small screens

## Browser Support

The game works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## Future Enhancements

Potential features that could be added:
- [ ] AI opponent with different difficulty levels
- [ ] Score tracking across multiple games
- [ ] Game history with move replay
- [ ] Custom themes and animations
- [ ] Online multiplayer functionality
- [ ] Sound effects and music

---

Enjoy playing Tic Tac Toe! 🎯