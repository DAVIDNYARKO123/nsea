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
  earlyBirdDeadline: "January 1, 2026",
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
    <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.1); margin-top: 20px;">
      <div style="background: linear-gradient(135deg, #00315c, #004684); color: white; padding: 15px 25px;">
        <h4 style="margin: 0; font-weight: 600;">Special Categories</h4>
        <p style="margin: 8px 0 0 0; font-size: 0.95rem; opacity: 0.9;">Exclusive invitations for distinguished speakers</p>
      </div>
      <div style="padding: 25px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
          ${registrationData.specialCategories
            .map(
              (category, index) => `
            <div style="display: flex; align-items: center; gap: 12px; padding: 15px 20px; background: linear-gradient(135deg, ${index % 2 === 0 ? '#00315c' : '#FF7F00'}, ${index % 2 === 0 ? '#004684' : '#FF9933'}); color: ${index % 2 === 0 ? 'white' : 'black'}; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
              <div style="background: ${index % 2 === 0 ? 'white' : '#00315c'}; color: ${index % 2 === 0 ? '#00315c' : 'white'}; width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem; flex-shrink: 0;">
                ${String(index + 1).padStart(2, '0')}
              </div>
              <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 2px;">${category.title}</div>
                <div style="font-weight: bold; font-size: 0.9rem; opacity: 0.9;">${category.price}</div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        
        <div style="border-top: 2px solid #00315c; padding-top: 15px; text-align: center;">
          <p style="margin: 0; color: #666; font-size: 0.95rem; line-height: 1.5;">
            <strong style="color: #00315c;">Early Bird:</strong> ${registrationData.earlyBirdDeadline} | 
            <strong style="color: #FF7F00;">Group rates available</strong> for 5+ registrations
          </p>
        </div>
      </div>
    </div>
  `;
}
