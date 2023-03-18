import { Popover } from "@headlessui/react";
import { useState } from "react"
import { CabecalhoHome } from "../../componentes/cabecalhoHome";

interface FiliadoProps {
    id: string;
    imageURL: string;
    nome: string;
    cnpj: string;
    descricao: string;
    contato: string;
    geoPosicao: number[];

}

export function Parceiros() {
    const [filiados, setFiliados] = useState();

    return (
        <>
        <CabecalhoHome />
        <Popover>
                <Popover.Button>
                    <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png" alt="ONU" />
                    <h3>the United Nations</h3>
                </Popover.Button>
                <Popover.Panel className=" w-96">
                <div>
                    <span>CNPJ</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quaerat possimus minus dolore harum ipsa atque delectus veniam ducimus totam rem inventore! Recusandae suscipit eveniet libero iste quas id ab?</p>
                    <a href="https://wa.me/+000000000"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3ea829" viewBox="0 0 256 256"><path d="M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"></path></svg></a>
                    <a href="https://www.google.com/maps/@-8.883367,-36.498496,17z"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#293ea8" viewBox="0 0 256 256"><path d="M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z"></path></svg></a>
                </div>
                </Popover.Panel>
        </Popover>
        <Popover>
                <Popover.Button>
                    <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png" alt="ONU" />
                    <h3>the United Nations</h3>
                </Popover.Button>
                <Popover.Panel className=" w-96">
                <div>
                    <span>CNPJ</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quaerat possimus minus dolore harum ipsa atque delectus veniam ducimus totam rem inventore! Recusandae suscipit eveniet libero iste quas id ab?</p>
                    <a href="https://wa.me/+000000000"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3ea829" viewBox="0 0 256 256"><path d="M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"></path></svg></a>
                    <a href="https://www.google.com/maps/@-8.883367,-36.498496,17z"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#293ea8" viewBox="0 0 256 256"><path d="M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z"></path></svg></a>
                </div>
                </Popover.Panel>
        </Popover>
        <Popover>
                <Popover.Button>
                    <img className="w-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png" alt="ONU" />
                    <h3>the United Nations</h3>
                </Popover.Button>
                <Popover.Panel className=" w-96">
                <div>
                    <span>CNPJ</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quaerat possimus minus dolore harum ipsa atque delectus veniam ducimus totam rem inventore! Recusandae suscipit eveniet libero iste quas id ab?</p>
                    <a href="https://wa.me/+000000000"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3ea829" viewBox="0 0 256 256"><path d="M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"></path></svg></a>
                    <a href="https://www.google.com/maps/@-8.883367,-36.498496,17z"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#293ea8" viewBox="0 0 256 256"><path d="M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z"></path></svg></a>
                </div>
                </Popover.Panel>
        </Popover>
        </>
    )
}