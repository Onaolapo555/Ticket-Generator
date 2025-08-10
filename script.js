
const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");
const buttonGroup = document.getElementById("buttonGroup");


fileInput.addEventListener("change", function() {
  const file = this.files[0];
  
  if (file && file.size <= 500 * 1024) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result;
      buttonGroup.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    document.getElementById('info').textContent = "Please upload a JPG or PNG image under 500KB";
    document.getElementById('info').style.color = 'red';
    fileInput.value = "";
  }
});
function removeImage() {
  previewImage.src = "/confrence/images/icon-upload.svg";
  fileInput.value = "";
  buttonGroup.style.display = "none";
}

function changeImage() {
  fileInput.click();
}


const btnGenerate = document.querySelector('.generate');

btnGenerate.addEventListener('click', function generateTicket() {
  const image = document.getElementById('fileInput').files[0];
  
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email-add').value;
  const gitmail = document.getElementById('git-username').value;
  
  
  localStorage.setItem('email', email);
  localStorage.setItem('fullName', fullName);
  localStorage.setItem('gitmail', gitmail);
  
  
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem('fileInput', reader.result);
    window.location.href = 'generate.html';
  };
  reader.readAsDataURL(image);
  
});



