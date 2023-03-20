import { LineChartComponent } from "../../components/graph";

import { dataHelio } from "../../components/dataDashBoard/dataHelio";
import { dataTemperature } from "../../components/dataDashBoard/dataTemperatura";
import { dataPressao } from "../../components/dataDashBoard/dataPressão";
import { dataColdHead } from "../../components/dataDashBoard/chtColdHead";
import { dataUmidade } from "../../components/dataDashBoard/dataUmidade";
import { dataAguaChiler } from "../../components/dataDashBoard/dataAguaChiler";

export function DashBoard() {
    return(
        <div className="pl-64 max-sm:pl-40">
            <h2 className="text-2xl font-roboto mt-10">Nome do Cliente</h2>
            <LineChartComponent title={'Temperatura da sala de Exames (°C)'} legend={'Temperatura(°C)'} data={dataTemperature}/>
            <LineChartComponent title={'Pressão (Bar)'} legend={'Pressão (Bar)'} data={dataPressao}/>
            <LineChartComponent title={'Helio (%)'} legend={'Helio (%)'} data={dataHelio}/>
            <LineChartComponent title={'Umidade sala técnica (%)'} legend={'Umidade (%)'} data={dataUmidade} />
            <LineChartComponent title={'Temperatura da água do chiller (°C)'} legend={'Temperatura(°C)'} data={dataAguaChiler}/>
            <LineChartComponent title={'CHT Cold Head (°K)'} legend={'Temperatura(°K)'} data={dataColdHead}/>
        </div>
    )
}