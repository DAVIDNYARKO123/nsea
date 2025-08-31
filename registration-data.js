// Centralized registration data for NSEA 2026
const registrationData = {
  categories: [
    {
      title: "Student Attendee",
      price: 150,
      earlyBird: 120,
      daily: 75,
      features: [
        "Digital certificate",
        "Student poster session"
      ]
    },
    {
      title: "Student Presenter",
      price: 0,
      earlyBird: 0,
      daily: 0,
      special: "FREE with accepted paper",
      features: [
        "Presentation opportunity",
        "Priority travel scholarships",
        "Certificate of presentation"
      ]
    },
    {
      title: "General Attendee",
      price: 200,
      earlyBird: 180,
      daily: 100,
      features: [
        "Digital certificate"
      ]
    },
    {
      title: "Non-Student Presenter",
      price: 175,
      earlyBird: 157.50,
      daily: 87.50,
      features: [
        "Presentation opportunity",
        "Paper publication",
        "Certificate of presentation"
      ]
    }
  ],
  sharedFeatures: [
    "Access to all sessions",
    "Conference materials", 
    "Networking events",
    "Workshop access",
    "Exhibition hall access"
  ],
  specialCategories: [
    {
      title: "Keynote Speaker",
      price: "Complimentary",
      note: "By invitation only"
    },
    {
      title: "Invited Speaker",
      price: "Complimentary",
      note: "By invitation only"
    }
  ],
  earlyBirdDeadline: "April 15, 2026",
  groupDiscountNote: "Group rates available for 5+ registrations"
};

// Function to generate registration cards HTML
function generateRegistrationCards() {
  return `
    <div class="registration-timeline-container">
      ${registrationData.categories.map((category, index) => {
        const regularPrice = category.price === 0 ? 'FREE' : `$${category.price}`;
        const earlyBirdPrice = category.earlyBird === 0 ? 'FREE' : `$${category.earlyBird}`;
        const dailyRate = category.daily === 0 ? 'FREE' : `$${category.daily}`;
        const specialNote = category.special ? `<div class="reg-special">${category.special}</div>` : '';
        const isEven = index % 2 === 0;
        
        return `
          <div class="registration-timeline-item ${category.price === 0 ? 'free-category' : ''} ${isEven ? 'even' : 'odd'}">
            <div class="registration-circle">
              <div class="price-display">${regularPrice}</div>
            </div>
            <div class="registration-content">
              <h4>${category.title}</h4>
              ${specialNote}
              
              <div class="pricing-row">
                <div class="price-group">
                  <span class="price-label">Regular</span>
                  <span class="price-value">${regularPrice}</span>
                </div>
                <div class="price-group early-bird">
                  <span class="price-label">Early Bird</span>
                  <span class="price-value">${earlyBirdPrice}</span>
                </div>
                <div class="price-group">
                  <span class="price-label">Daily</span>
                  <span class="price-value">${dailyRate}</span>
                </div>
              </div>
              
              ${category.features.length > 0 ? `
              <div class="additional-benefits">
                <span class="benefits-label">Additional Benefits:</span>
                <ul class="benefits-list">
                  ${category.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
              
              <div class="register-action">
                <a href="#" class="register-timeline-btn">Register Now</a>
              </div>
            </div>
          </div>
        `;
      }).join('')}
      
      <div class="registration-timeline-item shared-features-card">
        <div class="registration-circle">
          <div class="price-display">ALL</div>
        </div>
        <div class="registration-content">
          <h4>All Registrations Include</h4>
          <ul class="shared-benefits-list">
            ${registrationData.sharedFeatures.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Function to generate special categories HTML
function generateSpecialCategories() {
  return `
    <div class="special-categories-section">
      <div class="special-header">
        <h3>Special Categories</h3>
        <p class="special-subtitle">Exclusive invitations for distinguished speakers</p>
      </div>
      <div class="special-categories-grid">
        ${registrationData.specialCategories.map(category => `
          <div class="special-category-card">
            <div class="special-icon">🎯</div>
            <div class="special-card-content">
              <h4>${category.title}</h4>
              <div class="special-price">${category.price}</div>
              <p class="special-note">${category.note}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="special-footer">
        <div class="special-deadline">
          <strong>Early Bird Deadline:</strong> ${registrationData.earlyBirdDeadline}
        </div>
        <div class="special-note-text">
          <strong>Multi-day discounts apply</strong> | ${registrationData.groupDiscountNote}
        </div>
      </div>
    </div>
  `;
}