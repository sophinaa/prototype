const navButtons = document.querySelectorAll("[data-screen-target]");
const backButtons = document.querySelectorAll("[data-back-target]");
const screens = document.querySelectorAll(".screen");
const title = document.getElementById("screen-title");
const confirmActionButton = document.getElementById("confirm-action");
const confirmationCard = document.getElementById("confirmation-card");

const screenTitles = {
  dashboard: "Network overview",
  alerts: "Alert queue",
  "atm-detail": "ATM diagnostics",
  "action-center": "Response action center",
};

function showScreen(targetId) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-visible", screen.id === targetId);
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    const isActive = button.dataset.screenTarget === targetId;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  title.textContent = screenTitles[targetId];

  const activeScreenHeading = document.querySelector(
    `#${targetId} h3, #${targetId} h4`
  );

  if (activeScreenHeading) {
    activeScreenHeading.setAttribute("tabindex", "-1");
    activeScreenHeading.focus();
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.backTarget);
  });
});

confirmActionButton.addEventListener("click", () => {
  confirmationCard.innerHTML = `
    <p class="eyebrow">Action recorded</p>
    <h5>Remote network diagnostic started for ATM-12</h5>
    <p>The alert status changed to "investigating". Review the result in 2 minutes or escalate to the network team if packet loss remains high.</p>
  `;
  confirmationCard.focus();
});
