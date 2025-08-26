async function getData(){
    const url = "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/refs/heads/main/data/power-outages.latest.json";

        let result = await fetch(url)
        let json = await result.json()
        return json;

}

function extractFuture(obj){
    return obj["future"];
}

function addToDom(item){
    const output = document.getElementById("output");
    let myName = "else";

    const tpl = `<h2 class="text-center font-bold text-3xl py-10">today</h2>
    <div class="row flex flex-row justify-between bg-gradient-to-t from-indigo-300 to-indigo-200 font-[500] text-violet-500 p-5 rounded-lg shadow-lg mb-5">
            <div class="row-details flex flex-col ">
                <div class="time text-sm">${item.date}</div>
                <h3 class="text-2xl font-bold mb-3 mt-3">${item.locality}</h3>

        
                <div class="streets text-xs mb-3 normal-case">les abonnes de ${item.streets}</div>

                <div class="resume">
                    <p class="text-stone-500 uppercase underline text-sm">
                        power will resume...
                    </p>
                </div>
            </div>

            <div class="row-timing border-2 rounded-sm p-1 bg-purple-200 flex justify-around gap-[5px]">
                <div class="time">08.30</div>
                <div class="time">10.30</div>
            </div>

        </div>`;

    output.innerHTML += tpl;
}

function clearOuput(){
    const output = document.getElementById("output");
    output.innerHTML = "";
}

function renderOutput(item){
    for (let index=0; index < future.length; index++){
        const outage = future[index];
        addToDom(outage);
    }
}

async function initialize(){
    const result = await getData();
    const future = extractFuture(result);

    clearOuput();


}

document.addEventListener("DOMContentLoaded", initialize);

getData();

