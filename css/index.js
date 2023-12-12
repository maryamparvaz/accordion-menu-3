let _h2 = document.querySelectorAll('#acc h2')
        let _div = document.querySelectorAll('#acc li div')
        let q = document.querySelectorAll('#sec div')
        let _right = document.getElementById('right')
        let _center = document.getElementById('center')
        let _sec = document.getElementById('sec')
        let _acc = document.getElementById('acc')
        let j = document.getElementById('right').children
        _div.forEach(value => {
                let x = value.setAttribute('data-height', value.clientHeight)
                value.style.height = '0'
        })
        _h2.forEach((element, s) => {

                element.addEventListener('click', () => {
                        let z = element.getAttribute('data-status')
                        let u = element.nextElementSibling
                        for (let i = 0; i < _h2.length; i++) {

                                if (s == i) {
                                        u.style.height = u.getAttribute('data-height') + 'px'
                                        element.setAttribute('data-status', 'on')
                                        q.forEach(val => {

                                                // val.style.transform = 'translateY(-1200px)'
                                                val.style.opacity = '0'
                                                val.style.top = '-10px'
                                                val.style.transition = '.5s'
                                                let e = val.parentElement.parentElement.children[0].children
                                                e[0].style.top = '-100px'
                                                e[1].style.top = '-10px'
                                                e[2].style.top = '-10px'
                                                e[3].style.top = '-10px'
                                                e[0].style.opacity = '0'
                                                e[1].style.opacity = '0'
                                                e[2].style.opacity = '0'
                                                e[3].style.opacity = '0'

                                        })

                                        if (element.innerHTML == 'MARKETING') {

                                                document.getElementById('one').style.top = '10px'
                                                document.getElementById('one').style.opacity = '5'
                                                j[1].style.top = '50%'
                                                j[1].style.opacity = '5'
                                                _right.style.background = '#40948a'
                                                _sec.style.background = '#4bada2'
                                                _center.style.background = '#4bada2'
                                                _acc.style.background = '#3e7670'
                                                _acc.children[0].style.background = '#173632'


                                        } else if (element.innerHTML == 'CREATIVE') {
                                                document.getElementById('two').style.top = '10px'
                                                document.getElementById('two').style.opacity = '5'

                                                j[2].style.top = '50%'
                                                j[2].style.opacity = '5'
                                                _right.style.background = '#3380cc'
                                                _sec.style.background = '#40a0ff'
                                                _center.style.background = '#40a0ff'
                                                _acc.style.background = '#376fa6'
                                                _acc.children[0].style.background = '#14324f'
                                        } else if (element.innerHTML == 'BRANDING') {
                                                document.getElementById('three').style.opacity = '5'
                                                document.getElementById('three').style.top = '10px'
                                                j[3].style.top = '50%'
                                                j[3].style.opacity = '5'
                                                _right.style.background = '#233559'
                                                _sec.style.background = '#2d4473'
                                                _center.style.background = '#2d4473'
                                                _acc.style.background = '#2c3955'
                                                _acc.children[0].style.background = '#0e1524'
                                        }
                                } else {

                                        _h2[i].nextElementSibling.style.height = '0px'
                                        _h2[i].setAttribute('data-status', 'off')
                                }

                        }
                        if (z == 'off') {

                        } else if (z == 'on') {
                                u.style.height = '0px'
                                element.setAttribute('data-status', 'off')
                        }

                })

        });
