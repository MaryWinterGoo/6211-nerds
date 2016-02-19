      var link = document.querySelector(".write");

      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      var form = popup.querySelector("form");
      var nameInput = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var letter = popup.querySelector("[name=text-letter]");

      var storage = localStorage.getItem("name");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");

        setTimeout(function() {
          if (storage) {
            nameInput.value = storage;
            email.focus();
          } else {
            nameInput.focus();
          }
        }, 600);

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-content-error");
      });

      form.addEventListener("submit", function(event) {
        if (!nameInput.value || !email.value || !letter.value) {
          event.preventDefault();
          popup.classList.remove("modal-content-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-content-error");
        } else {
          localStorage.setItem("name", nameInput.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-content-error");
          }
        }
      });
