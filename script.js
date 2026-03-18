const signupForm = document.querySelector('form[name="signup"]');
const errorMsg = document.querySelector(".signup-card__form__title__errormsg");
const signupCard = document.getElementById("signup-card");
const successCard = document.getElementById("success");
const dismissBtn = document.getElementById("dismiss-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!signupForm) {
  console.error("Signup form not found");
} else {
  const emailInput = signupForm.querySelector('input[name="email"]');

  if (!emailInput) {
    console.error("Email input not found");
  } else {
    function showError(message) {
      emailInput.classList.add("error-color");

      if (errorMsg) {
        errorMsg.textContent = message;
        errorMsg.classList.add("show");
      }
    }

    function clearError() {
      emailInput.classList.remove("error-color");

      if (errorMsg) {
        errorMsg.textContent = "";
        errorMsg.classList.remove("show");
      }
    }

    function showSuccess() {
      signupCard?.classList.add("hide");
      successCard?.classList.remove("hide");
    }

    function showSignup() {
      signupCard?.classList.remove("hide");
      successCard?.classList.add("hide");
    }

    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();

      clearError();

      if (!emailRegex.test(email)) {
        showError("Valid email required");
        emailInput.focus();
        return;
      }

      showSuccess();
    });

    dismissBtn?.addEventListener("click", () => {
      showSignup();
      signupForm.reset();
      clearError();
      emailInput.focus();
    });
  }
}
