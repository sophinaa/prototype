const navButtons = document.querySelectorAll("[data-screen-target]");
const screens = document.querySelectorAll(".screen");
const confirmActionButton = document.getElementById("confirm-action");
const confirmationCard = document.getElementById("confirmation-card");
const topBackButton = document.getElementById("top-back-button");

let currentScreenId = "dashboard";
const screenHistory = [];

function updateBackButton() {
  topBackButton.disabled = screenHistory.length === 0;
}

function showScreen(targetId, options = {}) {
  const { pushHistory = true } = options;

  if (pushHistory && targetId !== currentScreenId) {
    screenHistory.push(currentScreenId);
  }

  screens.forEach((screen) => {
    screen.classList.toggle("is-visible", screen.id === targetId);
  });

  navButtons.forEach((button) => {
    const isActive = button.dataset.screenTarget === targetId;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  currentScreenId = targetId;
  updateBackButton();

  const activeHeading = document.querySelector(`#${targetId} h2`);
  if (activeHeading) {
    activeHeading.setAttribute("tabindex", "-1");
    activeHeading.focus();
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});

topBackButton.addEventListener("click", () => {
  const previousScreen = screenHistory.pop();
  if (previousScreen) {
    showScreen(previousScreen, { pushHistory: false });
  }
});

confirmActionButton.addEventListener("click", () => {
  confirmationCard.innerHTML =
    "<p><strong>Action recorded:</strong> Remote network diagnostic started for ATM-12.</p><p>The alert is now marked as investigating. Review results in 2 minutes or escalate if packet loss remains high.</p>";
  confirmationCard.focus();
});

updateBackButton();
