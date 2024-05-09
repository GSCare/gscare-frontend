import React from 'react';
import styled from 'styled-components';
import { Funnel } from 'phosphor-react';

interface IPatient {
  id: number;
  titulo: String,
  tipo: String,
  inicio: String,
  fim: String,
  mensagem: String,
}

interface Props {
  patients: IPatient[];
}
const Container = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  /* margin: 20px auto;
  padding: 20px;
  background-color: #fff; */
  /* border-radius: 5px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContainerTable = styled.div`
  width: 100%;
  overflow-x: auto;
  max-height: 500px;
  min-height: 500px;
  border-radius: 2px; /* Adicionando borda arredondada para o scroll */
  /* Adicionando estilo personalizado para o scroll */
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

// const Th = styled.th`
//   padding: 12px 15px;
//   text-align: left;
//   border-bottom: 1px solid #ddd;
//   background-color: #fff;
//   font-weight: 500;
//   color: #333;
//   white-space: nowrap;
// `;
const Th = styled.th`
  padding: 15px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  position: sticky; /* Torna o cabeçalho fixo */
  top: 0; /* Define a posição fixa no topo */
  z-index: 1; /* Define a ordem z para que fique acima do conteúdo rolável */

  svg {
    transform: translate(5px, 20%);
    cursor: pointer;
  }
`;

const Td = styled.td`
  padding: 20px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /* min-width: 150px; */
  white-space: nowrap; /* Evita que o texto seja quebrado em várias linhas */
  /* Definindo a largura das colunas */
  width: 12%;
`;

const Tbody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f9f9ff;
  }
  & tr:nth-child(odd) {
    background-color: #fff;
  }
`;

const PatientTable: React.FC<Props> = ({ patients }) => {
  return (
    <>
      <Container>
        <ContainerTable>
          <Table id="patientTable">
            <thead>
              <tr>
                <Th>
                  Titulo
                  <Funnel size={18} />
                </Th>
                <Th>
                  Tipo
                  <Funnel size={18} />
                </Th>
                <Th>
                  Inicio
                  <Funnel size={18} />
                </Th>
                <Th>
                  Fim
                  <Funnel size={18} />
                </Th>
                <Th>
                  Mensagem
                  <Funnel size={18} />
                </Th>
              </tr>
            </thead>
            <Tbody id="tableBody">
              {patients.map(patient => (
                <tr key={patient.id}>
                  <Td>{patient.titulo}</Td>
                  <Td>{patient.tipo}</Td>
                  <Td>{patient.inicio}</Td>
                  <Td>{patient.fim}</Td>
                  <Td>{patient.mensagem}</Td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </ContainerTable>
      </Container>
    </>
  );
};

export default PatientTable;
