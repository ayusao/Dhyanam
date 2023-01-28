let filehandel;
let streakData = document.getElementById("streak");

async function streakIn(){
    let fileData = await FileHandle.getFile('data.js');
    let st = Number(await fileData.text());
    st++;
    let stream = await filehandel.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}