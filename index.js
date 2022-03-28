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
}
function PPI(){
    localStorage.setItem("selectedFunc", "PPI");
    document.getElementById("table").hidden = false;
    document.getElementById("VVN").hidden = true;
}