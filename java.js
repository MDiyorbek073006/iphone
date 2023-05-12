let right_child_one = document.querySelector('.right-child-one')
let right_btn_one = document.querySelector('.right-btn-one')
let right_child_two = document.querySelector('.right-child-two')
let right_btn_two = document.querySelector('.right-btn-two')
let one_img_iph = document.querySelector('.one_img_iph')

let color_img_one = document.querySelector('.color_img_one')
let color_img_two = document.querySelector('.color_img_two')
let color_img_three = document.querySelector('.color_img_three')
let color_img_four = document.querySelector('.color_img_four')
let finish_text_color = document.querySelector('.finish_text_color')


let common_box_one = document.querySelector('.common_box_one')
let common_box_two = document.querySelector('.common_box_two')
let common_box_three = document.querySelector('.common_box_three')
let common_box_four = document.querySelector('.common_box_four')
let common_box_five = document.querySelector('.common_box_five')
let common_box_six = document.querySelector('.common_box_six')

common_box_one.onclick = () => {
    one_img_iph.src = './img/iphone 14 pro one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/iphone 14 pro three.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/iphone 14 pro one.jfif'
            }
    }
    common_box_one.classList.add('active_btns')
    common_box_two.classList.remove('active_btns')
    common_box_three.classList.remove('active_btns')
    common_box_four.classList.remove('active_btns')
    common_box_five.classList.remove('active_btns')
    common_box_six.classList.remove('active_btns')
}
common_box_two.onclick = () => {
    one_img_iph.src = './img/iphone 14 pro max one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/iphone 14 pro max two.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/iphone 14 pro max one.jfif'
            }
    }
    common_box_one.classList.remove('active_btns')
    common_box_two.classList.add('active_btns')
    common_box_three.classList.remove('active_btns')
    common_box_four.classList.remove('active_btns')
    common_box_five.classList.remove('active_btns')
    common_box_six.classList.remove('active_btns')
}
common_box_three.onclick = () => {
    common_box_one.classList.remove('active_btns')
    common_box_two.classList.remove('active_btns')
    common_box_three.classList.add('active_btns')
    common_box_four.classList.remove('active_btns')
    common_box_five.classList.remove('active_btns')
    common_box_six.classList.remove('active_btns')
}
common_box_four.onclick = () => {
    common_box_one.classList.remove('active_btns')
    common_box_two.classList.remove('active_btns')
    common_box_three.classList.remove('active_btns')
    common_box_four.classList.add('active_btns')
    common_box_five.classList.remove('active_btns')
    common_box_six.classList.remove('active_btns')
}
common_box_five.onclick = () => {
    common_box_one.classList.remove('active_btns')
    common_box_two.classList.remove('active_btns')
    common_box_three.classList.remove('active_btns')
    common_box_four.classList.remove('active_btns')
    common_box_five.classList.add('active_btns')
    common_box_six.classList.remove('active_btns')
}
common_box_six.onclick = () => {
    common_box_one.classList.remove('active_btns')
    common_box_two.classList.remove('active_btns')
    common_box_three.classList.remove('active_btns')
    common_box_four.classList.remove('active_btns')
    common_box_five.classList.remove('active_btns')
    common_box_six.classList.add('active_btns')
}



color_img_one.onclick = () => {
    finish_text_color.innerHTML = 'Color - Deep Purple'
    one_img_iph.src = './img/purple iphone one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/purple iphone two.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/purple iphone one.jfif'
            }
    }
}
color_img_two.onclick = () => {
    finish_text_color.innerHTML = 'Color - Gold'
    one_img_iph.src = './img/gold iphone one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/gold iphone two.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/gold iphone one.jfif'
            }
    }
}
color_img_three.onclick = () => {
    finish_text_color.innerHTML = 'Color - Silver'
    one_img_iph.src = './img/silver iphone one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/silver iphone two.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/silver iphone one.jfif'
            }
    }
}
color_img_four.onclick = () => {
    finish_text_color.innerHTML = 'Color - Space Black'
    one_img_iph.src = './img/black iphone one.jfif'
    one_img_iph.onmouseover = () => {
        one_img_iph.src = './img/black iphone two.jfif',

            one_img_iph.onmouseout = () => {
                one_img_iph.src = './img/black iphone one.jfif'
            }
    }
}




one_img_iph.onmouseover = () => {
    one_img_iph.src = './img/iphone two.jfif',

        one_img_iph.onmouseout = () => {
            one_img_iph.src = './img/iphone one.jfif'
        }
}
right_child_one.onmouseover = () => {
    right_btn_one.classList.add('active_btn')

    right_child_one.onmouseout = () => {
        right_btn_one.classList.remove('active_btn')
    }
}
right_child_two.onmouseover = () => {
    right_btn_two.classList.add('active_btn')

    right_child_two.onmouseout = () => {
        right_btn_two.classList.remove('active_btn')
    }
}