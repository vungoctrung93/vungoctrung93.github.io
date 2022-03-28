function VVNGenarate(){
    const canBanDam = ["thẳng", "lao", "móc", "múc", "thấp", "bật", "phạt ngang"];
    const canBanDa = ["thẳng", "cạnh", "tạt", "đạp"];
    var result = "";
    var chienLuoc = [1,2,3,4,5,6,7,8,9,10];
    var result = "";
    //Đấm
    var random = Math.floor(Math.random() * 7);
    result += "Đấm " + canBanDam[random];

    random = Math.floor(Math.random() * 4) + 1;
    result += "<br/>Gạt số " + random;

    random = Math.floor(Math.random() * 4) + 1;
    result += "<br/>Chỏ số " + random;

    random = Math.floor(Math.random() * 4) + 1;
    result += "<br/>Chém số " + random;

    random = Math.floor(Math.random() * 4);
    result += "<br/>Đá " + canBanDa[random];

    // Chiến lược
    var chienLuoc_3 = [];
    random = Math.floor(Math.random() * 10);
    chienLuoc_3[0] = chienLuoc[random];
    chienLuoc.splice(random, 1);
    random = Math.floor(Math.random() * 9);
    chienLuoc_3[1] = chienLuoc[random];
    chienLuoc.splice(random, 1);
    random = Math.floor(Math.random() * 8);
    chienLuoc_3[2] = chienLuoc[random];
    chienLuoc.splice(random, 1);

    chienLuoc_3.sort((a,b) => a >= b);
    
    result += ".<br/><br/>Chiến lược số " + chienLuoc_3[0];
    result += ", " + chienLuoc_3[1];
    result += ", " + chienLuoc_3[2];

    result += ".<br/><br/>Nhập môn quyền.";


    document.getElementById("result").innerHTML = result;
}
VVNGenarate();