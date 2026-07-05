import * as S from "./styles";

export default function TermsPage() {
  return (
    <S.Container>
      <S.Content>
        <S.Badge>📜 Termos</S.Badge>

        <S.Title>Termos de Uso</S.Title>

        <S.Updated>
          Última atualização: 05/07/2026
        </S.Updated>

        <S.Section>
          <S.SectionTitle>1. Aceitação</S.SectionTitle>

          <S.Text>
            Ao acessar o Papaflix, o usuário declara possuir idade legal para
            visualizar conteúdo adulto em sua região e concorda com estes
            Termos de Uso.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>2. Conta do usuário</S.SectionTitle>

          <S.Text>
            O usuário é responsável pelas informações utilizadas no login e por
            manter sua conta segura.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>3. Conteúdo</S.SectionTitle>

          <S.Text>
            O Papaflix pode remover conteúdos que violem leis, direitos
            autorais, políticas internas ou solicitações legais.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>4. Conduta</S.SectionTitle>

          <S.Text>
            É proibido utilizar a plataforma para atividades ilegais,
            distribuição de malware, fraude, tentativa de invasão ou qualquer
            comportamento que prejudique outros usuários.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>5. Direitos Autorais</S.SectionTitle>

          <S.Text>
            Todo conteúdo enviado deve possuir autorização do titular dos
            direitos. Solicitações de remoção poderão ser feitas através da
            página DMCA.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.SectionTitle>6. Alterações</S.SectionTitle>

          <S.Text>
            Estes Termos poderão ser modificados periodicamente sem aviso
            prévio, permanecendo disponível sempre a versão mais recente nesta
            página.
          </S.Text>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}