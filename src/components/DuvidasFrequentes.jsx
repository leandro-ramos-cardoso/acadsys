import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


const DuvidasFrequentes = () => {
    return (
        <Container className="mb-5 mt-5">
            <h1 className="mb-5 mt-5">
                Dúvidas Frequentes
            </h1>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Como faço a matrícula do meu filho na AcadSys?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Você pode realizar a matrícula diretamente em nosso site clicando na aba "Cadastrar Aluno", ou presencialmente na secretaria da escola com os documentos pessoais e comprovante de residência.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>A AcadSys oferece ensino híbrido ou apenas presencial?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Atualmente, nossa proposta pedagógica é focada no ensino presencial, mas também utilizamos plataformas digitais de apoio para atividades complementares.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Posso acessar o Acadsys pelo celular?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Sim, o Acadsys é compatível com dispositivos móveis. Você pode acessar o sistema através do navegador do seu smartphone ou tablet.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Como visualizo minhas notas e frequências?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Após o login, vá até o menu "Acadêmico" e selecione "Notas e Frequência". Lá, você encontrará todas as informações atualizadas sobre seu desempenho.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Como solicito declarações ou atestados?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        No menu "Documentos", selecione o tipo de declaração desejada e siga as instruções para emissão ou solicitação.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Como acesso meus boletos de pagamento?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        No menu "Financeiro", clique em "Boletos". Você poderá visualizar, imprimir ou gerar a segunda via dos seus boletos.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default DuvidasFrequentes