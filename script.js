let aText = new Array(
    "I code for a living"
);
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines
 
let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

function wait(res, sec) {
    return new Promise(resolve => {
        setTimeout(res, sec)
    })
}
 
async function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    let destination = document.getElementById("typing");

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<b id=\"caret\">_</b>";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            await wait("typewriter()", 500);
        }
    } else {
        await wait("typewriter()", iSpeed);
    }
    let element = document.getElementById("caret");
    element.classList.add("blink");    
}

typewriter()










