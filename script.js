// DOM Elements
const winnersGrid = document.getElementById('winners-grid');
const searchInput = document.getElementById('winner-search');

// Winner Management
class WinnerManager {
    constructor() {
        this.winners = [];
        this.initialize();
    }

    createWinnerCard(winner) {
        const card = document.createElement('div');
        card.className = 'winner-card';
        
        card.innerHTML = `
            <div class="winner-header">
                <img src="${winner.profileImage}" alt="${winner.username}'s profile" loading="lazy">
                <h3>@${winner.username}</h3>
            </div>
            <div class="gift-container">
                <div class="gift-icon">
                <a class="btn lightbox-243545781299167"
      style="
      margin-top: 16px;
      text-transform: uppercase;
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      padding: 10px;
      font-family: inherit;
      text-shadow: none;
      user-select: none;
      transition: all,.1s,ease-in;
      background-color: #7300ff;
      border: 1px solid #ffffff;
      color: #FFFFFF;
      ">
                                <img src="giftcard-redeem.png" alt="Claim Gift 🎁">
                            </a></div>
            </div>
        `;
        
        return card;
    }

    render(winners = this.winners) {
        winnersGrid.innerHTML = '';
        winners.forEach(winner => {
            winnersGrid.appendChild(this.createWinnerCard(winner));
        });
    }

    async initialize() {
        try {
            // Simulated data - in a real app, this would fetch from an API
            this.winners = Array.from({ length: 25 }, (_, i) => ({
                username: `winner ${i + 1}`,
                profileImage: "placeholder-image.gif",
                id: i + 1
            }));
            
            this.render();
        } catch (error) {
            console.error('Error initializing winners:', error);
            winnersGrid.innerHTML = '<p class="error-message">Error loading winners. Please try again later.</p>';
        }
    }
}

// Initialize Application
const winnerManager = new WinnerManager();