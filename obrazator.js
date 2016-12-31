var losoweCzesciCiala = ["Face", "Leg", "Hand", "Butt"];
var losowePrzymiotniki = ["Stinky", "Dirty", "stupid", "ugly", "Terrible"];
var losoweSlowa = ["fly", "Warm", "Monkey", "Lizard", "Coffe", "Mud"]
var losowaCzescCiala = losoweCzesciCiala[Math.floor(Math.random() * 4)];
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 5)];
var losoweSlowo = losoweSlowa[Math.floor(Math.random() * 6)];
var zdanie = "Your " + losowaCzescCiala + " looks like " + losowyPrzymiotnik + " "  + losoweSlowo;
 napis(zdanie);
