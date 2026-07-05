import * as S from "./styles";

export default function ContactPage() {
  return (
    <S.Container>
      <S.Content>
        <S.Badge>📩 Contato</S.Badge>

        <S.Title>Entre em contato</S.Title>

        <S.Updated>
          Estamos disponíveis para dúvidas, sugestões e solicitações.
        </S.Updated>

        <S.Section>
          <S.SectionTitle>Suporte</S.SectionTitle>

          <S.Text>
            Caso encontre problemas técnicos, dificuldades de acesso ou queira
            enviar sugestões para melhorar a plataforma, entre em contato pelos
            canais oficiais.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Direitos Autorais</S.SectionTitle>

          <S.Text>
            Solicitações relacionadas a conteúdo protegido por direitos
            autorais deverão seguir nossa política de DMCA.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>E-mail</S.SectionTitle>

          <S.Text>
            contato@papaflix.com
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Horário de atendimento</S.SectionTitle>

          <S.Text>
            Segunda a sexta-feira, em horário comercial.
          </S.Text>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}