
    var Const_ppi = 100;
    var Const_inch = 34;
    var table = document.getElementById("table");
    for (let inch = 27; inch <= 38; inch++) {


        var row = document.createElement("tr");
        var tdInch = document.createElement("td");
        tdInch.innerHTML = inch + " inch";
        row.append(tdInch);


        tdSize = document.createElement("td");
        var ppiCal = PPICal({ inch: inch, ratio: "3:2", ppi: 100 });
        tdSize.innerHTML = ppiCal.width + " x " + ppiCal.height;
        row.append(tdSize);

        tdSize = document.createElement("td");
        var ppiCal = PPICal({ inch: inch, ratio: "16:9", ppi: 100 });
        tdSize.innerHTML = ppiCal.width + " x " + ppiCal.height;
        row.append(tdSize);

        tdSize = document.createElement("td");
        var ppiCal = PPICal({ inch: inch, ratio: "21:9", ppi: 100 });
        tdSize.innerHTML = ppiCal.width + " x " + ppiCal.height;
        row.append(tdSize);


        table.append(row);
    }
    document.getElementsByTagName("body")[0].append(table);
    var ratio = document.getElementById("ratio");
    var width = document.getElementById("width");
    var height = document.getElementById("height");
    var ppi = document.getElementById("ppi");
    var inch = document.getElementById("inch");
    ppi.value = Const_ppi;
    inch.value = Const_inch;

    var inputList = document.querySelectorAll("input");
    for (var i = 0; i < inputList.length; i++) {
        inputList[i].onkeyup = function (e) {
            if (e.keyCode >= 48 && e.keyCode <= 57) {
                if (this.id === "inch") {
                    document.getElementById("ppi").value = "";
                }
                if (this.id === "inch" && width.value !== "" && height.value !== "") {
                    document.getElementById("ppi").value = "";
                    // console.log("clear ppi by inch");
                }
                if (this.id === "ppi" && width.value !== "" && height.value !== "") {
                    document.getElementById("inch").value = "";
                    // console.log("clear inch by ppi");
                }
                if (width.value !== "" && height.value !== "") {
                    document.getElementById("ratio").value = "";
                    console.log("clear ratio by width and height");
                    var uc = ucln(width.value, height.value);
                    document.getElementById("ratioText").innerHTML = (width.value / uc) + ":" + (height.value / uc);
                }
            }
        }
    }
    document.getElementById("ratio").onchange = function () {
        var [ratioX, ratioY] = ratio.value.split(":");
        if (width.value === "" && height.value !== "") {
            width.value = Math.round(height.value * (ratioX / ratioY));
        } else if (height.value === "" && width.value !== "") {
            height.value = Math.round(width.value * (ratioY / ratioX));
        }
        document.getElementById("ratioText").innerHTML = "";
    }
    document.getElementById("form").onsubmit = function submit(e) {
        e.preventDefault();
        var result = PPICal({ inch: inch.value, width: width.value, height: height.value, ppi: ppi.value, ratio: ratio.value });
        ratio.value = result.ratio;
        width.value = result.width;
        height.value = result.height;
        ppi.value = result.ppi;
        inch.value = result.inch;
    }
    function ucln(a, b) {
        if (a % b === 0) {
            return b
        }
        return ucln(b, a % b)
    }

    function PPICal(input) {
        var [ratioX, ratioY] = input.ratio.split(":");
        input.ratioX = ratioX;
        input.ratioY = ratioY;
        if (input.inch !== "" && input.ratio !== "" && input.ppi !== "") {
            // console.log("inch, ratio, ppi");
            const ratioRate = (ratioY * input.ratioY) / (input.ratioY * input.ratioY + input.ratioX * input.ratioX);
            input.height = Math.round(Math.sqrt(input.inch * input.inch * (ratioRate)) * input.ppi);
            input.width = Math.round(input.height * (input.ratioX / input.ratioY));
        }
        if (input.width !== "" && input.height === "" && input.ratio !== "" && input.ppi !== "") {
            // console.log("width, ratio, ppi");
            input.height = Math.round(input.width * (input.ratioY / input.ratioX));
            input.inch = Math.round(Math.sqrt(input.width * input.width + input.height * input.height) / input.ppi * 10) / 10;
        }
        if (input.height !== "" && input.width === "" && input.ratio !== "" && input.ppi !== "") {
            // console.log("height, ratio, ppi");
            input.width = Math.round(input.height * (input.ratioX / input.ratioY));
            input.inch = Math.round(Math.sqrt(input.width * input.width + input.height * input.height) / input.ppi * 10) / 10;
        }
        if (input.width !== "" && input.height !== "" && input.ppi !== "") {
            // console.log("width, height, ppi");
            input.inch = Math.round(Math.sqrt(input.width * input.width + input.height * input.height) / input.ppi * 10) / 10;
        }
        if (input.width !== "" && input.height !== "" && input.inch !== "") {
            // console.log("width, height, inch");
            input.ppi = Math.round(Math.sqrt(input.width * input.width + input.height * input.height) / input.inch);
        }
        if (input.width !== "" && input.height !== "") {
        }
        return input;
    }