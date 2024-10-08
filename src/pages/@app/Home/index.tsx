import React from 'react';
import { ButtonInfos, CalendarIcon, Container, ContainerBlueBar, ContainerCharts, ContainerSectionsInfos, ContentBlueBar, DateText, GridWrapper, HeaderInfos, Information, InformationCard, SectionInfos, StyledDateContainer, StyledNameContainer, TitleInfos, WelcomeContaint, WelcomeTextContent, WelcomeParagraph, WelcomeTitle, WelcomeImgContent } from './styled';
import { CaretRight, DotsThreeVertical, House } from 'phosphor-react';
import rocketGscare from '../../../assets/rocket-gscare2.png';
import CardAmountAndTile from '../../../components/CardAmountAndTile';
import LineChart from '../../../components/ChatsHomeAdmin/LineChart';
import ColumnChart from '../../../components/ChatsHomeAdmin/ColumnChart';
import { ProgressBar } from '../../../components/ProgressBar';
import TextGscare from '../../../components/TextGscare';

interface CardAmountAndTileProps {
  type: "base-patient" | "base-employee" | "base-consultas-feitas-mes" | "base-consultas-abertas-mes";
  title: string;
  amount: string;
}

const data: CardAmountAndTileProps[] = [
  { type: 'base-consultas-abertas-mes', title: 'Nº Consultas a fazer no mês', amount: '78' },
  { type: 'base-consultas-feitas-mes', title: 'Nº Consultas feitas no mês', amount: '22' },
  { type: 'base-employee', title: 'Nº Funcionários', amount: '29' },
  { type: 'base-patient', title: 'Nº Pacientes', amount: '132' },
];


// Componente principal
const Home: React.FC = () => {
  // Função para obter a data de hoje
  const getTodayDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return today.toLocaleDateString('pt-BR', options);
  };

  const chartData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const chartColumnData = {
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    title: 'Monthly Inflation in Argentina, 2002',
  };

  return (
    <Container>
      <ContainerBlueBar>
        <ContentBlueBar>
          <StyledNameContainer>
            <div>
              <House size={30} />
              <p>Dashboard</p>
            </div>
            <p className="info-text">veja as informações mais importantes</p>
          </StyledNameContainer>
          <StyledDateContainer>
            <CalendarIcon />
            <DateText>
              <span>Data:</span>
              {getTodayDate()}
            </DateText>
          </StyledDateContainer>
        </ContentBlueBar>
      </ContainerBlueBar>
      <ContainerSectionsInfos>
        <SectionInfos>
          <WelcomeContaint>
            <WelcomeTextContent>
              <WelcomeTitle>Bem vindos ao <TextGscare /></WelcomeTitle>
              <WelcomeParagraph>
                Bem-vindos ao líder em gestão de saúde! Oferecemos cuidados superiores e satisfação total, para sua empresa e seus clientes
              </WelcomeParagraph>
            </WelcomeTextContent>
            <WelcomeImgContent>
              <img src={rocketGscare} alt="" />
            </WelcomeImgContent>
            {/* <img src={helloWork} alt="" /> */}
          </WelcomeContaint>
        </SectionInfos>

        <SectionInfos>
          <HeaderInfos>
            <TitleInfos>Lista de Pacientes</TitleInfos>
            <ButtonInfos><DotsThreeVertical size={20} /></ButtonInfos>
          </HeaderInfos>
          <Information>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
            <InformationCard>
              <div>
                <span>11/10/2002</span>
              </div>
              <div className='namePaciente'>
                <h3>Fernando Franco 21231231231</h3>
              </div>
              <div>
                <CaretRight size={20} />
              </div>
            </InformationCard>
          </Information>
        </SectionInfos>

        <SectionInfos>
          <HeaderInfos>
            <TitleInfos>Lista de Funcionários</TitleInfos>
            <ButtonInfos><DotsThreeVertical size={20} /></ButtonInfos>
          </HeaderInfos>
          <Information>
            <ProgressBar percentage={28} name="Atendimentos do Mês" showText={true} barColor="#b50f00bf" />
            <ProgressBar percentage={71} name="Atendimentos do Mês" showText={true} barColor="#F4A100bf" />
            <ProgressBar percentage={13} name="Atendimentos do Mês" showText={true} barColor="#324a83bf" />
            <ProgressBar percentage={94} name="Atendimentos do Mês" showText={true} barColor="#00CED4bf" />
            <ProgressBar percentage={72} name="Atendimentos do Mês" showText={true} barColor="#00AC69bf" />

          </Information>
        </SectionInfos>
      </ContainerSectionsInfos>

      {/* divs com dados de faturamento e outros numeros importantes */}
      <GridWrapper>
        {data.map((item, index) => (
          <CardAmountAndTile key={index} type={item.type} title={item.title} amount={item.amount} />
        ))}
      </GridWrapper>

      {/* graficos com dados da conta */}
      <ContainerCharts>
        <LineChart data={chartData} categories={chartCategories} />
        <ColumnChart data={chartColumnData.data} categories={chartColumnData.categories} title={chartColumnData.title} />
      </ContainerCharts>
    </Container>
  );
};

export default Home;
