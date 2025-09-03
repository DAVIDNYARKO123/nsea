// Centralized registration data for NSEA 2026
const registrationData = {
  categories: [
    {
      title: "Student Attendee",
      price: 150,
      earlyBird: 120,
      daily: 75,
      features: ["Digital certificate", "Student poster session"],
      link: "https://whova.com/portal/registration/JAZH@ay79U76bklpttLE/",
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
        "Certificate of presentation",
      ],
      link: "https://whova.com/portal/registration/JAZH@ay79U76bklpttLE/9hx0qvdk",
    },
    {
      title: "General Attendee",
      price: 200,
      earlyBird: 180,
      daily: 100,
      features: ["Digital certificate"],
      link: "https://whova.com/portal/registration/JAZH@ay79U76bklpttLE/zoaamyjp",
    },
    {
      title: "Non-Student Presenter",
      price: 175,
      earlyBird: 157.5,
      daily: 87.5,
      features: [
        "Presentation opportunity",
        "Paper publication",
        "Certificate of presentation",
      ],
      link: "https://whova.com/portal/registration/JAZH@ay79U76bklpttLE/wm749txe",
    },
  ],
  sharedFeatures: [
    "Access to all sessions",
    "Conference materials",
    "Networking events",
    "Workshop access",
    "Exhibition hall access",
  ],
  specialCategories: [
    {
      title: "Keynote Speaker",
      price: "Complimentary",
      note: "By invitation only",
    },
    {
      title: "Invited Speaker",
      price: "Complimentary",
      note: "By invitation only",
    },
  ],
  earlyBirdDeadline: "April 15, 2026",
  groupDiscountNote: "Group rates available for 5+ registrations",
};

// Function to generate registration cards HTML
function generateRegistrationCards() {
  return `
    <div class="simple-registration-container">
      <div class="simple-registration-grid">
        ${registrationData.categories
          .map((category) => {
            const regularPrice =
              category.price === 0 ? "FREE" : `$${category.price}`;
            const earlyBirdPrice =
              category.earlyBird === 0 ? "FREE" : `$${category.earlyBird}`;
            const dailyRate =
              category.daily === 0 ? "FREE" : `$${category.daily}`;
            const specialNote = category.special
              ? `<div class="simple-special">${category.special}</div>`
              : "";

            return `
            <div class="simple-reg-card ${
              category.price === 0 ? "free-card" : ""
            }">
              <div class="simple-card-header">
                <h4>${category.title}</h4>
                <div class="simple-main-price">${regularPrice}</div>
              </div>
              ${specialNote}
              
              <div class="simple-pricing">
                <div class="simple-price-item">
                  <span>Regular: ${regularPrice}</span>
                </div>
                <div class="simple-price-item early">
                  <span>Early Bird: ${earlyBirdPrice}</span>
                </div>
                <div class="simple-price-item">
                  <span>Daily: ${dailyRate}</span>
                </div>
              </div>
              
              ${
                category.features.length > 0
                  ? `
              <div class="simple-features">
                <ul>
                  ${category.features
                    .map((feature) => `<li>${feature}</li>`)
                    .join("")}
                </ul>
              </div>
              `
                  : ""
              }
              
              <div class="simple-button">
                <a href="${
                  category.link
                }" class="simple-register-btn" target="_blank">Register Now</a>
              </div>
            </div>
          `;
          })
          .join("")}
      </div>
      
      <div class="simple-shared-card">
        <h4>All Registrations Include</h4>
        <ul class="simple-shared-list">
          ${registrationData.sharedFeatures
            .map((feature) => `<li>${feature}</li>`)
            .join("")}
        </ul>
      </div>
    </div>
  `;
}

// Function to generate special categories HTML
function generateSpecialCategories() {
  return `
    <div class="special-categories-container">
      <div class="special-categories-simple">
        <h4>Special Categories</h4>
        <p class="special-subtitle">Exclusive invitations for distinguished speakers</p>
        
        <div class="special-categories-inline">
          ${registrationData.specialCategories
            .map(
              (category) => `
            <div class="special-category-badge">
              <span class="special-icon">🎯</span>
              <span>${category.title}</span>
              <span class="special-price-badge">${category.price}</span>
            </div>
          `
            )
            .join("")}
        </div>
        
        <div class="special-simple-footer">
          <p><strong>Early Bird:</strong> ${
            registrationData.earlyBirdDeadline
          } | <strong>Group rates available</strong> for 5+ registrations</p>
        </div>
      </div>
    </div>
  `;
}
