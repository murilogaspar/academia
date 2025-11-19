"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import TipoABraco from "./form/navform/tipoabraco/page";
import TipoBPerna from "./form/navform/tipobperna/page";

export default function FormPrincipal() {

  const [tela, setTela] = useState<"default" | "abracoA" | "pernaB">("default");

  return (

    <div className="w-full flex flex-col gap-6 p-6">
      <div className="w-full flex flex-col gap-4 p-4">

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* CARD ESQUERDO */}
        <div className="bg-white rounded-xl shadow p-4 flex gap-4 items-start">
        
        {/* Foto */}
         <div className="w-28 h-28 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="/img.png"
              alt="Foto"
              className="w-full h-full object-cover"
            />
          </div>



          {/* DADOS */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              Murilo Fernando Cunha Gaspar
            </h2>

           
            <p className="text-sm">
              <strong>Data de Nascimento:</strong> 05/05/1990
            </p>

            <p className="text-sm">
              <strong>Sexo:</strong> Masculino
            </p>
          
          </div>
        </div>

        {/* CARD DIREITO */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 text-sm">

          <p><strong>Informações Adicionais:</strong> </p>
          <p><strong>Altura</strong> 1,63 </p>
          <p><strong>Peso Atual:</strong> 97kg </p>
          <p><strong>Tempo de Academia:</strong> 4 meses </p>
          
        </div>

      </div>

    </div>

      {/* SELEÇÃO DO TIPO */}
      <div className="w-full bg-green-100 p-3 rounded-lg flex gap-4">
        <Button className="bg-green-900 text-white"
          onClick={() => setTela("abracoA")}
        >
          Braço (Tipo A)
        </Button>

        <Button className="bg-green-900 text-white"
          onClick={() => setTela("pernaB")}
        >
          Perna (Tipo B)
        </Button>
      </div>

      {/* ÁREA ONDE O CONTEÚDO MUDA */}
      {tela === "default" && (
        <div className="p-6 text-gray-700">
          <h2 className="text-xl font-bold">Selecione um dos tipos acima</h2>
        </div>
      )}

      {tela === "abracoA" && (
        <div className="p-6 bg-white rounded-lg shadow">
          <TipoABraco/>
        </div>
      )}

      {tela === "pernaB" && (
        <div className="p-6 bg-white rounded-lg shadow">
          <TipoBPerna/>
        </div>
      )}

    </div>
  );
}
