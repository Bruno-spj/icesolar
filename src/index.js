AOS.init();

document.getElementById('whatsapp-form').addEventListener('submit', function(event){
  event.preventDefault();

  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('telefone').value;
  const message = document.getElementById('msg-contact').value;

  const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
  
  const whatsappLink = `https://api.whatsapp.com/send/?phone=558196811663&text=${whatsappMessage}&type=phone_number&app_absent=0`

  window.open(whatsappLink, '_blank');
});

