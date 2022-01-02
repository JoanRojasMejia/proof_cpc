$(".btn1").on("click", function () {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: 'Successful harvest'
  });
});
$(".btn2").on("click", function () {
  Swal.fire({
    title: 'Are you sure you want to remove?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Removing!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Canceled', '', 'info')
    }
  });
});
$(".btn3").on("click", function () {
  Swal.fire({
    title: 'Want to add a Big Pot?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Adding!',
        'Big Pot has been added.',
        'success'
      )
    }
  });
});
$(".btn4").on("click", function () {
  Swal.fire({
    title: 'Want to add a Small Pot?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Adding!',
        'Small Pot has been added.',
        'success'
      )
    }
  });
});
$(".btn5").on("click", function () {
  Swal.fire({
    title: 'Want to add a Water?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Adding!',
        'Water has been added.',
        'success'
      )
    }
  });
});
$(".btn6").on("click", function () {
  Swal.fire({
    title: 'Want to add a Green House?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Adding!',
        'Green House has been added.',
        'success'
      )
    }
  });
});
$(".btn7").on("click", function () {
  (async() => {
    const {
      value: plant
    } = await Swal.fire({
      title: 'Add plant to land',
      input: 'select',
      inputOptions: {
        'plant1': '1205482057',
        'plant2': '1054182029',
        'plant3': '1000284528',
        'plant4': '2031454823',
        'plant5': '1205482057',
        'plant6': '1727335087',
      },
      inputPlaceholder: 'Select Plant ID',
      showCancelButton: true,
    })
    if (plant) {
      Swal.fire('Adding!',
        'Successfully added plant',
        'success')
    }
  })()
});
$(".btn8").on("click", function () {
  Swal.fire({
    title: 'Would you like to make this purchase?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Purchased!',
        'Tool added to your inventory.',
        'success'
      )
    }
  });
});
$(".btn9").on("click", function () {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: 'Everything is harvested'
  });
});
$(".btn10").on("click", function () {
  (async() => {
    const {
      value: nick
    } = await Swal.fire({
      title: 'Write a Nickname',
      input: 'text',
      inputAttributes: {
        maxlength: 8,
      }
    })
    if (nick) {
      Swal.fire('Adding!',
        'Nickname sent successfully',
        'success')
    }
  })()
});
$(".btn11").on("click", function () {
  Swal.fire({
    title: '<strong>Know our support channels</strong>',
    html: '<ul><li><i class="fab fa-discord"></i> <a href="https://discord.gg/eZ5JjrpS8u"><b>Discord</b></a></li>' +
      '<li class="nose"><i class="fas fa-envelope"></i> <a href="mailto:support@cryptoplant.club"><b>E-mail</b></a></li>' +
      '<li><i class="fab fa-telegram-plane"></i> <a href="https://t.me/cryptoplantsclub"><b>Telegram</b></a></li></ul>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
  })
});
$(".btn121").on("click", function () {
  Swal.fire({
    title: '<i class="fas fa-leaf"></i> Coming Soon',
  })
});
$(".btn12").on("click", function () {
  Swal.fire({
    title: 'Would you like to make this purchase?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Purchased!',
        'Tool added to your inventory.',
        'success'
      )
    }
  });
});
$(".btn13").on("click", function () {
  let timerInterval
Swal.fire({
  title: 'Closing assignment!',
  html: 'Leaving the farm in <b></b> milliseconds.',
  timer: 2600,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
});
});
$(".btn14").on("click", function () {
  Swal.fire({
    title: 'Would you like to make this purchase?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Purchased!',
        'Tool added to your inventory.',
        'success'
      )
    }
  });
});
$(".btn15").on("click", function () {
  Swal.fire({
    title: 'Would you like to make this purchase?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Purchased!',
        'Tool added to your inventory.',
        'success'
      )
    }
  });
});
$(".btn16").on("click", function () {
  Swal.fire({
    title: '<strong>Details of the land</strong>',
    html: '<div mapdt class="sub-content"><div mapdt class="landst">' +
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/dragon.png);"></div><b>x2</b></a>' +
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/metal.png);"></div><b>x4</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/electro.png);"></div><b>x1</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/fire.png);"></div><b>x1</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/water.png);"></div><b>x3</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/parasite.png);"></div><b>x2</b></a></div>'+
      '<div mapdt class="landst">'+'<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/light.png);"></div><b>x2</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/wind.png);"></div><b>x2</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/dark.png);"></div><b>x2</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/ice.png);"></div><b>x2</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/fairy.png);"></div><b>x2</b></a>'+
      '<a mapdt class="itemdt listmp"><div mapdt class="icon" style="background-image: url(img/rarity/ghost.png);"></div><b>x2</b></a></div></div>',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: '<a href="farm.html" style="color: #ffffff;">Enter this Land</a>',
    focusConfirm: false,
  })
});