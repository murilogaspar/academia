"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus } from "lucide-react";

// TIPOS CORRETOS
type ExercItem = {
  exercicio: string;
  series: string;
  reps: string;
  carga: string;
  checked: boolean;
};

type CampoEditavel = "series" | "reps" | "carga";

export default function TipoABraco() {
  const [dados, setDados] = useState<ExercItem[]>([
    { exercicio: "SUPINO INCLIN. ART.", series: "", reps: "", carga: "", checked: false },
    { exercicio: "PUXADA LETTA", series: "", reps: "", carga: "", checked: false },
    { exercicio: "REMADA ARTICULADA", series: "", reps: "", carga: "", checked: false },
    { exercicio: "VOADOR", series: "", reps: "", carga: "", checked: false },
    { exercicio: "TRÍCEPS COICE", series: "", reps: "", carga: "", checked: false },
    { exercicio: "ROSCA MÁQUINA", series: "", reps: "", carga: "", checked: false },
    { exercicio: "ROSCA MÁQUINA", series: "", reps: "", carga: "", checked: false },
  ]);

  const [novo, setNovo] = useState<ExercItem>({
    exercicio: "",
    series: "",
    reps: "",
    carga: "",
    checked: false,
  });

  function atualizarValor(i: number, campo: CampoEditavel, valor: string) {
    const copia = [...dados];
    copia[i] = { ...copia[i], [campo]: valor };
    setDados(copia);
  }

  function adicionarLinha() {
    if (!novo.exercicio) return;
    setDados([...dados, novo]);
    setNovo({ exercicio: "", series: "", reps: "", carga: "", checked: false });
  }

  function removerLinha(i: number) {
    setDados(dados.filter((_, idx) => idx !== i));
  }

  function toggleCheck(i: number) {
    const copia = [...dados];
    copia[i].checked = !copia[i].checked;
    setDados(copia);
  }

  return (
    <div className="w-full p-4 flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-4">Treino A</h2>

      {/* TABELA */}
      <Card>
        <CardContent className="p-4">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[5%] text-center">OK</TableHead>
                <TableHead className="w-[40%]">Exercício</TableHead>
                <TableHead className="text-center w-[15%]">Séries</TableHead>
                <TableHead className="text-center w-[15%]">Reps</TableHead>
                <TableHead className="text-center w-[15%]">Carga</TableHead>
                <TableHead className="text-center w-[10%]">Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {dados.map((item, i) => (
                <TableRow key={i}>
                  
                  {/* CHECKBOX */}
                  <TableCell className="text-center">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck(i)}
                      className="h-4 w-4"
                    />
                  </TableCell>

                  <TableCell className="font-medium">{item.exercicio}</TableCell>

                  <TableCell className="text-center">
                    <Input
                      value={item.series}
                      onChange={(e) => atualizarValor(i, "series", e.target.value)}
                      className="text-center"
                    />
                  </TableCell>

                  <TableCell className="text-center">
                    <Input
                      value={item.reps}
                      onChange={(e) => atualizarValor(i, "reps", e.target.value)}
                      className="text-center"
                    />
                  </TableCell>

                  <TableCell className="text-center">
                    <Input
                      value={item.carga}
                      onChange={(e) => atualizarValor(i, "carga", e.target.value)}
                      className="text-center"
                    />
                  </TableCell>

                  <TableCell className="text-center">
                    <Button variant="destructive" size="icon" onClick={() => removerLinha(i)}>
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* FORMULÁRIO LATERAL */}
      <Card>
        <CardContent className="p-4 flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Adicionar Exercício</h3>

          <Input
            placeholder="Nome do exercício"
            value={novo.exercicio}
            onChange={(e) => setNovo({ ...novo, exercicio: e.target.value })}
          />

          <div className="grid grid-cols-3 gap-3">
            <Input
              placeholder="Séries"
              value={novo.series}
              onChange={(e) => setNovo({ ...novo, series: e.target.value })}
            />
            <Input
              placeholder="Reps"
              value={novo.reps}
              onChange={(e) => setNovo({ ...novo, reps: e.target.value })}
            />
            <Input
              placeholder="Carga"
              value={novo.carga}
              onChange={(e) => setNovo({ ...novo, carga: e.target.value })}
            />
          </div>

          <Button onClick={adicionarLinha} className="w-full mt-2">
            <Plus className="mr-2 h-4 w-4" /> Adicionar exercício
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
