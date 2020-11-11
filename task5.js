function areatri(side1,side2,side3)
{
    var a = Number.parseFloat(side1);
    var b = Number.parseFloat(side2);
    var c = Number.parseFloat(side3);
    //Semiperimeter
    var s = ((a + b + c) * 0.5);
    //Heron's Formula
    var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return area.toPrecision(3);
}
