// popup-form.js

// Function to create and display the popup form
function displayPopupForm() {
  // Create a container for the popup
  const popupContainer = document.createElement('div');
  popupContainer.style.position = 'fixed';
  popupContainer.style.right = 0;
  popupContainer.style.bottom = 0;
  popupContainer.style.display = 'flex';
  popupContainer.style.justifyContent = 'center';
  popupContainer.style.alignItems = 'center';
  popupContainer.style.zIndex = 1000;
  popupContainer.className = 'popup-container';

  // Create an overlay to darken the background
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  // Create the popup form and add it to the container
  const formContainer = document.createElement('div');
  formContainer.style.backgroundColor = 'white';
  formContainer.style.padding = '20px';
  formContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  formContainer.style.borderRadius = '8px';
  formContainer.style.maxWidth = '400px';
  formContainer.style.width = '100%';


  formContainer.className = 'popup-form-container';
  formContainer.innerHTML = `
    <div style="  display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;" >

      <button  style="  background: none;
      border: none;
      cursor: pointer;" onclick="closePopupForm()">Close</button>
    </div>
    <iframe height="390px" src="https://popup-form-beta.vercel.app" frameborder="0"></iframe>
  `;

  // Append the overlay and form container to the document
  popupContainer.appendChild(overlay);
  popupContainer.appendChild(formContainer);

  // Append the popup container to the body
  document.body.appendChild(popupContainer);
}

// Function to close the popup form
function closePopupForm() {
  const popupContainer = document.querySelector('.popup-container');
  if (popupContainer) {
    document.body.removeChild(popupContainer);
  }
}
