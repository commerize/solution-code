    // User-Agent String
  function detectDevice() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i)) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }
 
 
  if (detectDevice() === 'mobile') {
    // Obtenemos el elemento por su ID
    var imageWrapper = document.getElementById("sticky-form_image-wrapper");
    var title = document.getElementById("sticky-form_title");
    var price = document.getElementById("sticky-form_price");
    var comboBox = document.getElementById("sticky-form_button");
    var btnAddCart = document.getElementById("StickyAddToCart");
    var cpyBtnAddCart = document.getElementById("StickyAddToCart1");
    var mainContain = document.getElementById("main-container-sticky"); 
    var sec = document.getElementById('seccion1').offsetTop +312 ;
    var comboBox1 = document.getElementById('{{ option_id }}-combo-box');
   
    if (imageWrapper) {      
      imageWrapper.style.setProperty("display", "none", "important");
    }
    if (title) {      
      title.style.setProperty("display", "none", "important");
    }
    if (price) {      
      price.style.setProperty("display", "none", "important");
    }
    if (comboBox) {      
      comboBox.style.setProperty("display", "none", "important");
    }
    if (btnAddCart) {      
      btnAddCart.style.setProperty("display", "none", "important");                    
    }    
    if (mainContain) {      
      mainContain.style.setProperty("display", "block", "important");          
    }
    if (cpyBtnAddCart) {      
      cpyBtnAddCart.style.setProperty("display", "block", "important");    
      cpyBtnAddCart.classList.remove('hidden');
      cpyBtnAddCart.classList.add('product-form__add-button', 'button', 'button--primary', 'button--ternary');          
    }
  
    
    console.log('Estás en un dispositivo móvil');
  } else {
    console.log('Estás en una computadora');
  }
  
  cpyBtnAddCart.addEventListener("click", function() {    
    window.scrollTo({
    top: sec,
    behavior: 'smooth' // Esto hace que el desplazamiento sea suave
        });

    });
  
    comboBox1.addEventListener('change', function(event) {
        // Obtiene el elemento seleccionado
        var selectedOption = event.target.value;        
        // Muestra el elemento seleccionado en la consola
        console.log('Elemento seleccionado:', selectedOption);
        cpyBtnAddCart.style.setProperty("display", "none", "important");
        btnAddCart.style.setProperty("display", "block", "important"); 
    });

  
