let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container =  document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstposition = 0
let lastposition  = items.length - 1

nextbutton.onclick = ()  => {

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    active = active + 1 > lastposition ? 0 : active + 1
    items[active].classList.add('active')

    let doltsOld = indicator.querySelector('ul li.active' )
    doltsOld.classList.remove('active')
    dots [active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

}

prevbutton.onclick = ()  => {
    let itemOld = container.querySelector('list,item,active')
    itemOld.classList.remove('active')

    active = active - 1 < firstposition ? lastposition : active - 1
    items[active].classList.add('active')
}