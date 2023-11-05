
function sleep() {
    const time = Date.now()
    while (Date.now() - time < 3000) {

    }

    console.log('3秒结束了')
}

function test() {
    const dom = document.querySelectorAll('p')
    console.log(dom.length);
    // sleep()
}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         test()
//     })
// })

// setTimeout(() => {
//     test()
// })

// sleep()
test()