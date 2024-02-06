//alert("Hello World");
//confirm("You Shall Not Pass!");

for (let i = 0; i < 360; i++) {

}
var x = 1;
    while (x < 360)
    {
        rotateElement();
        x + 1;
    }

  function rotateElement() {
    document.getElementById('bigPixel').style.transform = 'rotate(5deg)'; ;
  }
