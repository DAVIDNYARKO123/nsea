// Centralized registration data for NSEA 2026
const registrationData = {
  categories: [
    {
      title: "Student Attendee",
      price: 150,
      earlyBird: 120,
      daily: 75,
      features: [
        "Access to all sessions",
        "Conference materials",
        "Networking events",
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
        "Access to all sessions",
        "Conference materials",
        "Networking events",
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
        "Access to all sessions",
        "Conference materials",
        "Networking events",
        "Digital certificate",
        "Workshop access",
        "Exhibition hall access"
      ]
    },
    {
      title: "Non-Student Presenter",
      price: 175,
      earlyBird: 157.50,
      daily: 87.50,
      features: [
        "Access to all sessions",
        "Conference materials",
        "Networking events",
        "Presentation opportunity",
        "Paper publication",
        "Certificate of presentation"
      ]
    }
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

// Function to generate registration table HTML
function generateRegistrationCards() {
  return `
    <div class="registration-table-container">
      <table class="registration-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Regular Price</th>
            <th>Early Bird Price</th>
            <th>Daily Rate</th>
            <th>Features</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${registrationData.categories.map(category => {
            const regularPrice = category.price === 0 ? 'FREE' : `$${category.price}`;
            const earlyBirdPrice = category.earlyBird === 0 ? 'FREE' : `$${category.earlyBird}`;
            const dailyRate = category.daily === 0 ? 'FREE' : `$${category.daily}`;
            const specialNote = category.special ? `<div class="special-note">${category.special}</div>` : '';
            
            return `
              <tr class="${category.price === 0 ? 'free-category' : ''}">
                <td class="category-name">
                  <strong>${category.title}</strong>
                  ${specialNote}
                </td>
                <td class="price-cell">${regularPrice}</td>
                <td class="price-cell early-bird">${earlyBirdPrice}</td>
                <td class="price-cell">${dailyRate}</td>
                <td class="features-cell">
                  <ul>
                    ${category.features.map(feature => `<li>${feature}</li>`).join('')}
                  </ul>
                </td>
                <td class="action-cell">
                  <a href="#" class="register-btn">Register</a>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
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