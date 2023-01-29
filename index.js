let filehandel;
let streakData = document.getElementById("streak");

let st = 0;

async function streakITry(){
    let fileData = await FileHandle.getFile('data.js');
    let st = Number(await fileData.text());
    st++;
    let stream = await filehandel.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}
function streakIn()
{
   //streakData.innerHTML = st +1;
}
