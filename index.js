var selectedFunc = localStorage.getItem("selectedFunc");
if(selectedFunc === "VVN"){
    VVN();
}else {
    PPI();
}
function VVN(){
    localStorage.setItem("selectedFunc", "VVN");
    document.getElementById("table").hidden = true;
    document.getElementById("VVN").hidden = false;
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "FVC Đà Nẵng"
    document.getElementsByTagName("title")[0].innerHTML = "FVC Đà Nẵng"
}
function PPI(){
    localStorage.setItem("selectedFunc", "PPI");
    document.getElementById("table").hidden = false;
    document.getElementById("VVN").hidden = true;
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "Vũ Ngọc Trung"
    document.getElementsByTagName("title")[0].innerHTML = "Vũ Ngọc Trung"
}