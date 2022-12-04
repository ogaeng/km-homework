var submitForm = function(){
  var myModal = new bootstrap.Modal(document.getElementById('submitModal'));
  myModal.show();
  document.getElementById('ticketingForm').style.display = 'none';
  document.getElementById('afterTicketing').style.display = 'block';
}

document.querySelector('#ticketingForm').addEventListener('submit', submitForm);
