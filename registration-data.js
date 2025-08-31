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
      
      <div class="shared-features-timeline">
        <div class="shared-circle">
          <div class="shared-icon">★</div>
        </div>
        <div class="shared-content">
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
    <div style="background: rgba(0, 49, 92, 0.1); padding: 30px; border-radius: 10px; margin-top: 40px; text-align: center;">
      <h3 style="color: #00315c; margin-bottom: 20px;">Special Categories</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        ${registrationData.specialCategories.map(category => `
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FF7F00;">
            <h4 style="color: #00315c; margin-bottom: 10px;">${category.title}</h4>
            <p style="font-size: 1.1rem; font-weight: bold; color: #FF7F00;">${category.price}</p>
            <p style="font-size: 0.9rem;">${category.note}</p>
          </div>
        `).join('')}
      </div>
      <p style="margin-top: 20px; font-size: 0.95rem; color: black;">
        <strong>Early Bird Deadline:</strong> ${registrationData.earlyBirdDeadline} | <strong>Multi-day discounts apply</strong> | ${registrationData.groupDiscountNote}
      </p>
    </div>
  `;
}