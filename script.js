var bevitt = "";
var id= 0;
var szam = 16;
var rnd = Math.floor(Math.random() * 100) + 1;
var pluszrnd = Math.floor(Math.random() * 10) + 1;
var minuszrnd = Math.floor(Math.random() * 10) + 1;

window.onload = function()
{
    document.getElementById("generatedNumber").innerText = (rnd-minuszrnd) + " < X < " + (rnd+pluszrnd);
}

function elso()
{
    bevitt += '1';
    document.getElementById("inputNumber").innerText = bevitt;
}

function masodik()
{
    bevitt += '2';
    document.getElementById("inputNumber").innerText = bevitt;
}

function harmadik()
{
    bevitt += '3';
    document.getElementById("inputNumber").innerText = bevitt;
}

function negyedik()
{
    bevitt += '4';
    document.getElementById("inputNumber").innerText = bevitt;
}

function otodik()
{
    bevitt += '5';
    document.getElementById("inputNumber").innerText = bevitt;
}

function hatodik()
{
    bevitt += '6';
    document.getElementById("inputNumber").innerText = bevitt;
}

function hetedik()
{
    bevitt += '7';
    document.getElementById("inputNumber").innerText = bevitt;
}

function nyolcadik()
{
    bevitt += '8';
    document.getElementById("inputNumber").innerText = bevitt;
}

function kilencedik()
{
    bevitt += '9';
    document.getElementById("inputNumber").innerText = bevitt;
}

function nulladik()
{
    bevitt += '0';
    document.getElementById("inputNumber").innerText = bevitt;
}

function check()
{
    if(bevitt == rnd)
        {
            clearInterval(id);
            alert("A bomba sikeresen hatástalanítva.");
            location.reload(true);
        }
    else if(bevitt != rnd)
    {
        alert("Hibás kód, próbálja újra!");
        torol();
    }
}

function torol()
{
    document.getElementById("inputNumber").innerText = "";
    bevitt = "";
}

function counter()
{
    id = setInterval(function()
    {
    if(szam < 5)
    {
        document.getElementById("timer").setAttribute("style", "color: red");
        document.getElementById("timer").innerText = --szam;
    }
    else
    {
        document.getElementById("timer").innerText = --szam;
    }
    if (szam == -1)
      {
        clearInterval(id);
        document.getElementById("timer").innerText = 0;
        alert("BUMM!")
        location.reload(true);
      }
    },1000)
}

counter();