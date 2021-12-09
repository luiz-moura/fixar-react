import React, { useEffect, useState } from 'react';

import { Container, Content, Supports, Support, Section } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Alert from '../../components/Alert';

import api from '../../services/api';

interface SupportDTO {
  id: string;
  subject: string;
  message: string;
  email: string;
}

const SupportList: React.FC = () => {
  const [supports, setSupports] = useState<SupportDTO[]>([]);

  useEffect(() => {
    api.get(`/supports`).then((response) => {
      setSupports(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Supports>
          <p>
            <span>Todos os chamados</span>
          </p>
          <h1>Suporte</h1>
          <Section>
            {supports.map((support) => (
              <Support>
                <h2>Assunto: {support.subject}</h2>
                <h4>email para contato: {support.email}</h4>
                <p>Mensagem:</p>
                <p>{support.message}</p>
              </Support>
            ))}
            {supports.length < 1 && <Alert>Nenhum chamado de suporte</Alert>}
          </Section>
        </Supports>
      </Content>
      <Footer />
    </Container>
  );
};

export default SupportList;
