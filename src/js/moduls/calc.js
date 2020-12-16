
let calc = () => {
    let calc__result = document.querySelector(".calc__result h3");
    let calc__checkbox = document.querySelectorAll(".calc__custom .calc__checkbox");
    let countResult = 0;
    let calc__item_chek = document.querySelectorAll(".calc__item .calc__ceck .calc__checkbox");

    let calc__wrapper__range = document.querySelectorAll(".calc__wrapper .calc__range");
    let calc__number = document.querySelectorAll(".calc__number");
    let calc__ceck_range = document.querySelectorAll(".calc__ceck_range .calc__checkbox");

    let calc__modification__range = document.querySelector(".calc__modification .calc__mod .calc__range");
    let calc__number_bold = document.querySelector(".calc__number_bold");
    let calc__information_range = document.querySelectorAll(".calc__information .calc__range");
    let calc__information_check = document.querySelectorAll(".calc__information .calc__checkbox");
    let calc__numbers = document.querySelectorAll(".calc__numbers span");
    let calc__list_btn = document.querySelector(".calc__list img");
    let calc__result_box = document.querySelector(".calc__result")
    let calc__estimate = document.querySelector(".calc__estimate");
    let calc__radiobox = document.querySelectorAll(".calc__radiobox");

    let calc__item_range = document.querySelectorAll(".calc__item_range .calc__range");
    let calc__item_check = document.querySelectorAll(".calc__item_range .calc__checkbox");
    let calc__item_number = document.querySelectorAll(".calc__item_range .calc__numbers");

    let calc__сustomization_ceck = document.querySelectorAll(".calc__сustomization .calc__wrap .calc__checkbox");
    let calc__name = document.querySelector(".calc__estimate");

    let prevstate = calc__estimate.clientHeight;

    var countStart = 0;
    calc__сustomization_ceck.forEach(item => {
        if(item.hasAttribute("disabled")){
            countStart += +Number(item.value);
            let name = item.dataset.name;
            let newEl = document.createElement("div");
            newEl.classList.add("calc__estimate_info")
            newEl.innerHTML = `
            <p>${name}</p>
            <span>${item.value} тг</span>`;

            calc__name.appendChild(newEl);
        }
        item.addEventListener("click", () => {
            if(document.documentElement.clientWidth <= 991) {
                return
            }
            else{
                if(item.checked == true) {
                    let name = item.dataset.name;
                    let newEl = document.createElement("div");
                    let id = item.getAttribute("id");
                    newEl.classList.add("calc__estimate_info");
                    newEl.setAttribute(`data-id`, `${id}`);
                    newEl.innerHTML = `
                    <p>${name}</p>
                    <span>${item.value} тг</span>`;
        
                    calc__name.appendChild(newEl);
                    calc__estimate.style.height = `${calc__estimate.clientHeight + 22}px`
                    calc__result_box.style.height = `${calc__result_box.clientHeight + 22}px`
                    prevstate = prevstate + 22;
                }
                else {
                    let calc__estimate_info = document.querySelectorAll(".calc__estimate_info");
                    let id = item.getAttribute("id")
                    calc__estimate_info.forEach(count => {
                        let dataId = count.dataset.id;
                        if(dataId == id) {
                            count.parentNode.removeChild(count);
                            calc__estimate.style.height = `${calc__estimate.clientHeight - 22}px`
                            calc__result_box.style.height = `${calc__result_box.clientHeight - 22}px`;
                            prevstate = prevstate - 22;
                        }
                    })
                }
            }
        })
    })

    countResult = countResult + countStart;
    calc__result.innerHTML = `${countResult} тг`;

    calc__checkbox.forEach(item => {
        item.addEventListener("click", () => {
            if(item.checked == true) {
                countResult = countResult + Number(item.value);
                calc__result.innerHTML = `${countResult} тг`;
            }
            else {
                if(countResult > 0) {
                    countResult = countResult - Number(item.value);
                    calc__result.innerHTML = `${countResult} тг`;
                }
                else {
                    return;
                }
            }
        })
    });

    calc__item_chek.forEach(item => {
        item.addEventListener("click", () => {
            if(item.checked == true) {
                countResult = countResult + Number(item.value);
                calc__result.innerHTML = `${countResult} тг`;
            }
            else {
                if(countResult > 0) {
                    countResult = countResult - Number(item.value);
                    calc__result.innerHTML = `${countResult} тг`;
                }
                else {
                    return;
                }
            }

            if(item.dataset.names){
                if(document.documentElement.clientWidth <= 991) {
                    return
                }
                else{
                    if(item.checked == true) {
                        let name = item.dataset.names;
                        let newEl = document.createElement("div");
                        let id = item.getAttribute("id");
                        newEl.classList.add("calc__estimate_info");
                        newEl.setAttribute(`data-id`, `${id}`);
                        newEl.innerHTML = `
                        <p>${name}</p>
                        <span>${item.value} тг</span>`;
            
                        calc__name.appendChild(newEl);
                        calc__estimate.style.height = `${calc__estimate.clientHeight + 22}px`
                        calc__result_box.style.height = `${calc__result_box.clientHeight + 22}px`
                        prevstate = prevstate + 22;
                    }
                    else {
                        let calc__estimate_info = document.querySelectorAll(".calc__estimate_info");
                        let id = item.getAttribute("id")
                        calc__estimate_info.forEach(count => {
                            let dataId = count.dataset.id;
                            if(dataId == id) {
                                count.parentNode.removeChild(count);
                                calc__estimate.style.height = `${calc__estimate.clientHeight - 22}px`
                                calc__result_box.style.height = `${calc__result_box.clientHeight - 22}px`;
                                prevstate = prevstate - 22;
                            }
                        })
                    }
                }
            }
        })

    });
    calc__item_range.forEach((item, ind1) => {
        calc__item_number.forEach((count, ind2) => {
            item.addEventListener("input", () => {
                if(ind1 == ind2) {
                    count.innerHTML = Number(item.value);
                }
            })
        });
        calc__item_check.forEach((count, ind2) => {
            count.addEventListener("click", () => {
                if(ind1 == ind2 && count.checked) {
                    item.classList.remove("calc__range_active");
                    item.removeAttribute("disabled")
                }
                else if(ind1 == ind2 && count.checked == false) {
                    item.classList.add("calc__range_active");
                    item.setAttribute("disabled", "disabled")
                }
            })
        })
    });

    calc__wrapper__range.forEach((item, ind1) => {
        calc__number.forEach((count, ind2) => {
            item.addEventListener("input", () => {
                if(ind1 == ind2) {
                    count.innerHTML = Number(item.value);
                }
            })
        });
        calc__ceck_range.forEach((count, ind2) => {
            count.addEventListener("click", () => {
                console.log(ind1, ind2)
                if(ind1 == ind2 && count.checked) {
                    item.classList.remove("calc__range_active");
                    item.removeAttribute("disabled")
                }
                else if(ind1 == ind2 && count.checked == false) {
                    item.classList.add("calc__range_active");
                    item.setAttribute("disabled", "disabled")
                }
            })
        })
    });
    
    calc__information_range.forEach((item, ind1) => {
        calc__numbers.forEach((count, ind2) => {
            item.addEventListener("input", () => {
                if(ind1 == ind2) {
                    count.innerHTML = Number(item.value);
                }
            })
        });

        calc__information_check.forEach((count, ind2) => {
            count.addEventListener("click", () => {
                if(ind1 == ind2 && count.checked) {
                    item.classList.remove("calc__range_active");
                    item.removeAttribute("disabled")
                }
                else if(ind1 == ind2 && count.checked == false) {
                    item.classList.add("calc__range_active");
                    item.setAttribute("disabled", "disabled")
                }
            })
        })
    });



    let valueOld = 0
    calc__modification__range.addEventListener("mousedown", () => {
        valueOld = Number(calc__modification__range.value)
    })

    calc__modification__range.addEventListener("input", (e) => {
        calc__number_bold.innerHTML = Number(calc__modification__range.value);
        let valueNew = Number(calc__modification__range.value);
        console.log(calc__modification__range.value)
        let countValue = calc__modification__range.dataset.value * calc__modification__range.value
        console.log(countValue)

        if(valueNew > valueOld) {
            countResult = countValue;
            calc__result.innerHTML = `${countResult} тг`;
        }
        else if(valueNew < valueOld) {
            if(countResult > 0) {
                countResult = countValue;
                calc__result.innerHTML = `${countResult} тг`;
            }
            else {
                return;
            }
        }
    });

  
    calc__list_btn.addEventListener("click", () => {
        calc__list_btn.classList.toggle("active__btn");
        if(calc__estimate.clientHeight > 0) {
            calc__estimate.style.height = `${calc__estimate.clientHeight - calc__estimate.clientHeight}px`
            calc__result_box.style.height = `${calc__result_box.clientHeight - calc__estimate.clientHeight}px`
        }
        else if (calc__estimate.clientHeight == 0) {
            calc__estimate.style.height = `${prevstate}px`
            calc__result_box.style.height = `${calc__result_box.clientHeight + prevstate}px`
        }
    })

    countResult = countResult + Number(calc__radiobox[1].value);
    calc__result.innerHTML = `${countResult} тг`;
    calc__radiobox[0].addEventListener("click", () => {
        calc__radiobox[0].setAttribute("checked", "checked");
        calc__radiobox[1].removeAttribute("checked");
        countResult = countResult + Number(calc__radiobox[0].value);
        countResult = countResult - Number(calc__radiobox[1].value);
        calc__result.innerHTML = `${countResult} тг`;
    })
    calc__radiobox[1].addEventListener("click", () => {
        calc__radiobox[1].setAttribute("checked", "checked");
        calc__radiobox[0].removeAttribute("checked");
        countResult = countResult + Number(calc__radiobox[1].value);
        countResult = countResult - Number(calc__radiobox[0].value);
        calc__result.innerHTML = `${countResult} тг`;
    })
}

export default calc;
