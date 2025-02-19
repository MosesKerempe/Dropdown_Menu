document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('customDropdown');
    const dropdownSelected = document.getElementById('dropdownSelected');
    const dropdownOptions = document.getElementById('dropdownOptions');
    const options = dropdownOptions.querySelectorAll('.dropdown-option');
    const selectedText = document.getElementById('selectedText');
    const contentContainer = document.getElementById('contentContainer');
  
    // Map each item value to some friendly content
    const contentMap = {
      1: "You have selected the <strong>First Item</strong>. It's a lovely day, isn't it?",
      2: "You chose the <strong>Second Item</strong>. We hope you're enjoying this example!",
      3: "This is the <strong>Third Item</strong>. Life is beautiful, and so are you!",
      4: "You clicked on the <strong>Fourth Item</strong>. Great choice!",
      5: "Finally, the <strong>Fifth Item</strong> is selected. Enjoy your time here!"
    };
  
    // Toggle the dropdown open/closed when the selected area is clicked
    dropdownSelected.addEventListener('click', function() {
      dropdown.classList.toggle('open');
    });
  
    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
      // If the click is not inside the dropdown, close it
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
      }
    });
  
    // Handle option selection
    options.forEach(option => {
      option.addEventListener('click', function() {
        // Remove the 'selected' class from all options
        options.forEach(opt => opt.classList.remove('selected'));
  
        // Add the 'selected' class to the clicked option
        this.classList.add('selected');
  
        // Update the displayed text to the chosen option
        selectedText.textContent = this.textContent;
  
        // Get the 'data-value' attribute to find the correct content
        const itemValue = this.getAttribute('data-value');
  
        // Update the content container with the mapped content
        contentContainer.innerHTML = contentMap[itemValue] || "No content available.";
  
        // Close the dropdown
        dropdown.classList.remove('open');
      });
    });
  });
  