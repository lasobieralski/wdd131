export function successTemplate(info) {
    return `
      <div class="success-message">
        <h2>Registration Successful!</h2>
        <p>Thank you, ${info.name}, for registering ${info.participants} participant(s).</p>
        <p>Total Fee: $${info.feeTotal.toFixed(2)}</p>
      </div>
    `;
  }
  
  export function participantFormTemplate(participantCount) {
    return `
      <section class="participant${participantCount}">
        <p>Participant ${participantCount}</p>
        <div class="item">
          <label for="fname${participantCount}">First Name<span>*</span></label>
          <input id="fname${participantCount}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
          <label for="activity${participantCount}">Activity #<span>*</span></label>
          <input id="activity${participantCount}" type="text" name="activity" />
        </div>
        <div class="item">
          <label for="fee${participantCount}">Fee ($)<span>*</span></label>
          <input id="fee${participantCount}" type="number" name="fee" />
        </div>
        <div class="item">
          <label for="date${participantCount}">Desired Date <span>*</span></label>
          <input id="date${participantCount}" type="date" name="date" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${participantCount}">
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }

  //had help from chatGPT for setting up the template file 