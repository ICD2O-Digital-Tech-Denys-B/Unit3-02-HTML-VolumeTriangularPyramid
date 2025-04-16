// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
    function calcVol() {
        let sideA = parseFloat(document.getElementById("side-a").value);
        let sideB = parseFloat(document.getElementById("side-b").value);
        let height = parseFloat(document.getElementById("height").value);
        let step1 = sideA * sideB * height
        let step2 = 1/6
        let volume = step1*step2
        document.getElementById("answer").innerHTML = "Answer:" + volume +" cm^3";
}