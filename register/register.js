import { successTemplate, participantFormTemplate } from './templates.js';

let participantCount = 1;

const addParticipantButton = document.querySelector("#add");
addParticipantButton.addEventListener("click", addParticipantForm);

function addParticipantForm() {
  participantCount++;
  let template = participantFormTemplate(participantCount);

  addParticipantButton.insertAdjacentHTML("beforebegin", template);
}

const form = document.querySelector("form");
form.addEventListener("submit", addSubmitForm);

function addSubmitForm(event) {
  event.preventDefault();
  
  const totalFee = totalFees();
  const adultName = document.querySelector("#adult_name").value;

  const info = {
    name: adultName,
    participants: participantCount,
    feeTotal: totalFee
  };

  const message = successTemplate(info);

  document.querySelector("form").style.display = "none"; // Hide form after submission
  const outputContainer = document.querySelector("#summary");
  outputContainer.innerHTML = message;
  outputContainer.style.display = "block";
}

// Function to calculate the total fees
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];

  const total = feeElements.reduce((sum, element) => {
    const fee = parseFloat(element.value) || 0;
    return sum + fee;
  }, 0);

  return total;
}


//had help from chatGPT for setting up the importing of the template file 