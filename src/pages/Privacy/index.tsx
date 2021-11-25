import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

const Privacy: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Link to="/courses">
            <FiArrowLeft />
            <img src={logoImg} alt="Fixar" />
          </Link>
        </div>
      </header>
      <Content>
        <h2>Coleta e usos de informações pessoais</h2>
        <p>
          O Usuário está ciente de que fornece informação de forma consciente e
          voluntária por meio de [FORMULÁRIO/ETC]. Quando o Usuário realiza o
          cadastro e/ou preenche formulários oferecidos pela FIXAR, determinados
          Dados Pessoais solicitados serão mantidos em sigilo e serão utilizadas
          apenas para o propósito que motivou o cadastro.
        </p>
        <hr />
        <h2>Compartilhamento e tratamento de informações pessoais</h2>
        <p>
          A Fixar não disponibilizará Dados Pessoais coletados em seus sites
          para corretores de lista de e-mail sem seu expresso consentimento.
        </p>
        <p>
          A Fixar poderá divulgar os Dados Pessoais coletados a terceiros, nas
          seguintes situações e nos limites exigidos e autorizados pela Lei:
        </p>
        <ol>
          <li>
            Com os seus clientes e parceiros quando necessário e/ou apropriado à
            prestação de serviços relacionados;
          </li>
          <li>
            Com as empresas e indivíduos contratados para a execução de
            determinadas atividades e serviços em nome da Fixar;
          </li>
          <li>Com empresas do grupo</li>
          <li>
            Com fornecedores e parceiros para consecução dos serviços
            contratados com a Fixar (como tecnologia da informação,
            contabilidade, entre outros);
          </li>
          <li>
            Para propósitos administrativos como: pesquisa, planejamento,
            desenvolvimento de serviços, segurança e gerenciamento de risco.
          </li>
          <li>
            Quando necessário em decorrência de obrigação legal, determinação de
            autoridade competente, ou decisão judicial. Nas hipóteses de
            compartilhamento de Dados Pessoais com terceiros, todos os sujeitos
            mencionados nos itens I a VI deverão utilizar os Dados Pessoais
            partilhados de maneira consistente e de acordo com os propósitos
            para os quais foram coletados (ou com os quais o Usuário consentiu
            previamente) e de acordo com o que foi determinado por esta Política
            de Privacidade, outras declarações de privacidade de website ou
            países, e todas as leis de privacidade e proteção de dados
            aplicáveis.
          </li>
        </ol>
        <hr />
        <h2>Segurança de informações pessoais</h2>
        <p>
          Todas os Dados Pessoais serão guardados na base de dados da Fixar ou
          em base de dados mantidas “na nuvem” pelos fornecedores de serviços
          contratados pela Fixar, os quais estão devidamente de acordo com a
          legislação de dados vigente.
        </p>
        <p>
          A Fixar e seus fornecedores utilizam vários procedimentos de segurança
          para proteger a confidencialidade, segurança e integridade de seus
          Dados Pessoais, prevenindo a ocorrência de eventuais danos em virtude
          do tratamento desses dados.
        </p>
        <p>
          Embora a Fixar utilize medidas de segurança e monitore seu sistema
          para verificar vulnerabilidades e ataques para proteger seus Dados
          Pessoais contra divulgação não autorizada, mau uso ou alteração, o
          Usuário entende e concorda que não há garantias de que as informações
          não poderão ser acessadas, divulgadas, alteradas ou destruídas por
          violação de qualquer uma das proteções físicas, técnicas ou
          administrativas.
        </p>
        <hr />
        <h2>Retenção de dados</h2>
        <p>
          A Fixar retém todos os dados fornecidos, inclusive os Dados Pessoais,
          enquanto o cadastro do Usuário estiver ativo e conforme seja
          necessário para consecução de seus serviços.
        </p>
        <p>
          A Fixar reterá seus Dados Pessoais e manterá seus dados armazenados
          até eventual requerimento de exclusão, ou de acordo com os períodos
          descritos na Tabela de Finalidades.
        </p>
        <p>
          A Fixar poderá vir a manter seus Dados Pessoais após receber seu
          pedido de exclusão ou após os prazos da Tabela de Finalidades caso
          seja necessário para cumprimento de obrigações legais, resolver
          disputas, manter a segurança, evitar fraudes e abuso e garantir o
          cumprimento de contratos.
        </p>
      </Content>
      <Footer />
    </Container>
  );
};

export default Privacy;
