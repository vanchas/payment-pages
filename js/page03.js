
const cards = [
  { title: 'КУРС ПОДГОТОВКИ ДЛЯ НАЧИНАЮЩИХ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
  { title: 'ПРОДВИНУТЫЙ КУРС ДЛЯ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
  { title: 'РАССЫЛКА ОТ САЙМОНА БРАГИНСКОГО', link: '' },
  { title: 'РАССЫЛКА ОТ САЙМОНА БРАГИНСКОГО', link: '' },
  { title: 'ПРОДВИНУТЫЙ КУРС ДЛЯ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
  { title: 'КУРС ПОДГОТОВКИ ДЛЯ НАЧИНАЮЩИХ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
  { title: 'ПРОДВИНУТЫЙ КУРС ДЛЯ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
  { title: 'РАССЫЛКА ОТ САЙМОНА БРАГИНСКОГО', link: '' },
  { title: 'КУРС ПОДГОТОВКИ ДЛЯ НАЧИНАЮЩИХ ТРЕЙДЕРОВ И ИНВЕСТОРОВ', link: '' },
]

let indexes = [0, 1, 2]

function renderCards() {
  $('.cards-list').html('')
  indexes.forEach(index => {
    return $('.cards-list').append(`
    <div class="card">
      <div class="card-body py-4">
        ${cards[index].title}
      </div>
      <div class="card-footer">
        <button class="btn">Подробнее<span>&#x2192;</span></button>
      </div>
    </div>
  `)
  })
}
renderCards()

function animation(x) {
  if (x === '-') {
    $('.cards-list').animate({
      width: '100vw',
      marginLeft: '-100vw'
    }, 700, function () {
      $('.cards-list').css({
        'margin-left': '0',
        'width': '100%'
      })
    })
  } else {
    $('.cards-list').animate({
      width: '100%',
      marginLeft: '100vw'
    }, 700, function () {
      $('.cards-list').css({
        'margin-left': '0',
        'width': '100%'
      })
    })
  }
}

function arrowHandler(x) {
  animation(x)
  // $('.cards-list').fadeOut(500, () => {
  // $('.cards-list').fadeIn()
  // })
  setTimeout(() => {
    if (x === '-') {
      if (indexes[0] === 0) {
        indexes = [6, 7, 8]
      } else {
        indexes = indexes.map(ind => ind - 3)
      }
    } else if (x === '+') {
      if (indexes[2] === 8) {
        indexes = [0, 1, 2]
      } else {
        indexes = indexes.map(ind => ind + 3)
      }
    }
    renderCards()
    listControlIndication()
  }, 700);
}

function listControlIndication() {
  $('.indicator').removeClass('indicator-inner')
  if (indexes[2] === 2) {
    $('.indicator-1').addClass('indicator-inner')
  } else if (indexes[2] === 5) {
    $('.indicator-2').addClass('indicator-inner')
  } else if (indexes[2] === 8) {
    $('.indicator-3').addClass('indicator-inner')
  }
}
listControlIndication()
